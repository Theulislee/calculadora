import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';

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
