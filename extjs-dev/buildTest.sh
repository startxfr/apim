#!/bin/bash
cd /secure/github/sxapi-m/extjs-dev
sencha app build testing
cp -R assets build/SxapiManager/testing/
