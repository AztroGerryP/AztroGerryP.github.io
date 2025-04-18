"use strict";

// creando una funcion para que se cierre el menu
// al dar click
function ocultarBarra() {
  var navBarDes = document.querySelector('.nav-menu');
  navBarDes.style.display = 'none';
}
function activarBarra() {
  var navBarAct = document.querySelector('.nav-menu');
  navBarAct.style.display = 'block';
}