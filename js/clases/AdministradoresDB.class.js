export class AdministradoresDB {
    constructor() {
    }

    establecerConexion() {
        const administrador = JSON.parse(localStorage.getItem('usuarios'));
        if (!administrador) {
            const nuevoUsuario = [
                { id: 0, email: 'correo@correo.com', password: 'abc1234', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro' },
                { id: 1, email: 'prueba@prueba.com', password: '123456', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro' }];
            localStorage.setItem('administrador', JSON.stringify(nuevoUsuario));
        }
    }

}