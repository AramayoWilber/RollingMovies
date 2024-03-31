import { UsuariosDB } from "../clases/UsuariosDB.class.js";
import { AdministradoresDB } from "../clases/AdministradoresDB.class.js"

const formulario = document.getElementById('formLogin');
const parrafo_alert = document.getElementById('parrafo-alert'); //trae el primer parrafor de la card-body
const inputs = document.querySelectorAll('#formLogin input');

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        parrafo_alert.classList.remove('login-incorrecto');
        parrafo_alert.classList.add('login-correcto');
    })
})

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const administradores = new AdministradoresDB();
    const usuarios = new UsuariosDB();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (usuarios.validarLogin(email, password)) { // metodo de la clase usuariosDB.class para validad el Login}
        if (usuarios.usuarioValido(usuarios.encontrarIdUser(email, password))) {
            localStorage.setItem('usuarioActivo', JSON.stringify({ id: usuarios.encontrarIdUser(email, password), administrador: false, logueado: true }));
            window.location.href = '/index.html';
        } else {
            window.location.href = '/html/login/registroSuccess.html'
        }
    } else {
        if (administradores.validarLogin(email, password)) {
            localStorage.setItem('usuarioActivo', JSON.stringify({ id: administradores.encontrarIdUser(email, password), administrador: true, logueado: true }));
            window.location.href = '/index.html';
        }
        else {
            parrafo_alert.classList.remove('login-correcto');
            parrafo_alert.classList.add('login-incorrecto');
        }
    }
});


