import BoundingBox from './ref/BoundingBox.js';
import LineString from './LineString.js';
import MultiLineString from './MultiLineString.js';
import MultiPoint from './MultiPoint.js';
import MultiPolygon from './MultiPolygon.js';
import Point from './Point.js';
import Polygon from './Polygon.js';

export default {
  title: 'GeoJSON GeometryCollection',
  type: 'object',
  required: ['type', 'geometries'],
  properties: {
    type: {
      type: 'string',
      enum: ['GeometryCollection'],
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
          MultiPolygon,
        ],
      },
    },
    bbox: BoundingBox,
  },
};
