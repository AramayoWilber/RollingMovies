import { Usuario } from './clases/Usuario.class.js';
import { UsuariosDB } from './clases/UsuariosDB.class.js';

const formRegistro = document.getElementById('formRegistro');
const inputs = document.querySelectorAll('#formRegistro input');
const selects = document.querySelectorAll('#formRegistro select');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    fecha: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    // valida la fecha de formato dd/mm/yyyy incluyendo los meses bisiestos.
    fecha2: /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm

}

const camposValidados = {
    email: false,
    apellido: false,
    nombre: false,
    telefono: false,
    password: false,
    genero: false,
    terminos: false
}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input)) {
        document.getElementById(`form-group-${campo}`).classList.remove('form_grupo_incorrecto');
        document.getElementById(`form-group-${campo}`).classList.add('form_grupo_correcto');
        document.querySelector(`#form-group-${campo} i`).classList.remove('bi-x-circle-fill');
        document.querySelector(`#form-group-${campo} i`).classList.add('bi-check-circle-fill');
        document.querySelector(`#form-group-${campo} .input-error`).classList.remove('input-error-activo');
        camposValidados[campo] = true;
    }
    else {
        document.getElementById(`form-group-${campo}`).classList.add('form_grupo_incorrecto');
        document.querySelector(`#form-group-${campo} i`).classList.remove('bi-check-circle-fill');
        document.querySelector(`#form-group-${campo} i`).classList.add('bi-x-circle-fill');
        document.querySelector(`#form-group-${campo} .input-error`).classList.add('input-error-activo');
        camposValidados[campo] = false;
    }
};

const validadFormulario = (e) => {
    switch (e.target.name) { //obtiene el valor de la clase name en el Input
        case 'email':
            validarCampo(expresiones.correo, e.target.value, 'email')
            break;

        case 'apellido':
            validarCampo(expresiones.nombre, e.target.value, e.target.name);
            break;

        case 'nombre':
            validarCampo(expresiones.nombre, e.target.value, e.target.name);
            break;

        case 'telefono':
            validarCampo(expresiones.telefono, e.target.value, e.target.name);
            break;

        case 'password':
            validarCampo(expresiones.password, e.target.value, e.target.name);
            break;

    }
}

function validarSelect(e) {
    if (e.target.name === 'genero') {
        if (e.target.value !== "") {
            document.getElementById('form-group-genero').classList.remove('form-grupo-genero');
            document.getElementById('form-group-genero').classList.add('form_grupo_genero_correcto');
            camposValidados.genero = true;
        }
        else {
            document.getElementById('form-group-genero').classList.add('form_grupo_genero_correcto');
            document.getElementById('form-group-genero').classList.add('form-grupo-genero');
            camposValidados.genero = false;
        }
    }
}


inputs.forEach(input => {
    input.addEventListener('keyup', validadFormulario); //evento al presionar tecla en el input
    input.addEventListener('blur', validadFormulario); // evento clip fuera del input
});

selects.forEach(select => {
    select.addEventListener('click', validarSelect)
    select.addEventListener('blur', validarSelect);

});


formRegistro.addEventListener('submit', e => {
    e.preventDefault();


    const valorSelect = document.getElementById('genero_formRegistro').value;

    if (valorSelect === "") {
        document.getElementById('form-group-genero').classList.add('form_grupo_genero_correcto');
        document.getElementById('form-group-genero').classList.add('form-grupo-genero');
    }

    const keyss = Object.keys(camposValidados);

    for (let i = 0; i < keyss.length - 2; i++) {
        const clave = keyss[i]
        if (camposValidados[clave] === false) {
            document.getElementById(`form-group-${clave}`).classList.add('form_grupo_incorrecto');
            document.querySelector(`#form-group-${clave} i`).classList.remove('bi-check-circle-fill');
            document.querySelector(`#form-group-${clave} i`).classList.add('bi-x-circle-fill');
            document.querySelector(`#form-group-${clave} .input-error`).classList.add('input-error-activo');
        }
    }


    if (document.getElementById('check-terminos').checked) {
        document.querySelector('#form-group-terminos .input-error-checked').classList.remove('input-error-checked-activo');
        document.getElementById('form-group-terminos').classList.remove('form-grupo-checke-incorrecto');
        camposValidados.terminos = true;

    }
    else {
        document.querySelector('#form-group-terminos .input-error-checked').classList.add('input-error-checked-activo');
        document.getElementById('form-group-terminos').classList.add('form-grupo-checke-incorrecto');
        camposValidados.terminos = false;
    }


    if (camposValidados.email && camposValidados.email && camposValidados.nombre && camposValidados.apellido && camposValidados.telefono && camposValidados.password && camposValidados.genero && camposValidados.terminos) {

        const usuarioDB = new UsuariosDB();

        const form_email = document.getElementById('email_formRegistro').value;
        const form_nombre = document.getElementById('nombre_formRegistro').value;
        const form_apellido = document.getElementById('apellido_formRegistro').value;
        const form_password = document.getElementById('password_formRegistro').value;
        const form_telefono = document.getElementById('telefono_formRegistro').value;
        const form_genero = document.getElementById('genero_formRegistro').value;

        const nuevoUsuario = new Usuario(usuarioDB.obtenerNuevoId(), form_apellido, form_email, form_password, form_nombre, form_telefono, form_genero);

        usuarioDB.agregarUsuario(nuevoUsuario);

        window.location.href = '/html/login/registroSuccess.html';
    }
});
























// formRegistro.addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.stopPropagation();


// });

//form.classList.add('was-validated')