var Point = require('./Point');
var LineString = require('./LineString');
var Polygon = require('./Polygon');
var MultiPoint = require('./MultiPoint');
var MultiLineString = require('./MultiLineString');
var MultiPolygon = require('./MultiPolygon');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON GeometryCollection',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      emum: ['GeometryCollection']
    },
    geometries: {
      type: 'array',
      items: {
        oneOf: [
          Point,
          LineString,
          Polygon,
          MultiPoint,
          MultiLineString,
          MultiPolygon
        ]
      }
    },
    bbox: BoundingBox
  }
};
