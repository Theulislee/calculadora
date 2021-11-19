import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';     // add calculadora.module.ts here

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule            //add Calculadora.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
