import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SUMA', () => {
    component.operacion = "sumar";
    component.valor1 = -2;
    component.valor2 = 2;
    expect(component.calcular()).toBe(0);

    component.valor1 = -2;
    component.valor2 = -2;
    expect(component.calcular()).toBe(-4);

    component.valor1 = 2;
    component.valor2 = 2;
    expect(component.calcular()).toBe(4);
  });

  it('RESTA', () => {
    component.operacion = "restar";
    component.valor1 = 4;
    component.valor2 = 2;
    expect(component.calcular()).toBe(2);

    component.valor1 = -2;
    component.valor2 = -2;
    expect(component.calcular()).toBe(0);

    component.valor1 = -5;
    component.valor2 = 3;
    expect(component.calcular()).toBe(-8);
  });

  it('Multiplicar', () => {
    component.operacion = "multiplicar";
    component.valor1 = 4;
    component.valor2 = 2;
    expect(component.calcular()).toBe(8);

    component.valor1 = -4;
    component.valor2 = 2;
    expect(component.calcular()).toBe(-8);

    component.valor1 = -4;
    component.valor2 = -2;
    expect(component.calcular()).toBe(8);
  });

  it('Dividir',() => {
    component.operacion = "dividir";
    component.valor1 = 16;
    component.valor2 = 4;
    expect(component.calcular()).toBe(4);

    component.valor1 = -16;
    component.valor2 = 4;
    expect(component.calcular()).toBe(-4);

    component.valor1 = 16;
    component.valor2 = -4;
    component.calcular();
    expect(component.calcular()).toBe(-4);

    component.valor1 = -16;
    component.valor2 = -4;
    expect(component.calcular()).toBe(4);

    component.valor1 = -16;
    component.valor2 = 0;
    expect(function() { component.calcular()}).toThrow(new Error("División entre cero"));
  });

  it('Tres decimales',() => {
    component.valor1 = 0.11111111111111111111111111111111;
    component.valor2 = 2;
    component.operacion = "sumar";
    expect(component.calcular()).toBe(2.111);

    component.valor1 = 8.2;
    component.valor2 = 2;
    component.operacion = "dividir";
    expect(component.calcular()).toBe(4.1);

    component.valor1 = -3.232;
    component.valor2 = 4.2;
    component.operacion = "multiplicar";
    expect(component.calcular()).toBe(-13.574);
  });

  it('Inputs', () => {
    component.valor1 = 32;
    component.valor2 = 32;
    component.operacion = "asfsafasdf";
    expect(function() { component.calcular()}).toThrow(new Error("Operación no válida"));
  });
});
