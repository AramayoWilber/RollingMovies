import { CatalogoDB } from "./clases/CatalogoDB.class.js";

const mostrar = () => {
    const catalogoDB = new CatalogoDB();
    const mostradorPeliculas = document.getElementById('mostradorPeliculas')

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


    mostradorPeliculas.addEventListener('click', e => {
        const id = parseInt(e.target.parentElement.parentElement.getAttribute('id'))
        const peliculas = catalogoDB.establecerConexion()
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
    })
}

const opcionesAdmin = () => {
    const navbarList = document.getElementById('listaNavbar');
    const liUserAdmin = document.createElement('li');
    liUserAdmin.classList.add('nav-item');
    const contenidoLiUser = `<a class="nav-link text-light" aria-hidden="true" href="/html/adminUsers/adminUsers.html">Usuarios</a>`
    liUserAdmin.innerHTML = contenidoLiUser;
    navbarList.append(liUserAdmin);

    const liAdminMovie = document.createElement('li');
    liAdminMovie.classList.add('nav-item');
    const contenidoLiMovie = `<a class="nav-link text-light" href="/html/adminPeliculas/adminPeliculas.html">Catalogo</a>`
    liAdminMovie.innerHTML = contenidoLiMovie;
    navbarList.append(liAdminMovie);
}

const no_logueado = () => {
    const collapseNavbar = document.getElementById('navbarSupportedContent');

    const login = document.createElement('a');
    login.setAttribute('href', "./html/login/login.html");
    const contenido = `<button type="button" class="btn btn-primary mx-2 my-2">Iniciar Sesion</button>`;
    login.innerHTML = contenido;
    collapseNavbar.append(login);
}

const logueado = () => {
    const collapseNavbar = document.getElementById('navbarSupportedContent');

    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    const contenido = `
        <i class="bi bi-person-circle" data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-user me-2"></i>Ver perfil</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear me-2"></i>Ajustes</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-info me-2"></i>Soporte tecnico</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-right-to-bracket me-2"></i>Cerrar sesión</a></li>
        </ul>`;
    dropdown.innerHTML = contenido;
    collapseNavbar.append(dropdown);
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

