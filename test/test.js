const assert = require('./assert');

assert.valid('Point.json', 'valid/point/**/*.json');
assert.valid('LineString.json', 'valid/linestring/**/*.json');
assert.valid('Polygon.json', 'valid/polygon/**/*.json');
assert.valid('MultiPoint.json', 'valid/multipoint/**/*.json');
assert.valid('GeoJSON.json', 'valid/**/*.json');

assert.invalid('Point.json', 'invalid/**/*.json');
assert.invalid('LineString.json', 'invalid/**/*.json');
assert.invalid('Polygon.json', 'invalid/**/*.json');
assert.invalid('MultiPoint.json', 'invalid/**/*.json');
assert.invalid('MultiLineString.json', 'invalid/**/*.json');
assert.invalid('MultiPolygon.json', 'invalid/**/*.json');
assert.invalid('GeometryCollection.json', 'invalid/**/*.json');
assert.invalid('Feature.json', 'invalid/**/*.json');
assert.invalid('FeatureCollection.json', 'invalid/**/*.json');
assert.invalid('GeoJSON.json', 'invalid/**/*.json');
