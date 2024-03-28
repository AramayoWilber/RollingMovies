export class Pelicula {

    constructor(codigo, nombre, categoria, genero, descripcion, publicado, destacada, img_logo, img_portada, img_banner, url_trailer) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.genero = genero;
        this.descripcion = descripcion;
        this.publicado = publicado;
        this.destacada = destacada;
        this.img_logo = img_logo;
        this.img_portada = img_portada;
        this.img_banner = img_banner;
        this.url_trailer = url_trailer;
    }

    mostrar() {
    }

}