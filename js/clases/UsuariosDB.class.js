export class UsuariosDB {

    constructor(){     
    }

    establecerConexion(){
        let usuariosDB;

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));

        if (usuarios) {
            usuariosDB = usuarios;
    
        } else {
            const nuevoUsuario = [
                {id: 0, email: 'correo@correo.com', password: 'abc1234', apellido: 'last name', nombre: 'name', telefono: '123456789', sexo: 'otro'}   ];

            localStorage.setItem('usuarios', JSON.stringify(nuevoUsuario));
            usuariosDB =JSON.parse(localStorage.getItem('usuarios'));
        }

        return usuariosDB;
    }


    obtenerId(){
        let datos = this.establecerConexion();
        let ultimoElemento = datos.length - 1;
        return datos[ultimoElemento].id + 1;
    }



    agregarUsuario(objUsuario){

        const usuario = {
            id: objUsuario.id_usuario,
            email: objUsuario.email,
            password: objUsuario.password,
            apellido: objUsuario.apellido,
            nombre: objUsuario.nombre,
            telefono: objUsuario.telefono,
            sexo: objUsuario.sexo
        };
        //obtengo Based de Datos del localStorage
        let usuariosDB = this.establecerConexion();
        //agrego nuevo usuario en la variable local
        usuariosDB.push(usuario);
        //Actualizo la nueva base de datos
        localStorage.setItem('usuarios', JSON.stringify(usuariosDB));
        console.log("Nuevo usuario cargado.... OK");
    }


    verificarCorreoValido(correo){
        let usuariosDB = JSON.parse(localStorage.getItem("usuarios"));
        let usuarioEncontrado = false;

        usuariosDB.forEach(usuario => {
            if(correo === usuario.email){
                usuarioEncontrado = true;
            }
        });

        return usuarioEncontrado;
    }


    validarLogin(email, password){
        let valido = false;

        const usuarios = this.establecerConexion();

        usuarios.forEach(usuario => {
            if(email === usuario.email && password === usuario.password){
                valido = true;
            }
        });

        return valido;
    }

}

