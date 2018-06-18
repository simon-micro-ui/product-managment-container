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
    //this.script.load('filepicker', 'rangeSlider').then(data => {
    this.script.load('product-header').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }
}