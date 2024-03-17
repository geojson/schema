import BoundingBox from './ref/BoundingBox.js';
import PolygonCoordinates from './ref/PolygonCoordinates.js';

export default {
  title: 'GeoJSON MultiPolygon',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['MultiPolygon'],
    },
    coordinates: {
      type: 'array',
      items: PolygonCoordinates,
    },
    bbox: BoundingBox,
  },
};
