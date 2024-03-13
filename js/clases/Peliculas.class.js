export class Peliculas {

    constructor(codigo, nombre, categoria, genero, descripcion, publicado, destacada, img_portada, img_banner ,url_trailer){
        this.codigo;
        this.nombre;
        this.categoria;
        this.genero;
        this.descripcion;
        this.publicado;
        this.destacada;
        this.img_portada;
        this.img_banner;
        this.url_trailer;
    }

    mostrar(){
        console.log(this.codigo);
        console.log(this.nombre);
        console.log(this.categoria);
        console.log(this.genero);
        console.log(this.descripcion);
        console.log(this.publicado);
        console.log(this.destacada);
        console.log(this.img_portada);
        console.log(this.img_banner);
        console.log(this.url_trailer);
    }

}