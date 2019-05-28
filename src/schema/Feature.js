const Point = require('./Point');
const LineString = require('./LineString');
const Polygon = require('./Polygon');
const MultiPoint = require('./MultiPoint');
const MultiLineString = require('./MultiLineString');
const MultiPolygon = require('./MultiPolygon');
const GeometryCollection = require('./GeometryCollection');
const BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON Feature',
  type: 'object',
  required: ['type', 'properties', 'geometry'],
  properties: {
    type: {
      type: 'string',
      enum: ['Feature']
    },
    id: {
      oneOf: [{type: 'number'}, {type: 'string'}]
    },
    properties: {
      oneOf: [{type: 'null'}, {type: 'object'}]
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
