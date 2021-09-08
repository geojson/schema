import {valid, invalid} from './assert.js';

valid('Point.json', 'valid/point/**/*.json');
valid('LineString.json', 'valid/linestring/**/*.json');
valid('Polygon.json', 'valid/polygon/**/*.json');
valid('MultiPoint.json', 'valid/multipoint/**/*.json');
valid('MultiLineString.json', 'valid/multilinestring/**/*.json');
valid('MultiPolygon.json', 'valid/multipolygon/**/*.json');
valid('GeometryCollection.json', 'valid/geometrycollection/**/*.json');
valid('GeoJSON.json', 'valid/**/*.json');

invalid('Point.json', 'invalid/**/*.json');
invalid('LineString.json', 'invalid/**/*.json');
invalid('Polygon.json', 'invalid/**/*.json');
invalid('MultiPoint.json', 'invalid/**/*.json');
invalid('MultiLineString.json', 'invalid/**/*.json');
invalid('MultiPolygon.json', 'invalid/**/*.json');
invalid('GeometryCollection.json', 'invalid/**/*.json');
invalid('Feature.json', 'invalid/**/*.json');
invalid('FeatureCollection.json', 'invalid/**/*.json');
invalid('GeoJSON.json', 'invalid/**/*.json');
