# NgNgrxCounter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

執行 `ng build` 來編譯專案。

或是用容器形式來編譯

```
docker run --name build --rm -v $(pwd):/usr/src/app node:14.20-alpine /bin/sh -c "cd /usr/src/app && npm install && npm run build --prod"
```

編譯好的 artifacts 將會出現在 `dist/` 目錄。使用 `--prod` 來產出生產環境用的 artifact.

## 建置 war

```
./build-war.sh
```

## 測試 war 檔案

```
docker run -v $(pwd)/ng-ngrx-counter.war:/usr/local/tomcat/webapps/ROOT.war -p 8080:8080 -it --rm tomcat:9.0
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
