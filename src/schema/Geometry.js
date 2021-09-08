import Point from './Point.js';
import LineString from './LineString.js';
import Polygon from './Polygon.js';
import MultiPoint from './MultiPoint.js';
import MultiLineString from './MultiLineString.js';
import MultiPolygon from './MultiPolygon.js';

export default {
  title: 'GeoJSON Geometry',
  oneOf: [Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon]
};
