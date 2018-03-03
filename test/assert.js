'use strict';

const Ajv = require('ajv');
const fs = require('fs');
const promisify = require('util').promisify;
const globby = require('globby');
const path = require('path');

const ajv = new Ajv({allErrors: true, verbose: true});

const readFile = promisify(fs.readFile);

async function readJson(file) {
  const data = await readFile(file, 'utf8');
  return JSON.parse(data);
}

const fixturesDir = path.join(__dirname, 'fixtures');
const schemaDir = path.join(__dirname, '..', 'build');

function reportErrors(schemaName, fixtureName, errors) {
  let message = `${fixtureName}:\n`;
  for (const error of errors) {
    message += `  ${error.dataPath} ${error.message} (${schemaName}${error.schemaPath})\n`;
  }
  process.stderr.write(message);
  process.exit(1);
}

function fatal(err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}

async function assertValidity(validity, schemaName, fixturePattern) {
  const validate = ajv.compile(require(path.join(schemaDir, schemaName)));
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

exports.valid = (schemaName, fixturePattern) => {
  assertValidity(true, schemaName, fixturePattern).catch(fatal);
};

exports.invalid = (schemaName, fixturePattern) => {
  assertValidity(false, schemaName, fixturePattern).catch(fatal);
};
