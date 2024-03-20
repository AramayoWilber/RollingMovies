export class AdministradoresDB {
    constructor() {
    }

    establecerConexion() {
        const administrador = JSON.parse(localStorage.getItem('administradores'));
        if (!administrador) {
            const nuevoAdmin = [
                { id: 0, email: 'correo@correo.com', password: 'abc1234', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro' },
                { id: 1, email: 'admin@admin.com', password: '1234', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro' }];
            localStorage.setItem('administradores', JSON.stringify(nuevoAdmin));
        }
    }

    validarLogin(email, password) {
        this.establecerConexion();
        let administradores = JSON.parse(localStorage.getItem('administradores'));
        let valido = false;

        administradores.forEach(administrador => {
            if (email === administrador.email && password === administrador.password) {
                valido = true;
            }
        });

        return valido;
    }

}