import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  operacion!: string;
  resultado!: number;
  valor1!: number;
  valor2!: number;

  constructor() {}

  ngOnInit(): void {}

  calcular() {
    if (this.operacion === '' || !this.operacion) {
      throw new Error('Operación no seleccionada');
    }
    if((!this.valor1 || !this.valor2) && (this.valor1 != 0 && this.valor2 != 0)){
      alert("Valores inválidos");
      throw new Error('Valores inválidos');
    }

    if (this.operacion === 'sumar') {
      this.resultado = this.suma(this.valor1, this.valor2);
    } else if (this.operacion === 'restar') {
      this.resultado = this.resta(this.valor1, this.valor2);
    } else if (this.operacion === 'multiplicar') {
      this.resultado = this.multiplicacion(this.valor1, this.valor2);
    } else if (this.operacion === 'dividir') {
      this.resultado = this.division(this.valor1, this.valor2);
    } else {
      throw new Error('Operación no válida');
    }

    this.resultado = this.redondear(this.resultado);
    return this.resultado;
  }

  suma(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }
  resta(valor1: number, valor2: number): number {
    return valor1 - valor2;
  }
  multiplicacion(valor1: number, valor2: number): number {
    return valor1 * valor2;
  }
  division(valor1: number, valor2: number): number {
    if (valor2 == 0) {
      alert("Error al realizar la división");
      throw new Error('División entre cero');
    }
    return valor1 / valor2;
  }
  redondear(resultado: number): number {
    return Math.round(resultado * 1000) / 1000;
  }
}
