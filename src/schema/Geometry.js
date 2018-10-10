const Point = require('./Point');
const LineString = require('./LineString');
const Polygon = require('./Polygon');
const MultiPoint = require('./MultiPoint');
const MultiLineString = require('./MultiLineString');
const MultiPolygon = require('./MultiPolygon');

module.exports = {
  title: 'GeoJSON Geometry',
  oneOf: [Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon]
};
