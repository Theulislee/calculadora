import { CalculadoraService } from './../services/calculadora.service';
import { Component, OnInit } from '@angular/core';

// from:'./../services  - add dependency injection calculadora.component

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // add attribute for the calculadoraService class
  constructor( private CalculadoraService: CalculadoraService ) { }

  ngOnInit(): void {
  }

}
