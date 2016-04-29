var PointCoordinates = require('./ref/PointCoordinates');

module.exports = {
  title: 'GeoJSON Point',
  type: 'object',
  required: [
    'type',
    'coordinates'
  ],
  properties: {
    type: {
      type: 'string',
      enum: ['Point']
    },
    coordinates: PointCoordinates
  }
};
