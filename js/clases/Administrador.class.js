import { Persona } from './Persona.class.js';

export class Administrador extends Persona {
    constructor(nombre, apellido, sexo, id_usuario, email, password, telefono) {
        super(nombre, apellido, sexo);
        this.id_usuario = id_usuario;
        this.estado = false;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
    }
}
