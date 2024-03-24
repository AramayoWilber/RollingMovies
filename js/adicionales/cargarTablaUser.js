import { UsuariosDB } from '../clases/UsuariosDB.class.js';

// PARAMETROS QUE RECIBE LA FUNCION 
// 1. variable con la ID del cuerpo de la tabla en el HTML 
// 2. variable con la ID de elemento Pagination donde sera el contenedor de los il para crear los items de la paginacion li 
// 3. cantidad de registros que se quieren mostar en la tabla
// 4. filtro por nombre de un array

export const loadUsers = (id_bodyTabla, id_item_paginacion, cantidadRegistros, filtroNombre, mostrar) => {
    let limite = cantidadRegistros;
    let desde = 0;
    let paginas;
    let paginaActiva = 1;
    let datosUsuarios;
    let usuarios = [];

    datosUsuarios = new UsuariosDB().filtrarEstado(mostrar);
    usuarios = datosUsuarios.filter(element => {
        if (element.apellido.toLowerCase().indexOf(filtroNombre) > -1)
            return element;
        if (element.nombre.toLowerCase().indexOf(filtroNombre) > -1)
            return element;
    })

    paginas = usuarios.length / limite;
    paginaActiva = 1;

    let arreglo = usuarios.slice(desde, limite); ///slice me permite crear arreglos hasta un numero personalizado
    const cargarUsuarios = () => {

        id_bodyTabla.innerHTML = ""; //limpio tabla
        arreglo.forEach(element => {
            let usuarioValidado;

            if (element.validado === 'true') {
                usuarioValidado = `<button name="validado" id="icono_boton_validado_${element.id}" class="btn-validado"><i class="fa-solid fa-circle-check"></i></button>`;
            } else
                usuarioValidado = `<button name="validado" id="icono_boton_validado_${element.id}" class="btn-no-validado"><i class="fa-solid fa-circle-xmark"></i></button>`;


            const filaTabla = `
            <th>${element.id}</th>
            <td>${element.apellido}</td>
            <td>${element.nombre}</td>
            <td>${element.email}</td>
            <td>${usuarioValidado}</td>
            <td id="btn-opciones">
                <button class="btn-opcion-borrar" name="btn-opcion-borrar" data-bs-toggle="modal" data-bs-target="#deteleBtnModal"><i class="bi bi-trash"></i></button>
            </td>
            `;

            const nuevaFilaTabla = document.createElement('tr');
            nuevaFilaTabla.setAttribute('key', element.id);
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
        const datosUsuarios = new UsuariosDB().filtrarEstado(mostrar);
        const usuariosActualizados = datosUsuarios.filter(element => {
            return element.nombre.toLowerCase().indexOf(filtroNombre) > -1
        })
        arreglo = usuariosActualizados.slice(desde, paginaActiva * limite);
        cargarUsuarios();
    }

    window.pasarPagina = (pagina) => {
        paginaActiva = pagina + 1;
        desde = pagina * limite;

        if (desde <= usuarios.length) {
            moficarArregloCatalogo()
        }

    }

    window.nextPage = () => {
        if (paginaActiva < paginas) {
            desde += cantidadRegistros;
            paginaActiva++;
            moficarArregloCatalogo();
        }

    };

    window.previusPage = () => {
        if (desde > 0) {
            paginaActiva--;
            desde -= cantidadRegistros;
            moficarArregloCatalogo();
        }
    }
    cargarUsuarios()
}

export default loadUsers;