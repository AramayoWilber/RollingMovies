import { UsuariosDB } from '../clases/UsuariosDB.class.js';

const formulario = document.getElementById('formulario');
const input = document.querySelector('#formulario input');


const expReg_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

let emailValido = false;
let emailValidoEncontrado = false;

const validarCorreo = (e) => {
    if (expReg_correo.test(e.target.value)) {
        document.getElementById('formulario').classList.remove('email-no-valido');
        document.getElementById('formulario').classList.remove('form-email-incorrecto');
        document.getElementById('formulario').classList.add('form-email-correcto');
        emailValido = true;
    }
    else {
        document.getElementById('formulario').classList.remove('email-no-valido');
        document.getElementById('formulario').classList.add('form-email-incorrecto');
        emailValido = false;

    }
}

const verificarEmailDB = () => {
    const usuarios = new UsuariosDB();
    const campo_input = document.getElementById('form_email').value;
    if (usuarios.verificarCorreoValido(campo_input)) {
        emailValidoEncontrado = true;
    }
    else {
        document.getElementById('formulario').classList.add('email-no-valido');
        emailValidoEncontrado = false;
    }
}

function mostrar() {
    input.addEventListener('keyup', validarCorreo);
    input.addEventListener('blur', validarCorreo);


    formulario.addEventListener('submit', e => {
        e.preventDefault();

        verificarEmailDB();

        if (!emailValido) {
            document.getElementById('formulario').classList.add('form-email-incorrecto');
        } else {
            if (!emailValidoEncontrado) {
                document.getElementById('formulario').classList.add('email-no-valido');
            }
            else {
                window.location.href = '../../html/login/resetPasswordEmail.html';
            }
        }


    });
}

const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { logueado: false };

if (usuarioActivo.logueado) {
    window.location.href = '/index.html';
} else {
    mostrar();
}
