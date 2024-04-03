import { CatalogoDB } from "./clases/CatalogoDB.class.js";
import { opcionesAdmin, logueado, no_logueado } from './adicionales/navbar.js';
import cerrar_seccion from "./adicionales/cerrarSeccion.js";

const catalogoDB = new CatalogoDB();
const mostradorPeliculas = document.getElementById('mostradorPeliculas');

window.categoria = (categoria) => {
    localStorage.setItem('categoria', JSON.stringify(categoria))
    window.location.href = '/index-categoria.html';
}

window.addEventListener('load', e => {
    const obtenerCategoria = JSON.parse(localStorage.getItem('categoria'));
    const categoriaTitulo = document.getElementById('categoria');
    categoriaTitulo.append(obtenerCategoria.toUpperCase())
    let peliculas = catalogoDB.establecerConexion();
    mostradorPeliculas.innerHTML = '';
    peliculas.forEach((item) => {
        if (item.publicado === true && item.genero === obtenerCategoria) {
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
})

const formSearch = document.getElementById('formSearch');
const inputSearch = document.getElementById('filtrar_nombre_pelicula');

formSearch.addEventListener('submit', e => {
    e.preventDefault()
    localStorage.setItem('search', JSON.stringify(inputSearch.value));
    window.location.href = '/index-buscar.html'
})

cerrar_seccion();

const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { logueado: false };

if (usuarioActivo.logueado) {
    logueado();
    if (usuarioActivo.administrador) {
        opcionesAdmin();
    }
} else {
    no_logueado();

}
