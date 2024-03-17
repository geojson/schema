#!/usr/bin/env node
import path from 'path';

async function main() {
  const baseURL = 'https://geojson.org/schema/';
  const command = path.basename(process.argv[1]);
  const usage = `${command} <input>

  Provided the path to a schema module (e.g. src/schema/Point.js), ${command}
  will write the formatted JSON schema to stdout.
  `;

  if (!process.argv[2]) {
    throw new Error(usage);
  }

  const input = path.resolve(process.argv[2]);

  let schema;
  try {
    const mod = await import(input);
    schema = mod.default;
  } catch (err) {
    throw new Error(`Failed to import ${input}: ${err.message}\n`);
  }

  return Object.assign(
    {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: `${baseURL}${path.basename(input)}on`,
    },
    schema
  );
}

main()
  .then((schema) => {
    process.stdout.write(JSON.stringify(schema, null, 2) + '\n');
  })
  .catch((err) => {
    process.stderr.write(err.message + '\n', () => process.exit(1));
  });
