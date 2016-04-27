const Ajv = require('ajv');
const globby = require('globby');
const path = require('path');
const fsp = require('fs-promise');

const ajv = new Ajv({allErrors: true, verbose: true});

const fixturesDir = path.join(__dirname, 'fixtures');
const schemaDir = path.join(__dirname, '..', 'build');

function reportErrors(schemaName, name, errors) {
  process.stderr.write(`${name}:\n`);
  errors.forEach(error => {
    process.stderr.write(`  ${error.dataPath} ${error.message} (${schemaName}${error.schemaPath})\n`);
  });
  process.exit(1);
}

function assertValidFixture(schemaName, validate, name) {
  fsp.readJson(path.join(fixturesDir, name)).then(fixture => {
    const valid = validate(fixture);
    if (!valid) {
      reportErrors(schemaName, name, validate.errors);
    }
  });
}

function assertValid(schemaName, pattern) {
  const validate = ajv.compile(require(path.join(schemaDir, schemaName)));
  globby(pattern, {cwd: fixturesDir}).then(paths => {
    paths.forEach(name => {
      assertValidFixture(schemaName, validate, name);
    });
  });
}

assertValid('Point.json', 'valid/point/**/*.json');
