import BoundingBox from './ref/BoundingBox.js';
import Feature from './Feature.js';

export default {
  title: 'GeoJSON FeatureCollection',
  type: 'object',
  required: ['type', 'features'],
  properties: {
    type: {
      type: 'string',
      enum: ['FeatureCollection'],
    },
    features: {
      type: 'array',
      items: Feature,
    },
    bbox: BoundingBox,
  },
};
