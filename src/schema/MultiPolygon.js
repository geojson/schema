var PolygonCoordinates = require('./ref/PolygonCoordinates');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON MultiPolygon',
  type: 'object',
  required: [
    'type',
    'coordinates'
  ],
  properties: {
    type: {
      type: 'string',
      enum: ['MultiPolygon']
    },
    coordinates: {
      type: 'array',
      items: PolygonCoordinates
    },
    bbox: BoundingBox
  }
};
