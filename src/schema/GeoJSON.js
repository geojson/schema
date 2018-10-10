const Point = require('./Point');
const LineString = require('./LineString');
const Polygon = require('./Polygon');
const MultiPoint = require('./MultiPoint');
const MultiLineString = require('./MultiLineString');
const MultiPolygon = require('./MultiPolygon');
const GeometryCollection = require('./GeometryCollection');
const Feature = require('./Feature');
const FeatureCollection = require('./FeatureCollection');

module.exports = {
  title: 'GeoJSON',
  oneOf: [
    Point,
    LineString,
    Polygon,
    MultiPoint,
    MultiLineString,
    MultiPolygon,
    GeometryCollection,
    Feature,
    FeatureCollection
  ]
};
