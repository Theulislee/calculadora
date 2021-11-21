import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; //import component name reduction / components-index.ts
import { CalculadoraService } from './services'; //import calculadora.service.ts

// creation of a calculator module / criação de modulo calculadora

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ], //add export calculadora.component.ts and calculadora.module.ts: 3

    providers: [
    CalculadoraService
    ], // add import Calculadora.service.ts

  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
