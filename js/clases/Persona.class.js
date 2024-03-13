export class Persona {
    constructor(nombre, apellido, sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }

    mostrar(){
        console.log('Esta es una persona.')
    }
}