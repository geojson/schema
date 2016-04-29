var LineStringCoordinates = require('./ref/LineStringCoordinates');

module.exports = {
  title: 'GeoJSON MultiLineString',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['MultiLineString']
    },
    coordinates: {
      type: 'array',
      items: LineStringCoordinates
    }
  }
};
