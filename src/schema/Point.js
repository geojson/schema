import BoundingBox from './ref/BoundingBox.js';
import PointCoordinates from './ref/PointCoordinates.js';

export default {
  title: 'GeoJSON Point',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['Point'],
    },
    coordinates: PointCoordinates,
    bbox: BoundingBox,
  },
};
