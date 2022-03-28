import calcularCadena from "./calculadoraCadenas.js";

describe("Calcular Cadenas", () => {
  it("deberia tomar en cuenta cadena vacia retornando 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
});
