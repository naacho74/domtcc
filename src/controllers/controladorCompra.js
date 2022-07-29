console.log('holaa')
//console.log(JSON.parse(localStorage.getItem('infoProducto')))
let producto=JSON.parse(localStorage.getItem('infoProducto'))

let carrito
//REVISAR VERIFICAR SI HAY PRODUCTOS EN EL CARRITo
if(JSON.parse(localStorage.getItem('carrito'))==null){
// agregamos el carrito de compras
carrito=[]
}
else{ 
   carrito=JSON.parse(localStorage.getItem('carrito')) 
}
console.log(JSON.parse(localStorage.getItem('carrito')))

//pintamos la foto desde el localstorage
let foto=document.getElementById('foto')
let nombre=document.getElementById('nombre')
let precio=document.getElementById('precio')
let descripcion=document.getElementById('descripcion')
foto.src=producto.foto
nombre.textContent=producto.nombre
precio.textContent=producto.precio
descripcion.textContent=producto.descripcion
// capturar la cantidad del producto seleccionado
// capturamos el value

// agrego un nuevo atributo(cantidad) al objeto atributo
let botonAgregar=document.getElementById('agregar')
//se agrega producto al carrito
botonAgregar.addEventListener('click',function(evento){
   let alerta=document.getElementById('alerta')
   
   setTimeout(function(){
   alerta.classList.remove('invisible')
   
   },3000)
   let cantidad=document.getElementById('cantidad').value
   
producto.cantidad=cantidad

//let contadorProducto= 0
//contadorProducto= producto.cantidad+contadorProducto
//agregando un producto al carrito de compras
carrito.push(producto)

// almaceno el carrito e el localstorage
localStorage.setItem('carrito',JSON.stringify(carrito))
//localStorage.setItem('contadorCarrito',JSON.stringify(contadorCarrito))
//document.getElementById('sumaProductos').innerHTML = contadorProducto



})

