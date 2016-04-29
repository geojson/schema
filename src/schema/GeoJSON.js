var Point = require('./Point');
var LineString = require('./LineString');
var Polygon = require('./Polygon');
var MultiPoint = require('./MultiPoint');
var MultiLineString = require('./MultiLineString');
var MultiPolygon = require('./MultiPolygon');
var GeometryCollection = require('./GeometryCollection');
var Feature = require('./Feature');
var FeatureCollection = require('./FeatureCollection');

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
