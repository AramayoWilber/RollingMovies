import { opcionesAdmin, logueado, no_logueado } from './adicionales/navbar.js'
import cerrar_seccion from "./adicionales/cerrarSeccion.js";

const btn = document.getElementById('button');

const mostrar = () => {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_sizd9c3';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        alert('Enviado!');
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });
  cerrar_seccion();
}

const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { logueado: false };
if (usuarioActivo.logueado) {
  logueado();
  if (usuarioActivo.administrador) {
    opcionesAdmin();
  }
  mostrar();
} else {
  no_logueado();
  mostrar();
}