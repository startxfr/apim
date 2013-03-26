#!/bin/bash
cd /secure/github/sxapi-m/extjs-dev
sencha app build
cp -R assets build/SxapiManager/production/
