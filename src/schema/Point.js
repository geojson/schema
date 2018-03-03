var PointCoordinates = require('./ref/PointCoordinates');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON Point',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['Point']
    },
    coordinates: PointCoordinates,
    bbox: BoundingBox
  }
};
