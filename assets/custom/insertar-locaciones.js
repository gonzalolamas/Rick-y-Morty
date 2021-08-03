let btnLocaciones = document.getElementById('btn-locaciones');
btnLocaciones.addEventListener("click", mostrarLocaciones, true);

function mostrarLocaciones() {
    getLocaciones("https://rickandmortyapi.com/api/location", locaciones)
  }

/* Episodios -----------------------*/

function getLocaciones(url, callback) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function locaciones(xhhtpClienttt) {
  let locaciones = JSON.parse(xhhtpClienttt.responseText).results;
  let location = document.querySelector("#lista-locaciones");
  location.innerHTML = "";
  for (locacion of locaciones) {
    agregarLocacionAlDom(locacion);
  }
}

function agregarLocacionAlDom(locacion) {
  // declaro lo que me quiero traer de las apis 
  let tipo = `El tipo de mundo es: ${locacion.type}`;
  let nombre = `El nombre de la locacion es: ${locacion.name}`;
  let espacio = `La dimension es: ${locacion.dimension}`;
  // empiezo a crear los elementos y le doy clases, y inserto su contenido 
  let ul = document.createElement('ul');  //creo elemento 
  ul.classList.add("list-group", "text-center", "mt-5", "mb-5"); 
  
  let tipoDeLugar = document.createElement('li');
  tipoDeLugar.classList.add("list-group-item");
  tipoDeLugar.innerText = tipo;
  
  let nombreDelLugar = document.createElement('li');
  nombreDelLugar.classList.add("list-group-item");
  nombreDelLugar.innerText = nombre;

  let dimensionEspacio = document.createElement('li');
  dimensionEspacio.classList.add("list-group-item");
  dimensionEspacio.innerText = espacio;

  
  // Appendear 

  ul.appendChild(tipoDeLugar);
  ul.appendChild(nombreDelLugar);
  ul.appendChild(dimensionEspacio);

  // busco el elemento html donde insertar mi lista

  let lista = document.getElementById('lista-locaciones');
  //le agrego el ul adentro
  lista.appendChild(ul);
} 