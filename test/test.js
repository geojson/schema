const assert = require('./assert');

assert.valid('Point.json', 'valid/point/**/*.json');
assert.invalid('Point.json', 'invalid/point/**/*.json');

assert.valid('LineString.json', 'valid/linestring/**/*.json');
assert.invalid('LineString.json', 'invalid/linestring/**/*.json');

assert.valid('Polygon.json', 'valid/polygon/**/*.json');
assert.invalid('Polygon.json', 'invalid/polygon/**/*.json');

assert.valid('GeoJSON.json', 'valid/**/*.json');
assert.invalid('GeoJSON.json', 'invalid/**/*.json');
