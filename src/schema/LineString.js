var LineStringCoordinates = require('./ref/LineStringCoordinates');

module.exports = {
  title: 'GeoJSON LineString',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['LineString']
    },
    coordinates: LineStringCoordinates
  }
};
