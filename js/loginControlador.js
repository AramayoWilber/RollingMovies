import { UsuariosDB } from "./clases/UsuariosDB.class.js";

const formulario = document.getElementById('formLogin');
const parrafo_alert = document.querySelector('#formLogin p'); //trae el primer parrafor de la card-body


formulario.addEventListener('submit', e => {
    e.preventDefault();

    const usuarios = new UsuariosDB();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(usuarios.validarLogin(email, password)){ // metodo de la clase usuariosDB.class para validad el Login}
        document.querySelector('#btn-submit .spinner-border').classList.add('spinner-border-activo')
        setTimeout(()=>{
            window.location.href = '/error404.html';
        }, 2000);
 
    }else{
        parrafo_alert.classList.remove('login-correcto');
        parrafo_alert.classList.add('login-incorrecto');
    }

});