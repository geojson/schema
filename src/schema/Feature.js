import Point from './Point.js';
import LineString from './LineString.js';
import Polygon from './Polygon.js';
import MultiPoint from './MultiPoint.js';
import MultiLineString from './MultiLineString.js';
import MultiPolygon from './MultiPolygon.js';
import GeometryCollection from './GeometryCollection.js';
import BoundingBox from './ref/BoundingBox.js';

export default {
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
