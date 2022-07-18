//importaciones
import { productosBD } from "../controllers/ControladorDatos";

import { pintarProductos } from "./controladorllenado";

let buscador = document.getElementById("busqueda");
buscador.addEventListener("keypress", function (evento) {
  console.log(evento.target.value);
});
