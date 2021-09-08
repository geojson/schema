# GeoJSON Schema

This repository provides tools for building [JSON Schema](http://json-schema.org/) docs for [GeoJSON](http://geojson.org/).  A schema is generated for each of the GeoJSON object types, and each individual doc is complete (without `$ref`s to other documents).  So applications can consume just what they need and avoid extra fetching.

See JSON Schema docs for the GeoJSON types below:
 * [`FeatureCollection`](http://geojson.org/schema/FeatureCollection.json)
 * [`Feature`](http://geojson.org/schema/Feature.json)
 * [`Geometry`](http://geojson.org/schema/Geometry.json)
 * [`GeometryCollection`](http://geojson.org/schema/GeometryCollection.json)
 * [`MultiPolygon`](http://geojson.org/schema/MultiPolygon.json)
 * [`MultiLineString`](http://geojson.org/schema/MultiLineString.json)
 * [`MultiPoint`](http://geojson.org/schema/MultiPoint.json)
 * [`Polygon`](http://geojson.org/schema/Polygon.json)
 * [`LineString`](http://geojson.org/schema/LineString.json)
 * [`Point`](http://geojson.org/schema/Point.json)

The overall GeoJSON schema can be found at
 * [`GeoJSON`](http://geojson.org/schema/GeoJSON.json)

## Limitations

The schema can not be used to validate that linear rings are closed or that they follow the right-hand rule.  These two elements of the [GeoJSON specification](https://datatracker.ietf.org/doc/html/rfc7946) cannot be represented in JSON Schema.  To enforce these two elements of linear ring validation, parsers must implement their own logic on top of JSON Schema validation.

# Development

Install dependencies:

    npm install

To build the schema docs:

    make

The output will be in the `build` directory.

A CI job builds commits pushed to `main`.  After a successful build, artifacts are pushed to the `gh-pages` branch and will be accessible at geojson.org/schema/<name>.json (e.g. http://geojson.org/schema/Point.json).

[![Build Status](https://github.com/geojson/schema/workflows/Deploy/badge.svg)](https://github.com/geojson/schema/actions?workflow=Deploy)
