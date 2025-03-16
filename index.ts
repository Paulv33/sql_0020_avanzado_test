import { Database } from "bun:sqlite";
const db = new Database("./Northwind_small.sqlite");

/**
 * Cuenta el total de clientes en la tabla Customer.
 * Se espera que retorne 91.
 */
export function contarClientes(): number {
  const QUERY = "select count(*) as contador from customer";
  const result = db.query(QUERY).all();
  return result[0].contador;
}

/**
 * Cuenta el total de productos en la tabla Product.
 * En la base de datos Northwind_small.sqlite se espera que existan 77 productos.
 */
export function contarProductos(): number {
  const QUERY = "select count(*) as contador from product";
  const result = db.query(QUERY).all();
  return result[0].contador;
}

/**
 * Cuenta cuántos clientes tienen como país 'USA'.
 * Se espera que el resultado sea 13.
 */
export function selectWhere(): number {
  const QUERY = "select count(*) as contador from customer where country = 'USA'";
  const result = db.query(QUERY).all();
  return result[0].contador;
}
