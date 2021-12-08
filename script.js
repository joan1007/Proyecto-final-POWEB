var peliculas = localStorage.getItem("Peliculas") ? JSON.parse(localStorage.getItem("Peliculas")) : [];

boton = _dce('button');
boton.setAttribute('type', 'button');
boton.setAttribute('name', 'borrar');
boton.setAttribute('onclick', 'borrar()');
boton.setAttribute('class', 'btn btn-danger');
boton.innerHTML = '-';

function guardar() {
  datos = JSON.stringify(peliculas);
  localStorage.setItem('Peliculas', datos);
}


function limpiar() {
  campos = document.getElementsByTagName('input');
  for (i = 0; i < campos.length; i++) {
    campos[i].value = '';
  }
}

function _dce(obj) {
  return document.createElement(obj);
}
function add() {


  peliculas.push({
    fecha: document.getElementById('fecha').value,
    nombre: document.getElementById('nombre').value,
    comentario: document.getElementById('comentario').value,
    calificacion1: document.getElementById('ca1').value,
    calificacion2: document.getElementById('ca2').value,
    calificacion3: document.getElementById('ca3').value,
    calificacion4: document.getElementById('ca4').value,
    promedio: document.getElementById('promedio').value,
    eq: document.getElementById('eq').value,
  });
  guardar();
  limpiar();
  mostrar();

  done = true;

}

function btnx(){
  boton = _dce('button');
  boton.setAttribute('type', 'button');
  boton.setAttribute('name', 'borrar');
  boton.setAttribute('onclick', 'borrar(this)');
  boton.setAttribute('class', 'btn btn-danger');
  boton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  return boton;
}

function mostrar() {

  tabla = document.getElementById('tbPeliculas');
  tabla.innerHTML = "";

  for (e = 0; e < peliculas.length; e++) {

    tr = _dce('tr');
    tr.setAttribute('indice', e)
    pelicula = peliculas[e];

    for (let propiedad in pelicula) {

      td = _dce('td');
      td.innerHTML = pelicula[propiedad];
      tr.appendChild(td);
    }
    td = _dce('td');
    td.appendChild(btnx());
    tr.appendChild(td);
    tabla.appendChild(tr);
  }
}

datos = localStorage.getItem('Peliculas');
if (datos != null) {
  peliculas = JSON.parse(datos);
  mostrar();
}

function calcular() {
  try {
    var ca1 = parseFloat(document.getElementById("ca1").value) || 0,
      ca2 = parseFloat(document.getElementById("ca2").value) || 0,
      ca3 = parseFloat(document.getElementById("ca3").value) || 0,
      ca4 = parseFloat(document.getElementById("ca4").value) || 0;

    document.getElementById("promedio").value = (ca1 + ca2 + ca3 + ca4) / 4;
  } catch (e) {}

try {
  var prom = parseFloat(document.getElementById("promedio").value) || 0;

  if (prom <= 69) {
    document.getElementById("eq").value = "F";
  }
  else if (prom >= 70 && prom <= 79) {
    document.getElementById("eq").value = "C";
  }
  else if (prom >= 80 && prom <= 89) {
    document.getElementById("eq").value = "B";
  }
  else if (prom >= 90 && prom <= 100) {
    document.getElementById("eq").value = "A";
  }
  else if (prom > 100) {
    document.getElementById("eq").value = "Error";
  }
} catch (e) {}
}

function borrar(matricula) {
  let peliculas = JSON.parse(localStorage.getItem("Peliculas"));
  for (i = 0; i < peliculas.length; i++) {
    if (peliculas[i].fecha === fecha) {
      peliculas.splice[i,1];
    }
  }

  localStorage.setItem("Peliculas",JSON.stringify(peliculas));
  mostrar();
}

function borrar(boton) {
  tr = boton.parentNode.parentNode;
  indice = tr.getAttribute('indice');
  tarr = [];
  for (i = 0; i < peliculas.length; i++) {
    if (i!=indice) {
      tarr.push(peliculas[i]);
    }
  }
  peliculas = tarr;
  tr.parentNode.removeChild(tr);
  guardar();
  mostrar();
}
