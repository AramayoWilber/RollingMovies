import { PeliculasDB } from '../js/clases/PeliculasDB.class.js'

const deleteRowData = {
    key: null,
    target: null
}


function confirmarBorrado(key, target) {
    console.log('entre a la funcion')
    deleteRowData.key = key;
    deleteRowData.target = target;
}

function eventBotonPublicado(e) {

    const catalogo = new PeliculasDB();

    const btn_publicado_b = e.target.parentElement.parentElement.getAttribute('key');
    const btn_publicado_i = e.target.parentElement.parentElement.parentElement.getAttribute('key');

    if (btn_publicado_b !== null) {

        //click en el icono de boton

        const id_pelicula = e.target.parentElement.parentElement.getAttribute('key');

        if (catalogo.peliPublicada(id_pelicula)) {
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-check');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-xmark');
            e.target.classList.remove('btn-publicado');
            e.target.classList.add('btn-no-publicado');

            catalogo.modificarPublicada(id_pelicula, false);
        } else {
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-check');
            e.target.classList.remove('btn-no-publicado');
            e.target.classList.add('btn-publicado');
            catalogo.modificarPublicada(id_pelicula, true);
        }

    }

    if (btn_publicado_i !== null) {

        const id_pelicula = e.target.parentElement.parentElement.parentElement.getAttribute('key');

        if (catalogo.peliPublicada(id_pelicula)) {
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-check');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-xmark');
            e.target.parentElement.classList.remove('btn-publicado');
            e.target.parentElement.classList.add('btn-no-publicado');

            catalogo.modificarPublicada(id_pelicula, false);
        } else {
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-check');
            e.target.parentElement.classList.remove('btn-no-publicado');
            e.target.parentElement.classList.add('btn-publicado');
            catalogo.modificarPublicada(id_pelicula, true);
        }

    }
}

function eventBotonDestacados(e) {

    const catalogo = new PeliculasDB();

    const btn_destacado_b = e.target.parentElement.parentElement.getAttribute('key');
    const btn_descacado_i = e.target.parentElement.parentElement.parentElement.getAttribute('key');

    ////////////////////////////////////clips en icono destacado/////////////////////////////////////////
    if (btn_destacado_b !== null) {
        //click en el icono de boton
        const id_pelicula = e.target.parentElement.parentElement.getAttribute('key');
        if (catalogo.peliDestacada(id_pelicula)) {
            e.target.classList.remove('btn-destacado')
            e.target.classList.add('btn-no-destacado')
            catalogo.modificarDestacado(id_pelicula, false)
        } else {
            e.target.classList.remove('btn-no-destacado')
            e.target.classList.add('btn-destacado')
            catalogo.modificarDestacado(id_pelicula, true)
        }


    }
    if (btn_descacado_i !== null) {

        //click en el icono dentro del boton

        const id_pelicula = e.target.parentElement.parentElement.parentElement.getAttribute('key');

        if (catalogo.peliDestacada(id_pelicula)) {
            e.target.parentElement.classList.remove('btn-destacado')
            e.target.parentElement.classList.add('btn-no-destacado')
            catalogo.modificarDestacado(id_pelicula, false)
        } else {
            e.target.parentElement.classList.remove('btn-no-destacado')
            e.target.parentElement.classList.add('btn-destacado')
            catalogo.modificarDestacado(id_pelicula, true)
        }

    }
}


function eventBorrar(e) {

    const key_b = e.target.parentElement.parentElement.getAttribute('key');
    const key_i = e.target.parentElement.parentElement.parentElement.getAttribute('key');
    const btn_borrar_b = e.target.parentElement.parentElement;
    const btn_borrar_i = e.target.parentElement.parentElement.parentElement;

    if (key_b !== null) {
        confirmarBorrado(key_b, btn_borrar_b);
        console.log(deleteRowData)
    }

    if (key_i !== null) {
        confirmarBorrado(key_i, btn_borrar_i);
        console.log(deleteRowData)
    }

}



const bodyTabla = document.getElementById('body-tabla');


const llenarTabla = () => {

    const peliculas = new PeliculasDB();
    const datosPeliculas = peliculas.establecerConexion();

    datosPeliculas.forEach(element => {
        let peliculaPulicada;
        let peliculaDestacada;

        if (element.publicado) {
            peliculaPulicada = `<button name="botones_publicado" id="icono_boton_publicado_${element.codigo}" class="btn-publicado"><i class="fa-solid fa-circle-check"></i></button>`;
        } else
            peliculaPulicada = `<button name="botones_publicado" id="icono_boton_publicado_${element.codigo}" class="btn-no-publicado"><i class="fa-solid fa-circle-xmark"></i></button>`;

        if (element.destacada) {
            peliculaDestacada = `<button class="btn-destacado" name="botones_destacados"><i class="bi bi-star-fill"></i></button>`;
        } else
            peliculaDestacada = `<button class="btn-no-destacado" name="botones_destacados"><i class="bi bi-star-fill"></i></button>`;


        const filaTabla = `
        <th scope="row" class="text-center">${element.codigo}</th>
        <td class="p-2">${element.nombre}</td>
        <td>${element.categoria}</td>
        <td class="text-center">${peliculaPulicada}</td>
        <td class="text-center">
            <button class="btn-opcion-borrar" name="btn-opcion-borrar" data-bs-toggle="modal" data-bs-target="#modal-delete"><i class="bi bi-trash"></i></button>
            <button class="btn-opcion-editar" name="btn-opcion-editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
            ${peliculaDestacada}
        </td>
        `;

        const nuevaFilaTabla = document.createElement('tr');
        nuevaFilaTabla.setAttribute('key', element.codigo);
        nuevaFilaTabla.classList.add('text-center');
        nuevaFilaTabla.innerHTML = filaTabla;
        bodyTabla.append(nuevaFilaTabla);
    });

}



llenarTabla(); // llenamos la tabla con los datos de peliculas



/////////////////////ACTION LISTENERS////////////////////////////////


const btn_add = document.getElementById('btn_add')
const tabla = document.getElementById('tabla');


const btnModalEliminar = document.getElementById('btn-modal-eliminar');

btnModalEliminar.addEventListener('click', () => {
    const key = deleteRowData.key;
    const elemento = deleteRowData.target;
    const catalogo = new PeliculasDB();

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
        // boton.addEventListener('click', eventBotonDestacados)
    })

    btns_publicados.forEach(button => {
        //button.addEventListener('click', eventBotonPublicado)
    })

    btns_borrar.forEach(boton => {
        // boton.addEventListener('click', eventBorrar);
    })


})


btn_add.addEventListener('click', e => {
    const catalogo = new PeliculasDB();
    catalogo.obtenerCodigo()
    console.log(catalogo)
})


