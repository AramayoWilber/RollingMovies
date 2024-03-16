import { CatalogoDB } from "../clases/CatalogoDB.class.js";

export const deleteRowData = {
    key: null,
    target: null
}



function confirmarBorrado(key, target) {
    console.log('entre a la funcion')
    deleteRowData.key = key;
    deleteRowData.target = target;
}

export function eventBotonPublicado(e) {

    const catalogo = new CatalogoDB();

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

export function eventBotonDestacados(e) {

    const catalogo = new CatalogoDB();

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

export function eventBorrar(e) {

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
