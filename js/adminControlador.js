import {PeliculasDB} from './clases/PeliculasDB.class.js'

const bodyTabla = document.getElementById('body-tabla');


const llenarTabla = () => {

    const peliculas = new PeliculasDB();
    const datosPeliculas = peliculas.establecerConexion();
    
    datosPeliculas.forEach(element => {
        let peliculaPulicada;
        let peliculaDestacada;

        if(element.publicado){
            peliculaPulicada = `<button class="btn-publicado"><i class="bi bi-check-square"></i></button>`;
        }else
            peliculaPulicada = `<button class="btn-no-publicado"><i class="bi bi-x-circle"></i></button>`;

        if(element.destacada){
            peliculaDestacada = `<button class="btn-destacado" id="btn_destacado_${element.codigo}"><i class="bi bi-star-fill"></i></button>`;
        }else
            peliculaDestacada = `<button class="btn-no-destacado" id="btn_destacado_${element.codigo}"><i class="bi bi-star-fill"></i></button>`;
    

        const filaTabla = `
        <th scope="row" name="hola" id="id_fila_${element.codigo}">${element.codigo}</th>
        <td class="p-2">${element.nombre}</td>
        <td>${element.categoria}</td>
        <td>
            ${peliculaPulicada}
        </td>
        <td>
            <button class="btn-opciones" data-bs-toggle="modal" data-bs-target="#modal-delete"><i class="bi bi-trash"></i></button>
            <button class="btn-opciones" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
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