let btnEpisodios = document.getElementById('btn-episodios');
btnEpisodios.addEventListener("click", mostrarEpisodios, false);

function mostrarEpisodios() {
    getEpisodios("https://rickandmortyapi.com/api/episode", episodios)
  }

/* Episodios -----------------------*/

function getEpisodios(url, callback) {
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
  let episodioss = document.querySelector("#lista-episodios");
  episodioss.innerHTML = "";
  for (capitulo of capitulos) {
    agregarEpisodioAlDom(capitulo);
  }
}

function agregarEpisodioAlDom(capitulo) {
  // declaro lo que me quiero traer de las apis 
  let creacion = `La fecha de creacion del mismo fue: ${capitulo.air_date}`;
  let nombre = `El nombre del capitulo es: ${capitulo.name}`;
  let numeroCap = `Se estreno en la fecha siguiente: ${capitulo.created}`
  // empiezo a crear los elementos y le doy clases, y inserto su contenido 
  let ul = document.createElement('ul');  //creo elemento 
  ul.classList.add("list-group", "text-center","mt-5", "mb-5"); 
  
  let nombresCapitulos = document.createElement('li');
  nombresCapitulos.classList.add("list-group-item");
  nombresCapitulos.innerText = nombre;
  
  let fechaCreacion = document.createElement('li');
  fechaCreacion.classList.add("list-group-item");
  fechaCreacion.innerText = creacion;

  let numeroEpisodio = document.createElement('li');
  numeroEpisodio.classList.add("list-group-item");
  numeroEpisodio.innerText = numeroCap;


  // Appendear 

  ul.appendChild(nombresCapitulos);
  ul.appendChild(fechaCreacion);
  ul.appendChild(numeroEpisodio);

  // busco el elemento html donde insertar mi lista

  let lista = document.getElementById('lista-episodios');
  //le agrego el ul adentro
  lista.appendChild(ul);
} 