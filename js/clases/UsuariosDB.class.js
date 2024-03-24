export class UsuariosDB {

    constructor() {
    }

    establecerConexion() {
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        if (!usuarios) {
            const nuevoUsuario = [
                { id: 0, validado: "false", email: 'user0@user.com', password: 'abc1234', apellido: 'Gonzalez', nombre: 'Juan Martin', telefono: '123456789', genero: 'otro' },
                { id: 1, validado: "true", email: 'user1@user.com', password: '123456', apellido: 'Ramiro', nombre: 'David Manuel', telefono: '123456789', genero: 'otro' },
                { id: 2, validado: "false", email: 'user2@user.com', password: 'abc1234', apellido: 'Martinez', nombre: 'Micaela', telefono: '123456789', genero: 'otro' },
                { id: 3, validado: "true", email: 'user3@user.com', password: '123456', apellido: 'Aramayo', nombre: 'Rocio Abigail', telefono: '123456789', genero: 'otro' },
                { id: 4, validado: "false", email: 'user4@user.com', password: 'abc1234', apellido: 'Marinucci', nombre: 'Carolina', telefono: '123456789', genero: 'otro' },
                { id: 5, validado: "true", email: 'user5@user.com', password: '123456', apellido: 'Aramayo', nombre: 'Luis Emanuel', telefono: '123456789', genero: 'otro' },
                { id: 6, validado: "false", email: 'user6@user.com', password: 'abc1234', apellido: 'Goytea', nombre: 'Macarena Milagros', telefono: '123456789', genero: 'otro' },
                { id: 7, validado: "true", email: 'user7@user.com', password: '123456', apellido: 'Giacobe', nombre: 'Franco Emanuel', telefono: '123456789', genero: 'otro' }];
            localStorage.setItem('usuarios', JSON.stringify(nuevoUsuario));
        }
    }


    obtenerNuevoId() {
        this.establecerConexion();
        const datosUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        const ultimoUsuario = datosUsuarios.length - 1;
        return datosUsuarios[ultimoUsuario].id + 1;
    }

    agregarUsuario(objUsuario) {
        const usuario = objUsuario;
        this.establecerConexion();
        let usuariosDB = JSON.parse(localStorage.getItem('usuarios'));
        //agrego nuevo usuario en la variable local
        usuariosDB.push(usuario);
        //Actualizo la nueva base de datos
        localStorage.setItem('usuarios', JSON.stringify(usuariosDB));
    }


    verificarCorreoValido(correo) {
        this.establecerConexion();
        let usuariosDB = JSON.parse(localStorage.getItem("usuarios"));
        let usuarioEncontrado = false;

        usuariosDB.forEach(usuario => {
            if (correo === usuario.email) {
                usuarioEncontrado = true;
            }
        });

        return usuarioEncontrado;
    }


    validarLogin(email, password) {
        this.establecerConexion();
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let valido = false;

        usuarios.forEach(usuario => {
            if (email === usuario.email && password === usuario.password) {
                valido = true;
            }
        });

        return valido;
    }


    filtrarNombre(nombre) {
        this.establecerConexion();
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        const usuarios_filtrados = usuarios.filter(element => {
            return element.nombre.toLowerCase().indexOf(nombre) > -1
        })
        return usuarios_filtrados;
    }

    filtrarEstado(estado) {
        this.establecerConexion();
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        const usuarios_filtrados = usuarios.filter(element => {
            return element.validado.toLowerCase().indexOf(estado) > -1
        })
        return usuarios_filtrados;
    }

    obtenerEstado(key) {
        const id = parseInt(key);
        this.establecerConexion();
        let estado;
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        usuarios.forEach(usuario => {
            if (usuario.id === id) {
                estado = usuario.validado;
            }
        });
        return estado;
    }

    cambiarEstado(key, estadoNuevo) {
        const id = parseInt(key);
        this.establecerConexion();
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        usuarios.forEach(usuario => {
            if (usuario.id === id) {
                usuario.validado = estadoNuevo;
            }
        });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }


    eliminarRegistro(key) {
        const id = parseInt(key);
        this.establecerConexion();
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        const usuarios_filtrados = usuarios.filter(item => item.id !== id);
        // Actualizo base de datos
        localStorage.setItem('usuarios', JSON.stringify(usuarios_filtrados));
    }
}

