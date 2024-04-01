import { opcionesAdmin, logueado, no_logueado } from './adicionales/navbar.js'

const mostrar = () => {
    const dataMovie = JSON.parse(localStorage.getItem('dataMovie'));

    //---------------TITLE-----------------
    document.title = dataMovie.nombre + " - JStremMovies";

    // --------------------Fondo Banner------------------
    document.getElementById('banner').style.background = `linear-gradient(rgba(2, 2, 20, 0), rgb(0, 0, 0, 1)),
        url(${dataMovie.img_banner})`;
    document.getElementById('banner').style.backgroundSize = `cover`;
    document.getElementById('banner').style.backgroundPosition = `center center`;

    //obtengo el id del div donde contretra al fondo. con "style" accedo a los estilos 


    // ------------descripcion --------------

    const descripcion = document.getElementById('descripcion');

    const parrafo = document.createElement('p');
    parrafo.classList.add('descripcion', 'mt-4');
    const contDescripcion = `${dataMovie.descripcion}`
    parrafo.innerHTML = contDescripcion;
    descripcion.append(parrafo)

    // -------------Logo-------------
    const logo = document.getElementById('logo');

    const img = document.createElement('img');
    img.setAttribute('src', `${dataMovie.img_logo}`);
    img.setAttribute('alt', `logo_pelicula_${dataMovie.nombre}`);
    logo.append(img);

    // -------------- Trailer Pelicula----------------

    const trailer = document.getElementById('trailer');

    const iframe = document.createElement('iframe'); //creeo los elemento iframe
    iframe.classList.add('rounded-1');
    iframe.setAttribute('src', `${dataMovie.url_trailer}`);
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', true);

    trailer.append(iframe)
}

const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { logueado: false };

if (usuarioActivo.logueado) {
    logueado();
    if (usuarioActivo.administrador) {
        opcionesAdmin();
    }
    mostrar();
} else {
    no_logueado();
}