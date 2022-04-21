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

    if (this.operacion === 'sumar') {
      this.resultado = this.suma();
    } else if (this.operacion === 'restar') {
      this.resultado = this.resta();
    } else if (this.operacion === 'multiplicar') {
      this.resultado = this.multiplicacion();
    } else if (this.operacion === 'dividir') {
      try{
        this.resultado = this.division();
      }catch(e){
        alert("Error al realizar la división");
      }
    } else {
      throw new Error('Operación no válida');
    }

    this.resultado = this.redondear();
    return this.resultado;
  }

  private suma(): number {
    return this.valor1 + this.valor2;
  }
  private resta(): number {
    return this.valor1 - this.valor2;
  }
  private multiplicacion(): number {
    return this.valor1 * this.valor2;
  }
  private division(): number {
    if (this.valor2 == 0) {
      throw new Error('División entre cero');
    }
    return this.valor1 / this.valor2;
  }
  private redondear(): number {
    return Math.round(this.resultado * 1000) / 1000;
  }
}
