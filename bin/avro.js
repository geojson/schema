#!/usr/bin/env node
import path from 'path';
import {promisify} from 'util';
import fs from 'fs';
import avro from 'jsonschema-avro';

const readFile = promisify(fs.readFile);

async function readJson(file) {
  const data = await readFile(file, 'utf8');
  return JSON.parse(data);
}

async function main() {
  const command = path.basename(process.argv[1]);
  const usage = `${command} <input>

  Provided the path to a JSON schema doc (e.g. build/Point.json), ${command}
  will write the formatted Avro schema to stdout.
  `;

  if (!process.argv[2]) {
    throw new Error(usage);
  }

  const input = path.resolve(process.argv[2]);

  let schema;
  try {
    schema = await readJson(input);
  } catch (err) {
    throw new Error(`Failed to read ${input}: ${err.message}\n`);
  }

  return avro.convert(schema);
}

main()
  .then(schema => {
    process.stdout.write(JSON.stringify(schema, null, 2) + '\n');
  })
  .catch(err => {
    process.stderr.write(err.message + '\n', () => process.exit(1));
  });
