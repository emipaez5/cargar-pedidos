const libro = document.getElementById("libro")
const autor = document.getElementById("autor")
const direccion= document.getElementById("direccion")
const boton= document.getElementById("boton")
const boton1= document.getElementById("boton1")
const refrescar= document.getElementById("refrescar")
const confirmaciones= document.getElementById("confirmaciones")

const detalleLibro = document.getElementById("nombre_libro_recuadro")
const detalleAutor = document.getElementById("nombre_autor_recuadro")
const detalleDireccion = document.getElementById("nombre_direccion_recuadro")
const formulario= document.getElementById("formulario")
const titulo= document.getElementById("titulo")
const parrafo= document.getElementById("parrafo")

const lista= document.getElementById("ul")

const li = document.querySelectorAll("li")

const numeroDeGestion = document.getElementById("numerodegestion")
const gestion = document.getElementById("gestion")


numeroDeGestion.style.display= "none"
confirmaciones.style.display= "none"
refrescar.addEventListener("click", function(){
  location.reload()
})


let contador = 0; 
let limite = 5;
boton.addEventListener("click" , function(e){
if(libro.value != "" && autor.value != "" && direccion.value != ""){
   if(contador < limite){
    let pedidos = new Pedido(libro.value, autor.value, direccion.value)
   confirmaciones.style.display = "block"
    formulario.reset()
    e.preventDefault()
    confirmaciones.style.display= "block"
    contador++
  } else {
    alert("Has superado la capacidad máxima del sistema. Por favor, haz click en el botón REFRESCAR para borrar todos los ítems.")
  }
  }else {
    alert("completa todos los campos")
  }
 
  // pedidos.cargarItems()
  // li1.innerHTML = libro.value
  // li2.innerHTML = autor.value
  // li3.innerHTML = direccion.value
  // detalleAutor.innerHTML = autor.value
  // detalleDireccion.innerHTML = direccion.value
  //libro.value = "none"
 // formulario.style.display = " none"
  //titulo.innerHTML = "Revisa tu pedido"
  //parrafo.style.display = " none"
  //boton.style.display = "none"
 // refrescar.style.display = "none"
})


class Pedido {
  constructor(libro,autor,direccion){
    this.cargarItems(libro , autor , direccion)
  }
    cargarItems(libro, autor, direccion) {
      const li = document.createElement("li");
      li.textContent = `✓ El libro titulado ${libro}, del autor ${autor} será llevado a la dirección ${direccion}`;
      // this.items.push(li);
      // const ul = document.querySelector("ul");
      lista.appendChild(li);
    }
  }
  

  function codigo(){
    var d = new Date().getTime();
    return d
}
boton1.addEventListener("click" , function(){
  numeroDeGestion.style.display= "block"

    gestion.innerHTML = codigo()
    boton.style.display = "none"
    boton1.style.display = "none"
    refrescar.style.display = "none"
})

/*


VAMOS POR EL BOTON CARGAR


  // Crear una cadena de texto con los detalles de la compra
  var texto = "Has comprado el libro " + libro + " de " + autor + ".<br>";
  texto += "Tu dirección es " + direccion + ".<br>";
  texto += "El servicio de delivery te entregará el libro en breve.";

  // Llamar a la función que notifica al servicio de delivery
  notificarDelivery(libro, autor, direccion);
});

// Definir la función que notifica al servicio de delivery
function notificarDelivery(libro, autor, direccion) {
  // Aquí puedes escribir el código que se comunica con el servicio de delivery
  // y le envía los datos de la compra
  // Por ejemplo, podrías usar una petición AJAX o una API
  // Para simplificar, solo mostraré un mensaje en la consola
  console.log("Se ha notificado al servicio de delivery la compra del libro " + libro + " de " + autor + " para la dirección " + direccion + ".");
}
*/

/*
let contador = 0; // Variable que cuenta los ítems
let limite = 5; // Límite de ítems por pedido
botonCargar.addEventListener ("click", function () {
  if (contador < limite) { // Si hay espacio en la lista
    let nuevoItem = new Pedido (...); // Instanciar el nuevo ítem
    // Agregar el ítem a la lista (aquí va tu código)
    contador++; // Aumentar el contador en uno
  } else { // Si se alcanzó el límite
    alert ("Has superado la capacidad máxima del sistema. Por favor, haz click en el botón REFRESCAR para borrar todos los ítems."); // Mostrar el alerta
  }
});

*/

/*
botonRefrescar.addEventListener ("click", function () {
  let items = document.querySelectorAll ("li"); // Seleccionar todos los elementos li
  for (let i = 0; i < items.length; i++) { // Recorrer los elementos
    items[i].remove (); // Eliminar el elemento
  }
  contador = 0; // Reiniciar el contador
});

*/