const assert = require('./assert');

assert.valid('Point.json', 'valid/point/**/*.json');
assert.invalid('Point.json', 'invalid/point/**/*.json');

assert.valid('GeoJSON.json', 'valid/**/*.json');
assert.invalid('GeoJSON.json', 'invalid/**/*.json');
