import {PeliculasDB} from './clases/PeliculasDB.class.js'
import language_ES from '../bootstrap/DataTable/language_ES.js';

function eventBotonPublicado(e){

    const catalogo = new PeliculasDB();

    const btn_publicado_b = e.target.parentElement.parentElement.getAttribute('key');
    const btn_publicado_i = e.target.parentElement.parentElement.parentElement.getAttribute('key');

    if(btn_publicado_b !== null){
        
        //click en el icono de boton

        const id_pelicula = e.target.parentElement.parentElement.getAttribute('key');

        if(catalogo.peliPublicada(id_pelicula)){
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-check');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-xmark');
            e.target.classList.remove('btn-publicado');
            e.target.classList.add('btn-no-publicado');

            catalogo.modificarPublicada(id_pelicula, false);
        }else{
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-check');
            e.target.classList.remove('btn-no-publicado');
            e.target.classList.add('btn-publicado');
            catalogo.modificarPublicada(id_pelicula, true);
        }

    }  

    if(btn_publicado_i!== null){
            
        const id_pelicula = e.target.parentElement.parentElement.parentElement.getAttribute('key');
            
        if(catalogo.peliPublicada(id_pelicula)){
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-check');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-xmark');
            e.target.parentElement.classList.remove('btn-publicado');
            e.target.parentElement.classList.add('btn-no-publicado');

            catalogo.modificarPublicada(id_pelicula, false);
        }else{
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#icono_boton_publicado_${id_pelicula} i`).classList.add('fa-circle-check');
            e.target.parentElement.classList.remove('btn-no-publicado');
            e.target.parentElement.classList.add('btn-publicado');
            catalogo.modificarPublicada(id_pelicula, true);
        }

    }
}

function eventBotonDestacados(e){

    const catalogo = new PeliculasDB();

    const btn_destacado_b = e.target.parentElement.parentElement.getAttribute('key');
    const btn_descacado_i = e.target.parentElement.parentElement.parentElement.getAttribute('key');

    ////////////////////////////////////clips en icono destacado/////////////////////////////////////////
    if(btn_destacado_b !== null){
        //click en el icono de boton
        const id_pelicula = e.target.parentElement.parentElement.getAttribute('key');  
        if(catalogo.peliDestacada(id_pelicula)){
            e.target.classList.remove('btn-destacado')
            e.target.classList.add('btn-no-destacado')
            catalogo.modificarDestacado(id_pelicula, false)
        }else{
            e.target.classList.remove('btn-no-destacado')
            e.target.classList.add('btn-destacado')
            catalogo.modificarDestacado(id_pelicula, true)
        }


    }
        if(btn_descacado_i !== null){
           
            //click en el icono dentro del boton

            const id_pelicula = e.target.parentElement.parentElement.parentElement.getAttribute('key');
            
            if(catalogo.peliDestacada(id_pelicula)){
                e.target.parentElement.classList.remove('btn-destacado')
                e.target.parentElement.classList.add('btn-no-destacado')
                catalogo.modificarDestacado(id_pelicula, false)
            }else{
                e.target.parentElement.classList.remove('btn-no-destacado')
                e.target.parentElement.classList.add('btn-destacado')
                catalogo.modificarDestacado(id_pelicula, true)
            }

        }
}

const bodyTabla = document.getElementById('body-tabla');


const llenarTabla = () => {

    const peliculas = new PeliculasDB();
    const datosPeliculas = peliculas.establecerConexion();
    
    datosPeliculas.forEach(element => {
        let peliculaPulicada;
        let peliculaDestacada;

        if(element.publicado){
            peliculaPulicada = `<button name="botones_publicado" id="icono_boton_publicado_${element.codigo}" class="btn-publicado"><i class="fa-solid fa-circle-check"></i></button>`;
        }else
            peliculaPulicada = `<button name="botones_publicado" id="icono_boton_publicado_${element.codigo}" class="btn-no-publicado"><i class="fa-solid fa-circle-xmark"></i></button>`;

        if(element.destacada){
            peliculaDestacada = `<button class="btn-destacado" name="botones_destacados"><i class="bi bi-star-fill"></i></button>`;
        }else
            peliculaDestacada = `<button class="btn-no-destacado" name="botones_destacados"><i class="bi bi-star-fill"></i></button>`;
    

        const filaTabla = `
        <th scope="row" class="text-center">${element.codigo}</th>
        <td class="p-2">${element.nombre}</td>
        <td>${element.categoria}</td>
        <td class="text-center">${peliculaPulicada}</td>
        <td class="text-center">
            <button class="btn-opcion-borrar" data-bs-toggle="modal" data-bs-target="#modal-delete"><i class="bi bi-trash"></i></button>
            <button class="btn-opcion-editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
            ${peliculaDestacada}
        </td>
        `;

        const nuevaFilaTabla = document.createElement('tr');
        nuevaFilaTabla.setAttribute('key',element.codigo);
        nuevaFilaTabla.classList.add('text-center');
        nuevaFilaTabla.innerHTML = filaTabla;
        bodyTabla.append(nuevaFilaTabla);
    });

}



llenarTabla(); // llenamos la tabla con los datos de peliculas


new DataTable('#tabla', {
    language: language_ES,
    lengthMenu: [3, 6, 9, 12],
    columnDefs:[ //cambiar las definiciones de las columnas "leerDocumentacion"
        { orderable: false, target: [3,4]},
        { searchable: false, target: [0,2,3,4]}
    ],
    pageLength: 5
});






/////////////////////ACTION LISTENERS////////////////////////////////




const tabla = document.getElementById('tabla');
const btn_add = document.getElementById('btn_add')
const btns_destacados = document.getElementsByName('botones_destacados');
const btns_publicados = document.getElementsByName('botones_publicado');


btns_destacados.forEach(boton => {
    boton.addEventListener('click', eventBotonDestacados)
})

btns_publicados.forEach(button => {
    button.addEventListener('click',eventBotonPublicado)
})














btn_add.addEventListener('click', e => {
    console.log(e.target.parentElement.parentElement)
})



//eventos de la tabla
//tabla.addEventListener('click', eventBotonDestacar);
// tabla.addEventListener('click', e => {

// });




