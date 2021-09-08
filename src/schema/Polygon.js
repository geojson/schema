import PolygonCoordinates from './ref/PolygonCoordinates.js';
import BoundingBox from './ref/BoundingBox.js';

export default {
  title: 'GeoJSON Polygon',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['Polygon']
    },
    coordinates: PolygonCoordinates,
    bbox: BoundingBox
  }
};
