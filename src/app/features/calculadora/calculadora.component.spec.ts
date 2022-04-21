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

  it('Suma', () => {
    component.operacion = "sumar";
    component.valor1 = -2;
    component.valor2 = 2;
    expect(component.calcular()).toBe(0);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -2;
    component.valor2 = -2;
    expect(component.calcular()).toBe(-4);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = 2;
    component.valor2 = 2;
    expect(component.calcular()).toBe(4);
    expect(component.resultado).toBe(component.calcular());
  });

  it('Resta', () => {
    component.operacion = "restar";
    component.valor1 = 4;
    component.valor2 = 2;
    expect(component.calcular()).toBe(2);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -2;
    component.valor2 = -2;
    expect(component.calcular()).toBe(0);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -5;
    component.valor2 = 3;
    expect(component.calcular()).toBe(-8);
    expect(component.resultado).toBe(component.calcular());
  });

  it('Multiplicar', () => {
    component.operacion = "multiplicar";
    component.valor1 = 4;
    component.valor2 = 2;
    expect(component.calcular()).toBe(8);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -4;
    component.valor2 = 2;
    expect(component.calcular()).toBe(-8);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -4;
    component.valor2 = -2;
    expect(component.calcular()).toBe(8);
    expect(component.resultado).toBe(component.calcular());
  });

  it('Dividir',() => {
    component.operacion = "dividir";
    component.valor1 = 16;
    component.valor2 = 4;
    expect(component.calcular()).toBe(4);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -16;
    component.valor2 = 4;
    expect(component.calcular()).toBe(-4);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = 16;
    component.valor2 = -4;
    component.calcular();
    expect(component.calcular()).toBe(-4);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -16;
    component.valor2 = -4;
    expect(component.calcular()).toBe(4);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -16;
    component.valor2 = 0;
    expect(function() { component.calcular()}).toThrowError("División entre cero");
  });

  it('Tres decimales',() => {
    component.valor1 = 0.11111111111111111111111111111111;
    component.valor2 = 2;
    component.operacion = "sumar";
    expect(component.calcular()).toBe(2.111);
    expect(component.resultado).toBe(component.calcular());
    // Comprobar que el resultado se muestre en la pantalla

    component.valor1 = 8.2;
    component.valor2 = 2;
    component.operacion = "dividir";
    expect(component.calcular()).toBe(4.1);
    expect(component.resultado).toBe(component.calcular());

    component.valor1 = -3.232;
    component.valor2 = 4.2;
    component.operacion = "multiplicar";
    expect(component.calcular()).toBe(-13.574);
    expect(component.resultado).toBe(component.calcular());
  });

  it('Inputs', () => {
    fixture.detectChanges();
    component.operacion = "sumar";
    expect(function() { component.calcular()}).toThrowError("Valores inválidos");
    expect(component.resultado).toBeUndefined();

    component.valor1 = 32;
    component.valor2 = 32;
    component.operacion = "asfsafasdf";
    expect(function() { component.calcular()}).toThrowError("Operación no válida");
    expect(component.resultado).toBeUndefined();
  });

  it("Operaciones funciones", () => {
    expect(component.suma(2, 2)).toBe(4);
    expect(component.suma(2, -2)).toBe(0);
    expect(component.suma(-2, -2)).toBe(-4);

    expect(component.resta(-12, -2)).toBe(-10);
    expect(component.resta(120, 80)).toBe(40);
    expect(component.resta(20, -80)).toBe(100);

    expect(component.multiplicacion(2, -8)).toBe(-16);
    expect(component.multiplicacion(2, 2.5)).toBe(5);
    expect(component.multiplicacion(-3, -3)).toBe(9);

    expect(function() { component.division(3, 0) }).toThrowError("División entre cero");
    expect(component.division(12, 6)).toBe(2);
    expect(component.division(5, 2)).toBe(2.5);
    expect(component.division(30, -2)).toBe(-15);
    expect(component.division(-30, -2)).toBe(15);
  });
});
