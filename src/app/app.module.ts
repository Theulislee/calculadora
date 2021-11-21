import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';  // add calculadora.module.ts here // to shorten the name of the calculator import module: index.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule  //add Calculadora.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
