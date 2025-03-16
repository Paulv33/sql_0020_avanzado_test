import { expect, test } from "bun:test";
import { contarClientes, contarProductos, selectWhere } from "./index";

test("contar los clientes", () => {
  // Act: ejecuta la función que cuenta clientes
  const numeroClientes = contarClientes();
  // Assert: se espera que el número sea 91
  expect(numeroClientes).toBe(91);
});

test("contar los productos", () => {
  // Act: ejecuta la función que cuenta productos
  const numeroProductos = contarProductos();
  // Assert: se espera que el número sea 77
  expect(numeroProductos).toBe(77);
});

test("contar clientes de USA", () => {
  // Act: ejecuta la función que cuenta los clientes de USA
  const clientesUSA = selectWhere();
  // Assert: se espera que el resultado sea 13
  expect(clientesUSA).toBe(13);
});
