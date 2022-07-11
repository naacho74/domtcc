//importaciones
import{
productosBD
} from"../helpers/database.js";

console.log(productosBD)

let buscador=document.getElementById('busqueda')
buscador.addEventListener('keypress',function(evento){
    console.log(evento.target.value)
})
