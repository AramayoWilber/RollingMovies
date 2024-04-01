export const opcionesAdmin = () => {
    const navbarList = document.getElementById('listaNavbar');
    const liUserAdmin = document.createElement('li');
    liUserAdmin.classList.add('nav-item');
    const contenidoLiUser = `<a class="nav-link text-light" href="/html/adminUsers/adminUsers.html">Usuarios</a>`
    liUserAdmin.innerHTML = contenidoLiUser;
    navbarList.append(liUserAdmin);

    const liAdminMovie = document.createElement('li');
    liAdminMovie.classList.add('nav-item');
    const contenidoLiMovie = `<a class="nav-link text-light" href="/html/adminPeliculas/adminPeliculas.html">Catalogo</a>`
    liAdminMovie.innerHTML = contenidoLiMovie;
    navbarList.append(liAdminMovie);
}

export const no_logueado = () => {
    const collapseNavbar = document.getElementById('navbarSupportedContent');

    const login = document.createElement('a');
    login.setAttribute('href', "./html/login/login.html");
    const contenido = `<button type="button" class="btn btn-primary mx-2 my-2">Iniciar Sesion</button>`;
    login.innerHTML = contenido;
    collapseNavbar.append(login);
}

export const logueado = () => {
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
