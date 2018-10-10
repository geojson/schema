const Point = require('./Point');
const LineString = require('./LineString');
const Polygon = require('./Polygon');
const MultiPoint = require('./MultiPoint');
const MultiLineString = require('./MultiLineString');
const MultiPolygon = require('./MultiPolygon');
const BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON GeometryCollection',
  type: 'object',
  required: ['type', 'geometries'],
  properties: {
    type: {
      type: 'string',
      enum: ['GeometryCollection']
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
