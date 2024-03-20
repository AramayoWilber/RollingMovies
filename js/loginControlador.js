import { UsuariosDB } from "./clases/UsuariosDB.class.js";
import { AdministradoresDB } from "./clases/AdministradoresDB.class.js"

const formulario = document.getElementById('formLogin');
const parrafo_alert = document.getElementById('parrafo-alert'); //trae el primer parrafor de la card-body


formulario.addEventListener('submit', e => {
    e.preventDefault();
    const administradores = new AdministradoresDB();
    const usuarios = new UsuariosDB();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //login como administrador o 
    if (usuarios.validarLogin(email, password)) { // metodo de la clase usuariosDB.class para validad el Login}
        setTimeout(() => {
            window.location.href = '/error404.html';
        }, 200);
        console.log('logueado como usuario');
    } else {
        if (administradores.validarLogin(email, password)) {
            window.location.href = '/error404.html';
            console.log('logueado como administrador');
        }
        else {
            parrafo_alert.classList.remove('login-correcto');
            parrafo_alert.classList.add('login-incorrecto');
        }
    }
});