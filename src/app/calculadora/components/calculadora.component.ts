import { CalculadoraService } from './../services/calculadora.service';
import { Component, OnInit } from '@angular/core';

// from:'./../services  - add dependency injection calculadora.component

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // add atributos privado, que só pode ser acessado nessa classe
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  // add attribute for the calculadoraService class
  constructor( private CalculadoraService: CalculadoraService ) { }

  ngOnInit(): void {
  }

  /**
   * Inicializa todos os operadores para os valores padrão.
   *
   * @return void
   */
  // esse método ele é chamado na aplicação para limpar tela ao clicar no botão c, ele imprimir '0'
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

   /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   *
   * @param string numero
   * @return void
   */
  //Metodo add numero, sempre que clicar no numero da minha calculadora preciso associar a 1 ou 2
  //Se a operacao for null, estou digitando numero 1, caso o contrario se possuo uma operacao estou entrando numero 2
  //para add o numero 1 e 2 (por ser string) tenho que fazer concatenação de numeros e utiliza o metodo auxiliar que criou concatenar...
  //passando o numero 1 e o numero que eu recebi
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }
  /**
   * Returna o valor concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  //metodo de add de concatenarNumero
  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    // primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

   /**
   * Executa lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, executa a
   * operação anterior, e define a nova operação.
   *
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string): void {
    // apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
       if (this.numero2 !== null) {
         this.resultado = this.CalculadoraService.calcular(
           parseFloat(this.numero1),
           parseFloat(this.numero2),
           this.operacao);
         this.operacao = operacao;
         this.numero1 = this.resultado.toString();
         this.numero2 = null;
         this.resultado = null;
       }
  }

  /**
   * Efetua o cálculo de uma operação.
   *
   * @return void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.CalculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
}

/**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }

}
