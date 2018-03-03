# GeoJSON Schema

This repository provides tools for building JSONSchema docs for GeoJSON.  A schema is generated for each of the GeoJSON object types, and each individual doc is complete (without `$ref`s to other documents).  So applications can consume just what they need and avoid extra fetching.

To build the schema docs:

    make
