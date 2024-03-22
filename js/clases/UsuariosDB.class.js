export class UsuariosDB {

    constructor() {
    }

    establecerConexion() {
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        if (!usuarios) {
            const nuevoUsuario = [
                { id: 0, validado: false, email: 'user@user.com', password: 'abc1234', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro' },
                { id: 1, validado: false, email: 'user1@user1.com', password: '123456', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro' }];
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
            return element.estado.toLowerCase().indexOf(estado) > -1
        })
        return usuarios_filtrados;
    }

}

