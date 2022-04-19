import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  operacion!: string;
  resultado!: number;
  valor1!: number;
  valor2!: number;

  constructor() {
   }

  ngOnInit(): void {
  }

  calcular(){
    if(this.operacion === "sumar"){
      this.resultado = this.valor1 + this.valor2;
    }else if(this.operacion === "restar"){
      this.resultado = this.valor1 - this.valor2;
    }else if(this.operacion === "multiplicar"){
      this.resultado = this.valor1 * this.valor2;
    }else if(this.operacion === "dividir"){
      if(this.valor2 == 0){
        alert("División entre cero");
        return false;
      }
      this.resultado = this.valor1 / this.valor2;
    }else{
      this.resultado = 0;
    }

    return false;
  }
}
