import { CatalogoDB } from '../clases/CatalogoDB.class.js'

// PARAMETROS QUE RECIBE LA FUNCION 
// 1. variable con la ID de la tabla en el HTML 
// 2. variable con la ID del contenedor de los il para crear los items de la paginacion li 
// 3. cantidad de registros que se quieren mostar en la tabla
// 4. filtro por nombre de un array

export const cargarCatalogo = (id_bodyTabla, id_item_paginacion, mostrarRegistros, filtro) => {

    //variables para la paginacion
    const catalogo = new CatalogoDB().filtrarTitulo(filtro);
    let limite = mostrarRegistros;
    let desde = 0;
    let paginas = catalogo.length / limite;
    let paginaActiva = 1;

    let arreglo = catalogo.slice(desde, limite); ///slice me permite crear arreglos hasta un numero personalizado

    const cargarCatalogo = () => {

        id_bodyTabla.innerHTML = ""; //limpio tabla
        arreglo.forEach(element => {
            let peliculaPulicada;
            let peliculaDestacada;

            if (element.publicado) {
                peliculaPulicada = `<button name="btn_publicado" id="icono_boton_publicado_${element.codigo}" class="btn-publicado"><i class="fa-solid fa-circle-check"></i></button>`;
            } else
                peliculaPulicada = `<button name="btn_publicado" id="icono_boton_publicado_${element.codigo}" class="btn-no-publicado"><i class="fa-solid fa-circle-xmark"></i></button>`;

            if (element.destacada) {
                peliculaDestacada = `<button name="btn_destacado" class="btn-destacado"><i class="bi bi-star-fill"></i></button>`;
            } else
                peliculaDestacada = `<button name="btn_destacado" class="btn-no-destacado"><i class="bi bi-star-fill"></i></button>`;


            const filaTabla = `
            <th scope="row">${element.codigo}</th>
            <td>${element.nombre}</td>
            <td>${element.categoria}</td>
            <td>${peliculaPulicada}</td>
            <td id="btn-opciones">
                <button class="btn-opcion-borrar" name="btn-opcion-borrar" data-bs-toggle="modal" data-bs-target="#deteleBtnModal"><i class="bi bi-trash"></i></button>
                <button class="btn-opcion-editar" name="btn-opcion-editar" data-bs-toggle="modal" data-bs-target="#editBtnModal"><i class="bi bi-pencil-square"></i></button>
                ${peliculaDestacada}
            </td>
            `;

            const nuevaFilaTabla = document.createElement('tr');
            nuevaFilaTabla.setAttribute('key', element.codigo);
            nuevaFilaTabla.classList.add('text-center');
            nuevaFilaTabla.innerHTML = filaTabla;

            id_bodyTabla.append(nuevaFilaTabla);
        })

        cargarItemPaginacion()

    }

    const cargarItemPaginacion = () => {

        id_item_paginacion.innerHTML = "";

        for (let i = 0; i < paginas; i++) {
            const item_li = document.createElement('li');
            item_li.classList = `page-item ${paginaActiva === i + 1 ? "active" : ''} `;
            const contenido = `
                <button class="page-link" onclick="pasarPagina(${i})">${i + 1}</button>
            `;
            item_li.innerHTML = contenido;
            id_item_paginacion.append(item_li);
        }
    }

    const moficarArregloCatalogo = () => {
        const catalogoActualizado = new CatalogoDB().filtrarTitulo(filtro);
        arreglo = catalogoActualizado.slice(desde, paginaActiva * limite);
        cargarCatalogo();
    }

    window.pasarPagina = (pagina) => {
        paginaActiva = pagina + 1;
        desde = pagina * limite;

        if (desde <= catalogo.length) {
            moficarArregloCatalogo()
        }

    }

    window.nextPage = () => {
        if (paginaActiva < paginas) {
            desde += mostrarRegistros;
            paginaActiva++;
            moficarArregloCatalogo();
        }

    };

    window.previusPage = () => {
        if (desde > 0) {
            paginaActiva--;
            desde -= mostrarRegistros;
            moficarArregloCatalogo();
        }
    }
    cargarCatalogo()
}

export default cargarCatalogo;