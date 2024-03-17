# GeoJSON Schema

This repository provides tools for building [JSON Schema](https://json-schema.org/) docs for [GeoJSON](https://geojson.org/).  A schema is generated for each of the GeoJSON object types, and each individual doc is complete (without `$ref`s to other documents).  So applications can consume just what they need and avoid extra fetching.

See JSON Schema docs for the GeoJSON types below:
 * [`FeatureCollection`](https://geojson.org/schema/FeatureCollection.json)
 * [`Feature`](https://geojson.org/schema/Feature.json)
 * [`Geometry`](https://geojson.org/schema/Geometry.json)
 * [`GeometryCollection`](https://geojson.org/schema/GeometryCollection.json)
 * [`MultiPolygon`](https://geojson.org/schema/MultiPolygon.json)
 * [`MultiLineString`](https://geojson.org/schema/MultiLineString.json)
 * [`MultiPoint`](https://geojson.org/schema/MultiPoint.json)
 * [`Polygon`](https://geojson.org/schema/Polygon.json)
 * [`LineString`](https://geojson.org/schema/LineString.json)
 * [`Point`](https://geojson.org/schema/Point.json)

The overall GeoJSON schema can be found at
 * [`GeoJSON`](https://geojson.org/schema/GeoJSON.json)

## Limitations

The schema can not be used to validate that linear rings are closed or that they follow the right-hand rule.  These two elements of the [GeoJSON specification](https://datatracker.ietf.org/doc/html/rfc7946) cannot be represented in JSON Schema.  To enforce these two elements of linear ring validation, parsers must implement their own logic on top of JSON Schema validation.

# Development

Install dependencies:

    npm install

To build the schema docs:

    make

The output will be in the `build` directory.

A CI job builds commits pushed to `main`.  After a successful build, artifacts are pushed to the `gh-pages` branch and will be accessible at geojson.org/schema/<name>.json (e.g. https://geojson.org/schema/Point.json).

[![Build Status](https://github.com/geojson/schema/workflows/Deploy/badge.svg)](https://github.com/geojson/schema/actions?workflow=Deploy)

# Publishing

To publish the `geojson-schema` package, run the following:

    make build
    npm version minor # or major or patch
    git push --tags origin main
    pushd build && npm publish && popd
