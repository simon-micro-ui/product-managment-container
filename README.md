# Revised

Add the following to package.json

    "@webcomponents/custom-elements": "^1.1.1",
    "@webcomponents/webcomponentsjs": "^2.0.0",

Add the following to angular.js.  During the build, this will bundle the included javascript files in a scripts.js file within the dist folder.

        "build": {
            ....
            ....
            "scripts": [
              "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
              ....
              ....

Then, add the scripts.js file to ./src/index.html, i.e. 

	<body>
	   <script type="text/javascript" src="scripts.js"></script>
	   <app-root></app-root>
	</body>

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
