const Feature = require('./Feature');
const BoundingBox = require('./ref/BoundingBox');

module.exports = {
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
