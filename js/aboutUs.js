import { opcionesAdmin, logueado, no_logueado } from '/js/adicionales/navbar.js'
import cerrar_seccion from "/js/adicionales/cerrarSeccion.js";


cerrar_seccion();

const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { logueado: false };
if (usuarioActivo.logueado) {
    logueado();
    if (usuarioActivo.administrador) {
        opcionesAdmin();
    }
} else {
    no_logueado();
}