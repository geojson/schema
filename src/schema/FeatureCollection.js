import Feature from './Feature.js';
import BoundingBox from './ref/BoundingBox.js';

export default {
  title: 'GeoJSON FeatureCollection',
  type: 'object',
  required: ['type', 'features'],
  properties: {
    type: {
      type: 'string',
      enum: ['FeatureCollection']
    },
    features: {
      type: 'array',
      items: Feature
    },
    bbox: BoundingBox
  }
};
