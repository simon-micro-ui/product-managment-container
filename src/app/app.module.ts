import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductViewModule } from 'mf-pv/app/app.module';
import { ProductCartModule } from 'mf-pc/app/app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ProductViewModule,ProductCartModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}