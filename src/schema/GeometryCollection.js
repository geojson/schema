import Point from './Point.js';
import LineString from './LineString.js';
import Polygon from './Polygon.js';
import MultiPoint from './MultiPoint.js';
import MultiLineString from './MultiLineString.js';
import MultiPolygon from './MultiPolygon.js';
import BoundingBox from './ref/BoundingBox.js';

export default {
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
