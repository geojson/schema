import Point from './Point.js';
import LineString from './LineString.js';
import Polygon from './Polygon.js';
import MultiPoint from './MultiPoint.js';
import MultiLineString from './MultiLineString.js';
import MultiPolygon from './MultiPolygon.js';
import GeometryCollection from './GeometryCollection.js';
import Feature from './Feature.js';
import FeatureCollection from './FeatureCollection.js';

export default {
  title: 'GeoJSON',
  oneOf: [
    Point,
    LineString,
    Polygon,
    MultiPoint,
    MultiLineString,
    MultiPolygon,
    GeometryCollection,
    Feature,
    FeatureCollection
  ]
};
