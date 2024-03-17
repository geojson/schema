import BoundingBox from './ref/BoundingBox.js';
import LineStringCoordinates from './ref/LineStringCoordinates.js';

export default {
  title: 'GeoJSON LineString',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['LineString'],
    },
    coordinates: LineStringCoordinates,
    bbox: BoundingBox,
  },
};
