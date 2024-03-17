#!/usr/bin/env node
import {basename, resolve} from 'node:path';
import {readFile} from 'node:fs/promises';

async function main() {
  const command = basename(process.argv[1]);
  const usage = `${command} <input>

  Provided the path to a package.json, ${command}
  will write the modified package.json to stdout.
  `;

  if (!process.argv[2]) {
    throw new Error(usage);
  }

  const input = resolve(process.argv[2]);

  const pkgData = await readFile(input, {encoding: 'utf-8'});
  const pkg = JSON.parse(pkgData);
  delete pkg.private;
  return pkg;
}

main()
  .then((schema) => {
    process.stdout.write(JSON.stringify(schema, null, 2) + '\n');
  })
  .catch((err) => {
    process.stderr.write(err.message + '\n', () => process.exit(1));
  });
