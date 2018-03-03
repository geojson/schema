#!/usr/bin/env node
'use strict';

const path = require('path');

const baseURL = 'http://geojson.org/schema/';
const command = path.basename(process.argv[1]);
const usage = `${command} <input>

Provided the path to a schema module (e.g. src/schema/Point.js), ${command}
will write the formatted JSON schema to stdout.
`;

function fail(message) {
  process.stderr.write(message);
  process.exit(1);
}

if (require.main === module) {
  if (!process.argv[2]) {
    fail(usage);
  }
  const input = path.resolve(process.argv[2]);
  let json;
  try {
    json = require(input);
  } catch (err) {
    fail(`Failed to import ${input}: ${err.message}\n`);
  }
  const schema = Object.assign(
    {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: `${baseURL}${path.basename(input)}on`
    },
    json
  );
  process.stdout.write(JSON.stringify(schema, null, 2) + '\n');
}
