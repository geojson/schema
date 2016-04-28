'use strict'

const Ajv = require('ajv');
const co = require('co');
const fsp = require('fs-promise');
const globby = require('globby');
const path = require('path');

const ajv = new Ajv({allErrors: true, verbose: true});

const fixturesDir = path.join(__dirname, 'fixtures');
const schemaDir = path.join(__dirname, '..', 'build');

function reportErrors(schemaName, fixtureName, errors) {
  let message = `${fixtureName}:\n`;
  for (let error of errors) {
    message += `  ${error.dataPath} ${error.message} (${schemaName}${error.schemaPath})\n`;
  }
  process.stderr.write(message);
  process.exit(1);
}

function fatal(err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}

const assertValidity = co.wrap(function*(validity, schemaName, fixturePattern) {
  const validate = ajv.compile(require(path.join(schemaDir, schemaName)));
  const paths = yield globby(fixturePattern, {cwd: fixturesDir});
  for (let fixtureName of paths) {
    const fixture = yield fsp.readJson(path.join(fixturesDir, fixtureName));
    const valid = validate(fixture);
    if (validity && !valid) {
      reportErrors(schemaName, fixtureName, validate.errors);
    } else if (!validity && valid) {
      throw new Error(`Expected ${fixtureName} not to validate against ${schemaName}`);
    }
  }
});

exports.valid = (schemaName, fixturePattern) => {
  assertValidity(true, schemaName, fixturePattern).catch(fatal);
};

exports.invalid = (schemaName, fixturePattern) => {
  assertValidity(false, schemaName, fixturePattern).catch(fatal);
};
