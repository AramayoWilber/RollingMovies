import cerrar_seccion from "./adicionales/cerrarSeccion.js";
import { CatalogoDB } from "./clases/CatalogoDB.class.js";
import { opcionesAdmin, logueado, no_logueado } from './adicionales/navbar.js'

window.categoria = (categoria) => {
    localStorage.setItem('categoria', JSON.stringify(categoria))
    window.location.href = '/index-categoria.html';
}

window.reproducir = (id) => {
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
}

const mostrar = () => {
    const catalogoDB = new CatalogoDB();
    const mostradorPeliculas = document.getElementById('mostradorPeliculas');
    const inputSearch = document.getElementById('filtrar_nombre_pelicula');
    const formSearch = document.getElementById('formSearch');

    // Obtiene los datos de las películas
    const mostrarPortadas = () => {
        let peliculas = catalogoDB.establecerConexion();
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

    const carrocel = document.getElementById('container-carrousel');
    const catalogo = new CatalogoDB().establecerConexion();
    catalogo.forEach(item => {
        if (item.destacada === true) {
            const contenido = `
                    <img src=${item.img_banner} class="imgbanner d-block w-100" alt="...">
                    <div class="carousel-caption">
                        <img src="./img/logo_sin_fondo.png" class="textbg mb-3 neon-border" style="width: 25%;" alt="">
                        <h2 class="textbg d-none d-sm-block">${item.nombre}</h2>
                        <h2 class="textbg h5 d-block d-sm-none">${item.nombre}</h2>
                        <div class="module line-clamp">
                            <p class="textbg textnone fs-4">${item.descripcion}</p>
                        </div>
                        <button onClick="reproducir(${item.codigo})" class="btn btn-primary imghov mt-2">Reproducir</button>
                    </div>`;
            const nuevoItem = document.createElement('div');
            nuevoItem.classList.add('carousel-item');
            nuevoItem.innerHTML = contenido;
            carrocel.append(nuevoItem);
        }
    });

    document.querySelector('#container-carrousel .carousel-item').classList.add('active')

    mostrarPortadas();

    window.addEventListener('storage', function (event) {
        // Verifica si el cambio fue en la clave 'peliculas'
        if (event.key === 'peliculas') {
            // Obtiene los nuevos datos de las películas
            const nuevasPeliculas = catalogoDB.establecerConexion();

            // Compara los nuevos datos con los antiguos
            if (JSON.stringify(nuevasPeliculas) != JSON.stringify(peliculas)) {
                // Si los datos han cambiado, actualiza las portadas y guarda los nuevos datos
                peliculas = nuevasPeliculas;
                mostrarPortadas();
            }
        }
    });

    formSearch.addEventListener('submit', e => {
        e.preventDefault()
        localStorage.setItem('search', JSON.stringify(inputSearch.value));
        window.location.href = '/index-buscar.html'
    })


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

