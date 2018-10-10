const PointCoordinates = require('./PointCoordinates');

module.exports = {
  type: 'array',
  minItems: 4,
  items: PointCoordinates
};
