// Foi add pelo Orientador do curso que foi add código de implementação que seriam o calculo das opreações aritméticas...
// ...para implementar na calculadora, porém com comentários.

/**
 *  "/**" exemplo de documentação especial
 *
 * Serviço responsável por executar as operações da
 * calculadora.
 *
 * @author Márcio C. de Souza<contato@kazale.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
 /* Define as constantes utilizadas
     para identificar as operações de cálculo
      "/*" exemplo de documentação de multiplas linhas
     */

     //A constant readonly não pode ser alterado, esse valor só pode ser lido
     //Irá permanecer assim por toda aplicação!
     static readonly SOMA: string = '+';
     static readonly SUBTRACAO: string = '-';
     static readonly DIVISAO: string = '/';
     static readonly MULTIPLICACAO: string = '*';

     constructor() { }

  /**
   *  "/**" documentação de métodos: ele explica o que esse método faz.
   *
   * Método que calcula uma operação matemática dado
   * dois números.
   * Suporta as operações soma, subtração, divisão,
   * e multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */

  // Esse método calcular recebe 3 parâmetros: num1 / num2 / operacao, que retorna um valor númerico
  // Essa operação deve ser uma das 4 operações definida no static readonly
  // O operadora switch é o principal que recebe a operação de calculo
  calcular(num1: number, num2: number, operacao: string): number {
  	let resultado: number; // armazena o resultado da operação "//" exemplo de documentação de uma linha

  	switch(operacao) {
  	  case CalculadoraService.SOMA:
  	    resultado = num1 + num2;
  		break;
  	  case CalculadoraService.SUBTRACAO:
  	    resultado = num1 - num2;
  		break;
  	  case CalculadoraService.DIVISAO:
  	    resultado = num1 / num2;
  		break;
  	  case CalculadoraService.MULTIPLICACAO:
  	    resultado = num1 * num2;
  		break;
  	  default: // utilizar default em caso de operação inválida
  	    resultado = 0;
  	}

  	return resultado;
  }

}


