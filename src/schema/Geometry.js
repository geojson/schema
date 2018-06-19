var Point = require('./Point');
var LineString = require('./LineString');
var Polygon = require('./Polygon');
var MultiPoint = require('./MultiPoint');
var MultiLineString = require('./MultiLineString');
var MultiPolygon = require('./MultiPolygon');

module.exports = {
  title: 'GeoJSON Geometry',
  oneOf: [Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon]
};
