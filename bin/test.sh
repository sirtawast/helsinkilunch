#!/bin/bash

set -e

echo "Waiting for express ..."

while ! nc -z localhost 3000; do   
  sleep 1
done

echo "Express is has started"

curl -If http://localhost:3000/