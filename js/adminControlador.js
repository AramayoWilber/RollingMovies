import { CatalogoDB } from './clases/CatalogoDB.class.js'
import cargarCatalogo from './adicionales/cargarTabla.js';
import { Pelicula } from './clases/Pelicula.class.js';

const catalogo = new CatalogoDB();

const datosParaBorrar = {
    filaTabla: null,
    key: null
}

const ultimaFilaSeleccionada = {
    key: null
}
//-------------------------------------------------------------

function cargarModalEdit(e) {

    if (e.target.name === "btn-opcion-editar") {
        const key = parseInt(e.target.parentElement.parentElement.getAttribute('key'))
        const catalogo = new CatalogoDB().establecerConexion();
        ultimaFilaSeleccionada.key = key
        let datosPelicula;
        catalogo.forEach(element => {
            if (element.codigo === key) {
                datosPelicula = element;
            }
        });

        document.getElementById('titulo_formEdit').value = datosPelicula.nombre;
        document.getElementById('descripcion_formEdit').value = datosPelicula.descripcion;
        document.getElementById('genero_formEdit').value = datosPelicula.genero;
        document.getElementById('publicar_formEdit').value = datosPelicula.publicado;
        document.getElementById('destacar_formEdit').value = datosPelicula.destacada;
        document.getElementById('categoria_formEdit').value = datosPelicula.categoria;
        document.getElementById('validacionURL_formEdit').value = datosPelicula.url_trailer;
        document.getElementById('url_portada_formEdit').value = datosPelicula.img_portada;
        document.getElementById('url_banner_formEdit').value = datosPelicula.img_banner;
    }
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

/////////////// EVENTO BORRAR ///////////////////////////
function eventBorrar(e) {
    if (e.target.name === 'btn-opcion-borrar') {
        const key = e.target.parentElement.parentElement.getAttribute('key')
        const filaTabla = e.target.parentElement.parentElement.rowIndex;

        datosParaBorrar.filaTabla = filaTabla
        datosParaBorrar.key = key;
    }
}

const btnModalEliminar = document.getElementById('btn-modal-eliminar');

btnModalEliminar.addEventListener('click', (e) => {
    const filaTabla = datosParaBorrar.filaTabla;
    const key = datosParaBorrar.key;

    tabla.deleteRow(filaTabla);//eliminar fila html frontend
    catalogo.eliminarRegistro(key);

    datosParaBorrar.filaTabla = null;
    datosParaBorrar.key = null;
    cargarCatalogo(bodyTabla, items_paginacion, cantidadRegistros.value);
})





////////////////////////    CARGAR TABLA  /////////////////////////////////////
const tabla = document.getElementById('tabla');
const bodyTabla = document.getElementById('body-tabla');
const items_paginacion = document.getElementById('items-paginacion');
const cantidadRegistros = document.getElementById('select_candidad_registros');

cargarCatalogo(bodyTabla, items_paginacion, cantidadRegistros.value);

/////////////////////ACTION LISTENERS////////////////////////////////

tabla.addEventListener('click', eventBotonDestacados)
tabla.addEventListener('click', eventBorrar)
tabla.addEventListener('click', eventBotonPublicado)
tabla.addEventListener('click', cargarModalEdit)
cantidadRegistros.addEventListener('change', e => {
    const registros = document.getElementById('select_candidad_registros').value;
    cargarCatalogo(bodyTabla, items_paginacion, registros)
});


// ----------------------MODAL AGREGAR ------------ 
const modalAgregar = document.getElementById('formulario_modal_agregar');
const modalAdd = new bootstrap.Modal('#addBtnModal');

modalAgregar.addEventListener('submit', e => {
    e.preventDefault()
    const titulo = document.getElementById('titulo_form').value;
    const genero = document.getElementById('genero_form').value;
    const descripcion = document.getElementById('descripcion_form').value;
    const categoria = document.getElementById('categoria_form').value;
    const publicar = document.getElementById('publicar_form').value;
    const destacar = document.getElementById('destacar_form').value;
    const url_trailer = document.getElementById('validacionURL').value;
    const url_portada = document.getElementById('url_portada_form').value;
    const url_banner = document.getElementById('url_banner_form').value;

    const pelicula = new Pelicula(catalogo.obtenerCodigo(), titulo, categoria, genero, descripcion, publicar, destacar, url_portada, url_banner, url_trailer);
    catalogo.agregarContenido(pelicula);
    cargarCatalogo(bodyTabla, items_paginacion, cantidadRegistros.value);
    setTimeout(() => {
        modalAdd.hide() // cierra el modal
    }, 500);

})

//////////////////// MODAL EDITAR /////////////////////////////
const modalEditar = document.getElementById('editBtnModal');

modalEditar.addEventListener('submit', e => {
    e.preventDefault();

    const key = ultimaFilaSeleccionada.key;
    const titulo = document.getElementById('titulo_formEdit').value;
    const genero = document.getElementById('genero_formEdit').value;
    const descripcion = document.getElementById('descripcion_formEdit').value;
    const categoria = document.getElementById('categoria_formEdit').value;
    const publicar = document.getElementById('publicar_formEdit').value;
    const destacar = document.getElementById('destacar_formEdit').value;
    const url_trailer = document.getElementById('validacionURL_formEdit').value;
    const url_portada = document.getElementById('url_portada_formEdit').value;
    const url_banner = document.getElementById('url_banner_formEdit').value;

    const nuevaPelicula = new Pelicula(key, titulo, categoria, genero, descripcion, publicar, destacar, url_portada, url_banner, url_trailer)
    catalogo.editatElementoDelCatalogo(key, nuevaPelicula);

})

