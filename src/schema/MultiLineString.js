import BoundingBox from './ref/BoundingBox.js';
import LineStringCoordinates from './ref/LineStringCoordinates.js';

export default {
  title: 'GeoJSON MultiLineString',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['MultiLineString'],
    },
    coordinates: {
      type: 'array',
      items: LineStringCoordinates,
    },
    bbox: BoundingBox,
  },
};
