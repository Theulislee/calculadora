import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';     //import component name reduction / components-index.ts

// creation of a calculator module / criação de modulo calculadora

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
