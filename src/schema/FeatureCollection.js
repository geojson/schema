var Feature = require('./Feature');

module.exports = {
  title: 'GeoJSON FeatureCollection',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      emum: ['FeatureCollection']
    },
    features: {
      type: 'array',
      items: Feature
    }
  }
};
