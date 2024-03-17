import { CatalogoDB } from './clases/CatalogoDB.class.js'
import cargarCatalogo from './adicionales/cargarTabla.js';
import { Pelicula } from './clases/Pelicula.class.js';

const catalogo = new CatalogoDB();

const datosParaBorrar = {
    filaTabla: null,
    key: null
}

function eventBotonPublicado(e) {
    if (e.target.name === "btn_publicado") {
        const key = e.target.parentElement.parentElement.getAttribute('key');
        if (catalogo.peliPublicada(key)) {
            document.querySelector(`#icono_boton_publicado_${key} i`).classList.remove('fa-circle-check');
            document.querySelector(`#icono_boton_publicado_${key} i`).classList.add('fa-circle-xmark');
            e.target.classList.remove('btn-publicado');
            e.target.classList.add('btn-no-publicado');
            catalogo.modificarPublicada(key, false);
        } else {
            document.querySelector(`#icono_boton_publicado_${key} i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#icono_boton_publicado_${key} i`).classList.add('fa-circle-check');
            e.target.classList.remove('btn-no-publicado');
            e.target.classList.add('btn-publicado');
            catalogo.modificarPublicada(key, true);
        }
    }
}

function eventBotonDestacados(e) {
    if (e.target.name === "btn_destacado") {
        const key = e.target.parentElement.parentElement.getAttribute('key');

        if (catalogo.peliDestacada(key)) {
            e.target.classList.remove('btn-destacado')
            e.target.classList.add('btn-no-destacado')
            catalogo.modificarDestacado(key, false)
        } else {
            e.target.classList.remove('btn-no-destacado')
            e.target.classList.add('btn-destacado')
            catalogo.modificarDestacado(key, true)
        }
    }
}

function eventBorrar(e) {
    if (e.target.name === 'btn-opcion-borrar') {
        const key = e.target.parentElement.parentElement.getAttribute('key')
        const filaTabla = e.target.parentElement.parentElement.rowIndex;

        datosParaBorrar.filaTabla = filaTabla
        datosParaBorrar.key = key;
    }
}


////////////////////////    CARGAR TABLA  /////////////////////////////////////
const tabla = document.getElementById('tabla');
const bodyTabla = document.getElementById('body-tabla');
const items_paginacion = document.getElementById('items-paginacion');
const cantidadRegistros = document.getElementById('select_candidad_registros');
const btnModalEliminar = document.getElementById('btn-modal-eliminar');
const modalAdd = new bootstrap.Modal('#addBtnModal');

cargarCatalogo(bodyTabla, items_paginacion, cantidadRegistros.value);
modalAdd.show()

modalAdd.hide()


/////////////////////ACTION LISTENERS////////////////////////////////

tabla.addEventListener('click', eventBotonDestacados)
tabla.addEventListener('click', eventBorrar)
tabla.addEventListener('click', eventBotonPublicado)
cantidadRegistros.addEventListener('change', e => {
    const registros = document.getElementById('select_candidad_registros').value;
    cargarCatalogo(bodyTabla, items_paginacion, registros)
});

btnModalEliminar.addEventListener('click', (e) => {
    const filaTabla = datosParaBorrar.filaTabla;
    const key = datosParaBorrar.key;

    tabla.deleteRow(filaTabla);//eliminar fila html frontend
    catalogo.eliminarRegistro(key);

    datosParaBorrar.filaTabla = null;
    datosParaBorrar.key = null;
})



// ----------------------MODAL AGREGAR ------------ 
const formularioModal = document.getElementById('formulario_modal');

formularioModal.addEventListener('submit', e => {

    const titulo = document.getElementById('titulo_form').value;
    const genero = document.getElementById('genero_form').value;
    const descripcion = document.getElementById('descripcion_form').value;
    const categoria = document.getElementById('categoria_form').value;
    const publicar = document.getElementById('publicar_form').value;
    const destacar = document.getElementById('destacar_form').value;
    const URL = document.getElementById('validacionURL').value;
    const portada = document.getElementById('portada_form').value;
    const banner = document.getElementById('banner_form').value;

    const pelicula = new Pelicula(catalogo.obtenerCodigo(), titulo, categoria, genero, descripcion, publicar, destacar, portada, banner, URL);
    catalogo.agregarContenido(pelicula);
    cargarCatalogo(bodyTabla, items_paginacion, cantidadRegistros.value);


})