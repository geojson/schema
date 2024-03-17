import BoundingBox from './ref/BoundingBox.js';
import PolygonCoordinates from './ref/PolygonCoordinates.js';

export default {
  title: 'GeoJSON Polygon',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['Polygon'],
    },
    coordinates: PolygonCoordinates,
    bbox: BoundingBox,
  },
};
