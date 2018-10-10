const PointCoordinates = require('./ref/PointCoordinates');
const BoundingBox = require('./ref/BoundingBox');

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
