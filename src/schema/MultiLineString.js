var LineStringCoordinates = require('./ref/LineStringCoordinates');
var BoundingBox = require('./ref/BoundingBox');

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
    },
    bbox: BoundingBox
  }
};
