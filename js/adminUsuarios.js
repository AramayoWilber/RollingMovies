import loadUsers from './adicionales/cargarTablaUser.js';
import { UsuariosDB } from './clases/UsuariosDB.class.js';
import { opcionesAdmin, logueado } from './adicionales/navbar.js'

const mostrar = () => {
    /////////////////CARGAR TABLA/////////////

    const tabla = document.getElementById('tabla');
    const bodyTabla = document.getElementById('body-tabla');
    const items_paginacion = document.getElementById('items-paginacion');
    const cantidadRegistros = document.getElementById('select_candidad_registros');
    const SelectfiltarUsuarios = document.getElementById('select_validos');
    const filtrar = document.getElementById('filtrar_nombres');
    const search = document.getElementById('input-search').value;

    loadUsers(bodyTabla, items_paginacion, cantidadRegistros.value, search, SelectfiltarUsuarios.value);


    //////////////////////EVENTS LISTENENERS//////////////////////////////////////////////////
    cantidadRegistros.addEventListener('change', e => {
        loadUsers(bodyTabla, items_paginacion, cantidadRegistros.value, search, SelectfiltarUsuarios.value);
    })

    SelectfiltarUsuarios.addEventListener('change', e => {
        loadUsers(bodyTabla, items_paginacion, cantidadRegistros.value, search, SelectfiltarUsuarios.value);

    })

    filtrar.addEventListener('submit', e => {
        e.preventDefault();
        const search = document.getElementById('input-search').value;
        loadUsers(bodyTabla, items_paginacion, cantidadRegistros.value, search, SelectfiltarUsuarios.value);
    })

    tabla.addEventListener('click', e => {
        if (e.target.name === "validado") {
            const cambiarEstado = new UsuariosDB();
            const key = e.target.parentElement.parentElement.getAttribute('key')
            const usuario = new UsuariosDB().obtenerEstado(key)
            if (usuario === 'true') {
                document.querySelector(`#icono_boton_validado_${key} i`).classList.remove('fa-circle-check');
                document.querySelector(`#icono_boton_validado_${key} i`).classList.add('fa-circle-xmark');
                document.getElementById(`icono_boton_validado_${key}`).classList.add('btn-no-validado');
                document.getElementById(`icono_boton_validado_${key}`).classList.remove('btn-validado');
                cambiarEstado.cambiarEstado(key, 'false');
            }
            if (usuario === 'false') {
                document.querySelector(`#icono_boton_validado_${key} i`).classList.remove('fa-circle-xmark');
                document.querySelector(`#icono_boton_validado_${key} i`).classList.add('fa-circle-check');
                e.target.classList.remove('btn-no-validado');
                e.target.classList.add('btn-validado');
                cambiarEstado.cambiarEstado(key, 'true');
            }
        }
    });

    // -----------MODAL BORRAR------------

    const datosParaBorrar = {
        filaTabla: null,
        key: null
    }

    const ultimaFilaSeleccionada = {
        key: null
    }

    function eventBorrar(e) {
        if (e.target.name === 'btn-opcion-borrar') {
            const key = e.target.parentElement.parentElement.getAttribute('key')
            const filaTabla = e.target.parentElement.parentElement.rowIndex;

            datosParaBorrar.filaTabla = filaTabla
            datosParaBorrar.key = key;
        }
    }


    tabla.addEventListener('click', eventBorrar)

    const btnModalEliminar = document.getElementById('btn-modal-eliminar');

    btnModalEliminar.addEventListener('click', (e) => {
        const filaTabla = datosParaBorrar.filaTabla;
        const key = datosParaBorrar.key;
        tabla.deleteRow(filaTabla);//eliminar fila html frontend
        const usuario = new UsuariosDB();
        usuario.eliminarRegistro(key);
        datosParaBorrar.filaTabla = null;
        datosParaBorrar.key = null;
        loadUsers(bodyTabla, items_paginacion, cantidadRegistros.value, search, SelectfiltarUsuarios.value);
    })
}

const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { logueado: false };

if (usuarioActivo.logueado) {
    logueado();
    if (usuarioActivo.administrador) {
        opcionesAdmin();
    }
    mostrar();
} else {
    window.location.href = '/html/login/login.html'
}