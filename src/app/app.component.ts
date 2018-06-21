import { Component, TemplateRef, ViewChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { ScriptService } from './webcomponents/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScriptService]
})
export class AppComponent implements OnInit, AfterContentInit {

  constructor(private script: ScriptService) {
  }

  ngOnInit() {
    console.log('AppComponent.ngOnInit');
  }

  ngAfterContentInit() {
    console.log('AppComponent.ngAfterContentInit');
    
    //this.script.loadSingle('product-header').then(data => {  
    //this.script.loadScriptByUri('http://localhost:8081/product-header.js').then(data => {
    //   console.log('product-header Script Loaded: ', data);
    //}).catch(error => console.log(error));
    
    //this.script.loadSingle('product-view').then(data => {  
    //this.script.loadScriptByUri('http://localhost:8082/product-view.js').then(data => {
    //   console.log('product-view Script Loaded: ', data);
    //}).catch(error => console.log(error));
    
    //this.script.loadSingle('product-cart').then(data => {  
    this.script.loadScriptByUri('http://localhost:8083/product-cart.js').then(data => {
       console.log('product-cart Script Loaded: ', data);
    }).catch(error => console.log(error));    
  }
}