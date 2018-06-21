import { Injectable } from "@angular/core";
import { ScriptStore } from "./script.store";

declare var document: any;

@Injectable()
export class ScriptService {

    private scripts: any = {};

    constructor() {
        ScriptStore.forEach((script: any) => {
            console.log('ScriptService.constructor() : Adding : ' + script.name);
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }

    load(...scripts: string[]) {
        var promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    
    loadSingle(scriptName: string) {
        console.log('loadSingle : script=' + scriptName);
        var promise = this.loadScript(scriptName);
        return promise;
    }
    
    loadSingleByUri(uri: string) {
        console.log('loadSingle : uri=' + uri);
        var promise = this.loadScriptByUri(uri);
        return promise;
    }

    loadScript(name: string) {
        console.log('ScriptService.loadScript() : name=' + name);
        return new Promise((resolve, reject) => {
            //resolve if already loaded
            if (this.scripts[name].loaded) {
                console.log('Script already loaded...');
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                console.log('Loading script...');
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                console.log('name=' + name + ', src=' + this.scripts[name].src);
                if (script.readyState) {  //IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                } else {  //Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
                console.log('About to append script : ' + name);
                document.getElementsByTagName('head')[0].appendChild(script);
                console.log('Script appended ok : name=' + name);
            }
        });
    }
    
    loadScriptByUri(uri: string) {
        console.log('ScriptService.loadScriptByUri() : uri=' + uri);
        return new Promise((resolve, reject) => {

	        console.log('Loading script...');
	        let script = document.createElement('script');
	        script.type = 'text/javascript';
	        script.src = uri;
	        console.log('name=' + name + ', uri=' + script.src);
	        if (script.readyState) {  //IE
	            script.onreadystatechange = () => {
	                if (script.readyState === "loaded" || script.readyState === "complete") {
	                    script.onreadystatechange = null;
	                    resolve({ script: name, loaded: true, status: 'Loaded' });
	                }
	            };
	        } else {  //Others
	            script.onload = () => {
	                resolve({ script: name, loaded: true, status: 'Loaded' });
	            };
	        }
	        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
	        console.log('About to append script : ' + uri);
	        document.getElementsByTagName('head')[0].appendChild(script);
	        console.log('Script appended ok : name=' + uri);
	    });
    }
}