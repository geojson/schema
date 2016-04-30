var Point = require('./Point');
var LineString = require('./LineString');
var Polygon = require('./Polygon');
var MultiPoint = require('./MultiPoint');
var MultiLineString = require('./MultiLineString');
var MultiPolygon = require('./MultiPolygon');
var GeometryCollection = require('./GeometryCollection');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON Feature',
  type: 'object',
  required: [
    'type',
    'properties',
    'geometry'
  ],
  properties: {
    type: {
      type: 'string',
      emum: ['Feature']
    },
    properties: {
      type: 'object'
    },
    geometry: {
      oneOf: [
        {type: 'null'},
        Point,
        LineString,
        Polygon,
        MultiPoint,
        MultiLineString,
        MultiPolygon,
        GeometryCollection
      ]
    },
    bbox: BoundingBox
  }
};
