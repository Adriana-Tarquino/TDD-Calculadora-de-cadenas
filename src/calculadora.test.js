import calcularCadena from "./calculadoraCadenas.js";

describe("Calcular Cadenas", () => {
  it("deberia tomar en cuenta cadena vacia retornando 0", () => {
    expect(calcularCadena(',',"")).toEqual(0);
  });
  it("Toma en cuenta cadena un solo número: Para una cadena “2”", () => {
    expect(calcularCadena(',',"2")).toEqual(2);
  });
  it("Toma en cuenta cadena con dos números: Para una cadena “1,2” -> 3", () => {
    expect(calcularCadena(',',"1,2")).toEqual(3);
  });
  it("Toma en cuenta cadena con varios números: Para una cadena “1,2,3” -> 6", () => {
    expect(calcularCadena(',',"1,2,3")).toEqual(6);
  });
  it("Toma en cuenta que tambien se puede usar el caracter guion(-) como separador: “1-2,3”  -> 6", () => {
    expect(calcularCadena(',',"1-2,3")).toEqual(6);
  });
  it("El usuario puede especificar el delimitador", () => {
    expect(calcularCadena(',',"1,2,3")).toEqual(6);
  });

});
