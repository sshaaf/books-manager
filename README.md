# BooksManagerAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

The backend API app exists here: [Quarkus based Books API](https://github.com/sshaaf/books-manager-quarkus)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Deploying to openshift

Since this is just the frontend. we use httpd instead.  

Before getting into the build process you will also need to add the Books API URL into `environments/environment.ts`

```
ng build
oc new-build --name books-manager --binary --strategy source --image-stream httpd
oc start-build books-manager --from-dir dist/books-manager --follow
oc new-app --image-stream=books-manager:latest
oc expose service/books-manager
```
