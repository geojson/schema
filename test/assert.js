import Ajv from 'ajv';
import fs from 'fs';
import {promisify} from 'util';
import {globby} from 'globby';
import path from 'path';
import {fileURLToPath} from 'url';

const readFile = promisify(fs.readFile);

async function readJson(file) {
  const data = await readFile(file, 'utf8');
  return JSON.parse(data);
}

const baseDir = path.dirname(fileURLToPath(import.meta.url));

const fixturesDir = path.join(baseDir, 'fixtures');
const schemaDir = path.join(baseDir, '..', 'build');

function reportErrors(schemaName, fixtureName, errors) {
  let message = `${fixtureName}:\n`;
  for (const error of errors) {
    message += `  ${fixtureName} ${error.message} (${schemaName}${error.schemaPath})\n`;
  }
  process.stderr.write(message);
  process.exit(1);
}

function fatal(err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}

async function assertValidity(validity, schemaName, fixturePattern) {
  const ajv = new Ajv({allErrors: true, verbose: true});
  const schemaPath = path.join(schemaDir, schemaName);
  const schema = await readJson(schemaPath);
  let validate;
  try {
    validate = ajv.compile(schema);
  } catch (err) {
    throw new Error(`Error compiling schema ${schemaPath}: ${err.message}`);
  }
  const paths = await globby(fixturePattern, {cwd: fixturesDir});
  for (const fixtureName of paths) {
    const fixture = await readJson(path.join(fixturesDir, fixtureName));
    const valid = validate(fixture);
    if (validity && !valid) {
      reportErrors(schemaName, fixtureName, validate.errors);
    } else if (!validity && valid) {
      throw new Error(
        `Expected ${fixtureName} not to validate against ${schemaName}`
      );
    }
  }
}

export function valid(schemaName, fixturePattern) {
  assertValidity(true, schemaName, fixturePattern).catch(fatal);
}

export function invalid(schemaName, fixturePattern) {
  assertValidity(false, schemaName, fixturePattern).catch(fatal);
}
