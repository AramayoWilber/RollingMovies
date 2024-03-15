import {PeliculasDB} from './clases/PeliculasDB.class.js'
import language_ES from '../bootstrap/DataTable/language_ES.js';

const bodyTabla = document.getElementById('body-tabla');


const llenarTabla = () => {

    const peliculas = new PeliculasDB();
    const datosPeliculas = peliculas.establecerConexion();
    
    datosPeliculas.forEach(element => {
        let peliculaPulicada;
        let peliculaDestacada;

        if(element.publicado){
            peliculaPulicada = `<button class="btn-publicado"><i class="fa-solid fa-circle-check"></i></button>`;
        }else
            peliculaPulicada = `<button class="btn-no-publicado"><i class="fa-solid fa-circle-xmark"></i></button>`;

        if(element.destacada){
            peliculaDestacada = `<button class="btn-destacado" id="btn_destacado_${element.codigo}"><i class="bi bi-star-fill"></i></button>`;
        }else
            peliculaDestacada = `<button class="btn-no-destacado" id="btn_destacado_${element.codigo}"><i class="bi bi-star-fill"></i></button>`;
    

        const filaTabla = `
        <th scope="row" class="text-center" id="id_fila_${element.codigo}">${element.codigo}</th>
        <td class="p-2">${element.nombre}</td>
        <td>${element.categoria}</td>
        <td>
            ${peliculaPulicada}
        </td>
        <td>
            <button class="btn-opcion-borrar" data-bs-toggle="modal" data-bs-target="#modal-delete"><i class="bi bi-trash"></i></button>
            <button class="btn-opcion-editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
            ${peliculaDestacada}
        </td>
        `;

        const nuevaFilaTabla = document.createElement('tr');
        nuevaFilaTabla.classList.add('text-center');
        nuevaFilaTabla.innerHTML = filaTabla;
        bodyTabla.append(nuevaFilaTabla);
    });

}

llenarTabla(); // llenamos la tabla con los datos de peliculas


const tabla = new DataTable('#tabla', {
    language: language_ES,
    lengthMenu: [3, 6, 9, 12],
    columnDefs:[ //cambiar las definiciones de las columnas "leerDocumentacion"
        { orderable: false, target: [3,4]},
        { searchable: false, target: [0,2,3,4]}
    ],
    pageLength: 5
});

const btn_destacado = document.getElementById('btn_destacado_1');
const scopes_table =document.querySelectorAll('#body-tabla th');

const valorTabla = document.querySelectorAll('#body-tabla');
console.log(valorTabla)
valorTabla.forEach(row => {
    row.addEventListener('click', e =>{
        console.log(e.target.value);

    });
});


btn_destacado.addEventListener('click',()=>{
});