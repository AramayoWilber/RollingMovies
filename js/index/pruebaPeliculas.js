import { CatalogoDB } from '../clases/CatalogoDB.class.js';


const catalogoDB = new CatalogoDB();
const mostradorPeliculas = document.getElementById('mostradorPeliculas')

// Obtiene los datos de las películas


const mostrarPortadas = () => {
   
    let peliculas = catalogoDB.establecerConexion();
    mostradorPeliculas.innerHTML = '';          
    peliculas.forEach((item) => {
        
        if(item.publicado === true){
        const mostrarPortadaIndex = `
            <div>
                <img src="${item.img_portada}" class="neon-border-2" width="100%" height="100%" alt="peli-sugerida">
            </div>
        `;
        
        const nuevoItem = document.createElement('div');
        nuevoItem.setAttribute('id', item.codigo)
        nuevoItem.classList.add('imghov', 'col-9', 'col-sm-5', 'col-md-5', 'col-lg-3', 'my-2');
        nuevoItem.innerHTML = mostrarPortadaIndex;
        mostradorPeliculas.append(nuevoItem);
    }
    });
}
   
mostrarPortadas();

window.addEventListener('storage', function(event) {
    // Verifica si el cambio fue en la clave 'peliculas'
    if (event.key === 'peliculas') {
        // Obtiene los nuevos datos de las películas
        const nuevasPeliculas = catalogoDB.establecerConexion();

        // Compara los nuevos datos con los antiguos
        if (JSON.stringify(nuevasPeliculas) != JSON.stringify(peliculas)) {
            // Si los datos han cambiado, actualiza las portadas y guarda los nuevos datos
            peliculas = nuevasPeliculas;
            mostrarPortadas();
        }
    }
});
let prueba

mostradorPeliculas.addEventListener('click', e =>{
    prueba = e.target.parentElement.parentElement.parentElement.getAttribute('id')
    const peliculas = catalogoDB.establecerConexion()
    let peliculafiltrada
    peliculas.forEach((item) => {   
        if(item.codigo === prueba){
            peliculafiltrada = item[prueba]
    }
    window.location.href = "verPeliculas/pelicula.html"
    }) 
})
export default prueba