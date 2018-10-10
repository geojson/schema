const PointCoordinates = require('./PointCoordinates');

module.exports = {
  type: 'array',
  minItems: 2,
  items: PointCoordinates
};
