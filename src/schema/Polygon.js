var PolygonCoordinates = require('./ref/PolygonCoordinates');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON Polygon',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['Polygon']
    },
    coordinates: PolygonCoordinates,
    bbox: BoundingBox
  }
};
