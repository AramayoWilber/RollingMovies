import { CatalogoDB } from './clases/CatalogoDB.class.js'
import cargarCatalogo from './adicionales/cargarTabla.js';
import { eventBotonPublicado, eventBotonDestacados, eventBorrar, deleteRowData } from './adicionales/eventosBotonesTabla.js';



////////////////////////    CARGAR TABLA  /////////////////////////////////////

const bodyTabla = document.getElementById('body-tabla');
const items_paginacion = document.getElementById('items-paginacion');
const cantidadRegistros = document.getElementById('select_candidad_registros');
const registros = parseInt(document.getElementById('select_candidad_registros').value);


cargarCatalogo(bodyTabla, items_paginacion, registros);

cantidadRegistros.addEventListener('change', e => {
    const registros = parseInt(document.getElementById('select_candidad_registros').value);
    cargarCatalogo(bodyTabla, items_paginacion, registros);
});


/////////////////////ACTION LISTENERS////////////////////////////////


const btn_add = document.getElementById('btn_add')
const tabla = document.getElementById('tabla');


const btnModalEliminar = document.getElementById('btn-modal-eliminar');

btnModalEliminar.addEventListener('click', () => {
    const key = deleteRowData.key;
    const elemento = deleteRowData.target;
    const catalogo = new CatalogoDB();

    elemento.remove(); ///// remuevo fila de la tabla solo frontEnd

    catalogo.eliminarRegistro(key); ///eliminamos el registro backend

    deleteRowData.key = null;
    deleteRowData.target = null;
})



tabla.addEventListener('mouseover', e => {

    const btns_destacados = document.getElementsByName('botones_destacados');
    const btns_publicados = document.getElementsByName('botones_publicado');
    const btns_borrar = document.getElementsByName('btn-opcion-borrar');

    btns_destacados.forEach(boton => {
        boton.addEventListener('click', eventBotonDestacados)
    })

    btns_publicados.forEach(button => {
        button.addEventListener('click', eventBotonPublicado)
    })

    btns_borrar.forEach(boton => {
        boton.addEventListener('click', eventBorrar);
    })


})


btn_add.addEventListener('click', e => {

})


