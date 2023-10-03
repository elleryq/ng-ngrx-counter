#!/bin/bash

[[ -d dist ]] && rm -rf dist

docker run --name build --rm -v $(pwd):/usr/src/app node:14.20-alpine /bin/sh -c "cd /usr/src/app && npm install && npm run build --prod"

mkdir war
cd war
mkdir -p WEB-INF/lib
cat <<END_OF_WEBXML >WEB-INF/web.xml
<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
"http://java.sun.com/dtd/web-app_2_3.dtd" >

 <web-app>
  <display-name>Archetype Created Web Application</display-name>
 </web-app>
END_OF_WEBXML
cp ../dist/ng-ngrx-counter/* .
jar -cvf ../ng-ngrx-counter.war *
cd ..
rm -rf war

