let btnPersonajes = document.getElementById('btn-personajes');
btnPersonajes.addEventListener("click", mostrarPersonajes, false)
/* let btnEpisodios = document.getElementById('btn-episodios');
btnEpisodios.addEventListener("click", mostrarEpisodios, false) */
/* let btnLocaciones = document.getElementById('btn-locaciones'); */

function mostrarPersonajes() {
  getPersonajes("https://rickandmortyapi.com/api/character/", personajes)
}
/* function mostrarEpisodios() {
  getEpisodios("https://rickandmortyapi.com/api/episode", episodios)
} */
/* 
function mostrarLocaciones() {
  getPersonajes("https://rickandmortyapi.com/api/character/", personajes)
}
 */

/* 
var character;
 */
function getPersonajes(url, callback) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
      /* character = this;
      let personajes = JSON.parse(character.responseText).results;
      console.log(personajes);
      for( personaje of personajes) {
        agregarAlHtml(personaje);
      } */
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
/* 
function agregarAlHtml(personaje) {
  let nombre = personaje.name;  //traje datos
  let imagen = personaje.image;     //traje imagen
  let li = document.createElement('li');    //cree li vacia
  li.innerText = nombre;  //agregue texto de la variable nombre
  let ul = document.getElementById('lista');   //elemento padre de li
  
   Apendiando
  ul.appendChild(li);

  let etiquetaImg = document.createElement('img');
  etiquetaImg.src = imagen;
  li.appendChild(etiquetaImg)
} */

function personajes(xhhtpClient) {
  let caracteres = JSON.parse(xhhtpClient.responseText).results;
  console.log(caracteres);
  let personajitos = document.querySelector("#contenedor-personajes");
  personajitos.innerHTML = "";
  for (caracter of caracteres) {
    agregarPersonajeAlDom(caracter);
  }
}

function agregarPersonajeAlDom(caracter) {
  let imagen = caracter.image;
  let nombre = caracter.name;
  let descripcion = `El personaje es de origen: ${caracter.origin.name}, su genero es: ${caracter.gender} y su estado es: ${caracter.status}`
  let card = document.createElement('div');  //creo elemento

  card.classList.add("card", "col-lg-3"); 
  let etiquetaImagen = document.createElement('img');
  etiquetaImagen.src = imagen;
  etiquetaImagen.classList.add('card-img-top');
  let body = document.createElement('div');
  body.classList.add('card-body');
  let h5 = document.createElement('h5');
  h5.classList.add('card-title');
  h5.innerHTML = nombre;
  let parrafo = document.createElement('p'); 
  parrafo.classList.add("card-text");
  parrafo.innerHTML = descripcion;  
 
  // Appendear

  body.appendChild(h5);
  body.appendChild(parrafo)
  card.appendChild(etiquetaImagen);
  card.appendChild(body);

  // busco el elemento html donde insertar mi card

  let contenedor = document.getElementById('contenedor-personajes');
  //le agrego la card adentro
  contenedor.appendChild(card);
}

/* Episodios -----------------------*/

/* function getEpisodios(url, callback) {
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

function episodios(xhhtpClientt) {
  let capitulos = JSON.parse(xhhtpClientt.responseText).results;
  console.log(capitulos);
  for (capitulo of capitulos) {
    agregarEpisodioAlDom(capitulo);
  }
}

function agregarEpisodioAlDom(capitulo) {
  // declaro lo que me quiero traer de las apis 
  let creacion = capitulo.air_date;
  let nombre = capitulo.name;
 // let numeroCap = `El numero de episodio es: ${capitulo.episode}`;
  // empiezo a crear los elementos y le doy clases, y inserto su contenido 
  let ul = document.createElement('ul');  //creo elemento 
  ul.classList.add("list-groud", "text-center"); 
  
  let nombresCapitulos = document.createElement('li');
  nombresCapitulos.classList.add("list-group-item");
  nombresCapitulos.innerText = nombre;
  
  let fechaCreacion = document.createElement('li');
  fechaCreacion.classList.add("list-group-item");
  fechaCreacion.innerText = creacion;

  //let numeroEpisodio = document.createElement('li');
  //numeroEpisodio = numeroCap;


  // Appendear 

  ul.appendChild(nombresCapitulos);
  ul.appendChild(fechaCreacion);
  ul.appendChild(numeroEpisodio);

  // busco el elemento html donde insertar mi lista

  let lista = document.getElementById('lista-episodios');
  //le agrego el ul adentro
  lista.appendChild(ul);
} */