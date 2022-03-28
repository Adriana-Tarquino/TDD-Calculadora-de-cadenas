import calcularCadena from "./calculadoraCadenas.js";

describe("Calcular Cadenas", () => {
  it("deberia tomar en cuenta cadena vacia retornando 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Toma en cuenta cadena un solo número: Para una cadena “2”", () => {
    expect(calcularCadena("2")).toEqual(2);
  });
});
