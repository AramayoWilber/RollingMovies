import { CatalogoDB } from './clases/CatalogoDB.class.js'
import loadUsers from './adicionales/cargarTablaUser.js';
import { Pelicula } from './clases/Pelicula.class.js';

/////////////////CARGAR TABLA/////////////

const tabla = document.getElementById('tabla');
const bodyTabla = document.getElementById('body-tabla');
const items_paginacion = document.getElementById('items-paginacion');
// const cantidadRegistros = document.getElementById('select_candidad_registros');
// const btnGuardarCambios = document.querySelector('#btn-sutmit-guardar')

loadUsers(bodyTabla, items_paginacion, 5, "");
