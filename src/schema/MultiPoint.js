var PointCoordinates = require('./ref/PointCoordinates');

module.exports = {
  title: 'GeoJSON MultiPoint',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['MultiPoint']
    },
    coordinates: {
      type: 'array',
      items: PointCoordinates
    }
  }
};
