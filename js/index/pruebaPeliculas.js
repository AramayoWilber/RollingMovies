import { CatalogoDB } from '../clases/CatalogoDB.class.js';

const catalogoDB = new CatalogoDB();
const mostradorPeliculas = document.getElementById('mostradorPeliculas')

// Obtiene los datos de las películas
let peliculas = catalogoDB.establecerConexion();

const mostrarPortadas = () => {
   
    mostradorPeliculas.innerHTML = '';          
    peliculas.forEach((item) => {
        const mostrarPortadaIndex = `
            <div>
              <a href="pages/error.html">
                <img src="${item.img_portada}" class="neon-border-2" width="100%" height="100%" alt="peli-sugerida">
              </a>
            </div>
        `;
        
        const nuevoItem = document.createElement('div');
        nuevoItem.classList.add('imghov', 'col-9', 'col-sm-5', 'col-md-5', 'col-lg-3', 'my-2');
        nuevoItem.innerHTML = mostrarPortadaIndex;
        mostradorPeliculas.append(nuevoItem);
    });
}

mostrarPortadas();


window.addEventListener('storage', function(event) {
    // Verifica si el cambio fue en la clave 'peliculas'
    if (event.key === 'peliculas') {
        // Obtiene los nuevos datos de las películas
        const nuevasPeliculas = catalogoDB.establecerConexion();

        // Compara los nuevos datos con los antiguos
        if (JSON.stringify(nuevasPeliculas) !== JSON.stringify(peliculas)) {
            // Si los datos han cambiado, actualiza las portadas y guarda los nuevos datos
            peliculas = nuevasPeliculas;
            mostrarPortadas();
        }
    }
});