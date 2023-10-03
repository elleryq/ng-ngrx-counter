### STAGE 1: Build ###
FROM node:14.20-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
RUN ls -l /usr/src/app/dist/ng-ngrx-counter

### STAGE 2: Run ###
FROM nginx:1.25.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ng-ngrx-counter/* /usr/share/nginx/html
