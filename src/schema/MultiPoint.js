var PointCoordinates = require('./ref/PointCoordinates');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON MultiPoint',
  type: 'object',
  required: [
    'type',
    'coordinates'
  ],
  properties: {
    type: {
      type: 'string',
      enum: ['MultiPoint']
    },
    coordinates: {
      type: 'array',
      items: PointCoordinates
    },
    bbox: BoundingBox
  }
};
