export class CatalogoDB {
    constructor() {
    }

    establecerConexion() {  //devuelve los datos de la tabla Peliculas, sino hay ninguna la crea
        let peliculasDB;

        const tablaPeliculas = JSON.parse(localStorage.getItem('peliculas'));

        if (tablaPeliculas) {
            peliculasDB = tablaPeliculas;

        } else {
            //en caso de no encontrar ninguna base de datos pelicula creamos una
            const nuevaPelicula = [
                {
                    codigo: 0,
                    nombre: 'Oppenheimer',
                    categoria: 'pelicula',
                    genero: 'drama',
                    descripcion: 'Durante la Segunda Guerra Mundial, el teniente general Leslie Groves designa al físico J. Robert Oppenheimer para un grupo de trabajo que está desarrollando el Proyecto Manhattan, cuyo objetivo consiste en fabricar la primera bomba atómica.',
                    publicado: false,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/Oppenheimer_portada.jpg',
                    img_banner: '/img/peliculas/banners/Oppenheimer_fondo.jpg',
                    url_trailer: 'https://youtu.be/yLYbOe914ZU?si=s86bPU_fgA0AjQi1'
                },
                {
                    codigo: 1,
                    nombre: 'Kung Fu Panda 4',
                    categoria: 'pelicula',
                    genero: 'animacion',
                    descripcion: 'Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en las artes marciales, Po, el Guerrero Dragón, es llamado por el destino para… tomarse un descanso. Específicamente, se le pide que se convierta en el líder espiritual del Valle de la Paz. Esto plantea un par de problemas obvios. En primer lugar, Po sabe tanto de liderazgo espiritual como de dieta paleo, y en segundo lugar, necesita encontrar y entrenar rápidamente a un nuevo Guerrero Dragón antes de poder asumir su nuevo y elevado cargo.',
                    publicado: true,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/kung_Fu_Panda_4_portada.jpg',
                    img_banner: '/img/peliculas/banners/kung_Fu_Panda_4_banner.jpg',
                    url_trailer: 'https://youtu.be/78jhetZy5Vk'

                },
                {
                    codigo: 2,
                    nombre: 'Shrek',
                    categoria: 'pelicula',
                    genero: 'comedia',
                    descripcion: 'Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto.',
                    publicado: true,
                    destacada: false,
                    img_portada: '/img/peliculas/portadas/Shrek_portada.jpg',
                    img_banner: '/img/peliculas/banners/Shrek_banner.jpg',
                    url_trailer: 'https://youtu.be/yLYbOe914ZU?si=s86bPU_fgA0AjQi1'

                },
                {
                    codigo: 3,
                    nombre: 'Titanic',
                    categoria: 'pelicula',
                    genero: 'drama',
                    descripcion: 'Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg.',
                    publicado: true,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/Titanic_portada.jpg',
                    img_banner: '/img/peliculas/banners/Titanic_banner.jpg',
                    url_trailer: 'https://youtu.be/F2RnxZnubCM?si=WLm3_j3Nb8oqkCM9'
                },
                {
                    codigo: 4,
                    nombre: 'Jurassic World: Fallen Kingdom',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Owen y Claire intentan salvar a los dinosaurios que quedan en la isla ante el peligro de erupción de un volcán. Allí se encuentran nuevas especies de dinosaurios gigantes mientras descubren una conspiración que amenaza la vida del planeta.',
                    publicado: true,
                    destacada: false,
                    img_portada: '/img/peliculas/portadas/Jurassic_World_portada.jpg',
                    img_banner: '/img/peliculas/banners/Jurassic_World_banner.jpg',
                    url_trailer: 'https://youtu.be/MOblcRRCSYU?si=j32BFXasOEIhwuJy'
                },
                {
                    codigo: 5,
                    nombre: 'Harry Potter',
                    categoria: 'pelicula',
                    genero: 'fantasia',
                    descripcion: 'Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.',
                    publicado: true,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/Harry_Potter_portada.jpg',
                    img_banner: '/img/peliculas/banners/Harry_Potter_banner.jpg',
                    url_trailer: 'https://youtu.be/ZgrCZVjPg9g?si=03uV6u5NgdIUPBM1'
                },
                {
                    codigo: 6,
                    nombre: 'Wonka',
                    categoria: 'pelicula',
                    genero: 'familiar',
                    descripcion: 'El noble y humilde Charlie desea obtener un ticket dorado para poder entrar a la fabulosa fábrica de chocolate del excéntrico Willy Wonka.',
                    publicado: false,
                    destacada: false,
                    img_portada: '/img/peliculas/portadas/Wonka_portada.jpg',
                    img_banner: '/img/peliculas/banners/Wonka_banner.jpg',
                    url_trailer: 'https://youtu.be/Fr1tOQIlUcw?si=XYnb3N8pKe02Vv9a'
                },
                {
                    codigo: 7,
                    nombre: 'Barbie',
                    categoria: 'pelicula',
                    genero: 'comedia',
                    descripcion: 'Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial total. O seas un Ken.',
                    publicado: true,
                    destacada: false,
                    img_portada: '/img/peliculas/portadas/Barbie_portada.jpg',
                    img_banner: '/img/peliculas/banners/Barbie_banner.jpg',
                    url_trailer: 'https://youtu.be/gH2mRECr6y4?si=7d-572X4UPVS2j_s'
                },
                {
                    codigo: 8,
                    nombre: 'Mujer Maravilla',
                    categoria: 'pelicula',
                    genero: 'aventura',
                    descripcion: 'Antes de convertirse en Wonder Woman, ella solía ser Diana, Princesa de las Amazonas, entrenada para ser una guerrera inconquistable.',
                    publicado: true,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/Wonder_portada.jpg',
                    img_banner: '/img/peliculas/banners/Wonder_banner.jpg',
                    url_trailer: 'https://youtu.be/eyt29sHDc9M?si=sgNurGDrV_77rzX6'
                },
                {
                    codigo: 9,
                    nombre: 'Avengers: Endgame',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Después de los eventos devastadores de "Avengers: Infinity War", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.',
                    publicado: false,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/Avengers_portada.jpg',
                    img_banner: '/img/peliculas/banners/Avengers_banner.jpg',
                    url_trailer: 'https://youtu.be/Oy_SER6dfK4?si=u_V0yzTd9tTJ8w58'
                },
                {
                    codigo: 10,
                    nombre: 'Super Mario Bros',
                    categoria: 'pelicula',
                    genero: 'infantil',
                    descripcion: 'Luigi, Princesa Peach, Toad, Donkey Kong, Bowser, ropas con poderes, y hasta carreras de karting: ¡es él, Mario!',
                    publicado: true,
                    destacada: false,
                    img_portada: '/img/peliculas/portadas/Mario_bros_portada.jpg',
                    img_banner: '/img/peliculas/banners/Mario_bros_banner.jpg',
                    url_trailer: 'https://youtu.be/SvJwEiy2Wok?si=Joeg13ffK98YSPUk'
                }
            ];

            localStorage.setItem('peliculas', JSON.stringify(nuevaPelicula));
            peliculasDB = JSON.parse(localStorage.getItem('peliculas'));
        }
        return peliculasDB;
    }

    obtenerCodigo() { //obtiene el siguiente codigo segun la base de datos de peliculas
        const datos = this.establecerConexion();
        const ultimoElemento = datos.length - 1;
        return datos[ultimoElemento].codigo + 1;
    }

    agregarContenido(objPelicula) {
        const nuevaPelicula = {
            codigo: objPelicula.codigo,
            nombre: objPelicula.nombre,
            categoria: objPelicula.categoria,
            genero: objPelicula.genero,
            descripcion: objPelicula.descripcion,
            publicado: objPelicula.publicado,
            destacada: objPelicula.destacada,
            img_portada: objPelicula.img_portada,
            img_banner: objPelicula.img_banner,
            url_trailer: objPelicula.url_trailer
        };
        let peliculasDB = this.establecerConexion();

        peliculasDB.push(nuevaPelicula);
        //Actualizo la nueva base de datos
        localStorage.setItem('peliculas', JSON.stringify(peliculasDB));
    }


    peliDestacada(id_pelicula) {
        const id = parseInt(id_pelicula);
        const catalogo = this.establecerConexion();
        let valor;

        catalogo.forEach(element => {
            if (element.codigo === id) {
                valor = element.destacada;
            }
        });

        return valor;
    }

    modificarDestacado(id_pelicula, boolean) {
        const id = parseInt(id_pelicula);
        const catalog = this.establecerConexion();

        catalog.forEach(element => {
            if (element.codigo === id) {
                element.destacada = boolean;
            }
        });
        // Actualizo base de datos 
        localStorage.setItem('peliculas', JSON.stringify(catalog));
    }



    peliPublicada(id_pelicula) {
        const id = parseInt(id_pelicula);
        const catalogo = this.establecerConexion();
        let valor;

        catalogo.forEach(element => {
            if (element.codigo === id) {
                valor = element.publicado;
            }
        });

        return valor;
    }

    modificarPublicada(id_pelicula, boolean) {
        const id = parseInt(id_pelicula);
        const catalog = this.establecerConexion();

        catalog.forEach(element => {
            if (element.codigo === id) {
                element.publicado = boolean;
            }
        });
        // Actualizo base de datos 
        localStorage.setItem('peliculas', JSON.stringify(catalog));
    }


    eliminarRegistro(id_pelicula) {
        const id = parseInt(id_pelicula);
        const catalogo = this.establecerConexion();
        const productoFiltrados = catalogo.filter(item => item.codigo !== id);
        // Actualizo base de datos
        localStorage.setItem('peliculas', JSON.stringify(productoFiltrados));
    }


}
