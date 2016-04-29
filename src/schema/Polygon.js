var PolygonCoordinates = require('./ref/PolygonCoordinates');

module.exports = {
  title: 'GeoJSON Polygon',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['Polygon']
    },
    coordinates: PolygonCoordinates
  }
};
