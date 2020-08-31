//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){

//});

var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");
var formulario = document.getElementById("formulario");
var error = document.getElementById("error");
error.style.color = "blue";

document.addEventListener("submit", function (event) {
  //console.log("enviando formulario.....");
  event.preventDefault();

  if (usuario.value.length != 0 && contraseña.value.length != 0) {
    return (location.href = "index.html");
  } else var mensajeError = [];

  if (usuario.value === null || usuario.value === "") {
    mensajeError.push("Ingrese un usuario");
  }

  if (contraseña.value === null || contraseña.value === "") {
    mensajeError.push("Ingrese una Contraseña");
  }

  error.innerHTML = mensajeError.join(", ");
});