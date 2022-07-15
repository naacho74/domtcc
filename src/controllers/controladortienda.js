import { productosBD } from "../helpers/basedatos.js";
console.log(productosBD)

import { pintarProductos } from "./pintarproductos.js";
pintarProductos(productosBD)

import {buscarProductos} from "./controlaorbuscar.js";
buscarProductos()
