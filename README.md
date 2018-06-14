# Revised

Add the following to package.json

    "@webcomponents/custom-elements": "^1.1.1",
    "@webcomponents/webcomponentsjs": "^2.0.0",

Add the following to angular.js

        "build": {
            ....
            ....
            "scripts": [
              "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
              ....
              ....

Install the angular cli:
              
	yarn global add @angular/cli


Build the project:

	ng build

Run it:

	ng serve

# Original 

## Angular 6 Elements To Create MicroFront End Application

Default Angular CLI build

* `npm run build` build the header component
* `node server` to run a standalone header application

Build and publish reusable module like any other Angular module

* `./build.sh` to create reusable package
* `npm publish` publish the package to npm

Building MicroFront End Application using Angular Elements/Web Components
Read the complete walkthrough in the article: 
