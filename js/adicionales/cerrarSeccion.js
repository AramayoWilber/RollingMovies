const cerrar_seccion = () => {
    const closed = document.getElementById('cerrar_seccion');
    if (closed)
        closed.addEventListener('click', e => {
            localStorage.removeItem('usuarioActivo');
            window.location.href = '/index.html';
        })
}

export default cerrar_seccion;