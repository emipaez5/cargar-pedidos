const libro = document.getElementById("libro")
const autor = document.getElementById("autor")
const direccion= document.getElementById("direccion")
const boton= document.getElementById("boton")
const refrescar= document.getElementById("refrescar")
const confirmaciones= document.getElementById("confirmaciones")

const detalleLibro = document.getElementById("nombre_libro_recuadro")
const detalleAutor = document.getElementById("nombre_autor_recuadro")
const detalleDireccion = document.getElementById("nombre_direccion_recuadro")
const formulario= document.getElementById("formulario")
const titulo= document.getElementById("titulo")
const parrafo= document.getElementById("parrafo")

const lista= document.getElementById("ul")
const li1= document.getElementById("li1")

boton.addEventListener("click" , function(e){
  e.preventDefault();
  let pedidos = new Pedido(libro.value, autor.value, direccion.value)
  // pedidos.cargarItems()
  // li1.innerHTML = libro.value
  // li2.innerHTML = autor.value
  // li3.innerHTML = direccion.value
  // detalleAutor.innerHTML = autor.value
  // detalleDireccion.innerHTML = direccion.value
  confirmaciones.style.display = " block"
  formulario.style.display = " none"
  titulo.innerHTML = "Revisa tu pedido"
  parrafo.style.display = " none"
  boton.style.display = "none"
  refrescar.style.display = "none"
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