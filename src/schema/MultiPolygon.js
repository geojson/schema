var PolygonCoordinates = require('./ref/PolygonCoordinates');

module.exports = {
  title: 'GeoJSON MultiPolygon',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['MultiPolygon']
    },
    coordinates: {
      type: 'array',
      items: PolygonCoordinates
    }
  }
};
