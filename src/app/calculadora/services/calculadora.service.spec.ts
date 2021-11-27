import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //add teste de soma da calculadora
  it('deve garantir que 1 + 4 = 5',
  inject([CalculadoraService], (service: CalculadoraService) => {
     let soma = service.calcular(1, 4, CalculadoraService.SOMA);
     expect (soma).toEqual(5);
  }));

  //add teste de substracao da calculadora
  it('deve garantir que 1 - 4 = -3',
  inject([CalculadoraService], (service: CalculadoraService) => {
     let substracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
     expect (substracao).toEqual(-3);
  }));

  //add teste de divisao da calculadora
  it('deve garantir que 1 / 4 = 0.25',
  inject([CalculadoraService], (service: CalculadoraService) => {
     let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
     expect (divisao).toEqual(0.25);
  }));

   //add teste de multiplicacao da calculadora
   it('deve garantir que 1 * 4 = 4',
   inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect (multiplicacao).toEqual(4);
   }))
});
