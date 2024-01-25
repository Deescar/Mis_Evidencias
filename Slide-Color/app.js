// Obtener los elementos del DOM
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Inicializar variables con los valores actuales de los controles deslizantes
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar los textos iniciales con los valores iniciales
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

// Función para actualizar el color de fondo de la página
function actualizarColor(rojo, verde, azul) {
  // Crear una cadena RGB con los valores actuales
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

  // Aplicar el color de fondo a la página
  document.body.style.backgroundColor = colorRGB;
}

// Event listeners para los cambios en los controles deslizantes

// Para actualizar Red (Rojo).
inputRojo.addEventListener("change", (e) => {
  // Actualizar la variable rojo con el nuevo valor
  rojo = e.target.value;

  // Actualizar el texto que muestra el valor actual de Rojo
  textoRojo.textContent = rojo;

  // Llamar a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  // Actualizar la variable verde con el nuevo valor
  verde = e.target.value;

  // Actualizar el texto que muestra el valor actual de Verde
  textoVerde.textContent = verde;

  // Llamar a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  // Actualizar la variable azul con el nuevo valor
  azul = e.target.value;

  // Actualizar el texto que muestra el valor actual de Azul
  textoAzul.textContent = azul;

  // Llamar a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});
