import { CatalogoDB } from "./clases/CatalogoDB.class.js";
import { opcionesAdmin, logueado, no_logueado } from './adicionales/navbar.js';
import cerrar_seccion from "./adicionales/cerrarSeccion.js";

const catalogoDB = new CatalogoDB();
const mostradorPeliculas = document.getElementById('mostradorPeliculas');
const inputSearch = document.getElementById('filtrar_nombre_pelicula');
const formSearch = document.getElementById('formSearch');

window.categoria = (categoria) => {
    localStorage.setItem('categoria', JSON.stringify(categoria))
    window.location.href = '/index-categoria.html';
}

function mostrar() {
    window.addEventListener('load', e => {
        inputSearch.value = JSON.parse(localStorage.getItem('search'));
        mostrarPortadas();
    })


    formSearch.addEventListener('submit', e => {
        e.preventDefault();
        localStorage.setItem('search', JSON.stringify(inputSearch.value));
        mostrarPortadas();
    })

    const mostrarPortadas = () => {
        let peliculas = catalogoDB.filtrarTitulo(JSON.parse(localStorage.getItem('search')));
        console.log(peliculas)
        mostradorPeliculas.innerHTML = '';
        peliculas.forEach((item) => {
            if (item.publicado === true) {
                const mostrarPortadaIndex = `
                <div>
                    <img src="${item.img_portada}" class="neon-border-2" width="100%" height="100%" alt="peli-sugerida">
                </div>`;
                const nuevoItem = document.createElement('div');
                nuevoItem.setAttribute('id', item.codigo)
                nuevoItem.classList.add('imghov', 'col-9', 'col-sm-5', 'col-md-5', 'col-lg-3', 'my-2');
                nuevoItem.innerHTML = mostrarPortadaIndex;
                mostradorPeliculas.append(nuevoItem);
            }
        });
    }

    mostradorPeliculas.addEventListener('click', e => {
        const id = parseInt(e.target.parentElement.parentElement.getAttribute('id'));
        const peliculas = new CatalogoDB().establecerConexion();
        let peliculafiltrada;
        peliculas.forEach((item) => {
            if (item.codigo === id) {
                console.log(item)
                peliculafiltrada = {
                    codigo: item.codigo,
                    nombre: item.nombre,
                    categoria: item.categoria,
                    genero: item.genero,
                    descripcion: item.descripcion,
                    publicado: item.publicado,
                    destacada: item.destacada,
                    img_logo: item.img_logo,
                    img_portada: item.img_portada,
                    img_banner: item.img_banner,
                    url_trailer: item.url_trailer
                };
            }
        })
        console.log(peliculafiltrada)
        localStorage.setItem('dataMovie', JSON.stringify(peliculafiltrada));
        window.location.href = "/verPelicula.html"
    });

    cerrar_seccion();
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
    mostrar();
}
