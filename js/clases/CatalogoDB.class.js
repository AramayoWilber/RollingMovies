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
                    img_portada: '/https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg',
                    url_trailer: 'https://www.youtube.com/embed/yLYbOe914ZU?si=jVsUrKj7FUtGCFW3'
                },
                {
                    codigo: 1,
                    nombre: 'Kung Fu Panda 4',
                    categoria: 'pelicula',
                    genero: 'animacion',
                    descripcion: 'Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en las artes marciales, Po, el Guerrero Dragón, es llamado por el destino para… tomarse un descanso. Específicamente, se le pide que se convierta en el líder espiritual del Valle de la Paz. Esto plantea un par de problemas obvios. En primer lugar, Po sabe tanto de liderazgo espiritual como de dieta paleo, y en segundo lugar, necesita encontrar y entrenar rápidamente a un nuevo Guerrero Dragón antes de poder asumir su nuevo y elevado cargo.',
                    publicado: true,
                    destacada: true,
                    img_portada: 'https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/3CZkoreoWflCGmpXLm7CTX1vBrT.jpg',
                    url_trailer: 'https://www.youtube.com/embed/78jhetZy5Vk?si=7L25_jSpUYvsLlVj'

                },
                {
                    codigo: 2,
                    nombre: 'Shrek',
                    categoria: 'pelicula',
                    genero: 'comedia',
                    descripcion: 'Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/c0cqEKcvx6a9Hx0i9H1WjHOy51k.jpg',
                    url_trailer: 'https://www.youtube.com/embed/EPF_xTWbUs0?si=Ft1ZZTNgxLGNgxWn'

                },
                {
                    codigo: 3,
                    nombre: 'Titanic',
                    categoria: 'pelicula',
                    genero: 'drama',
                    descripcion: 'Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg.',
                    publicado: true,
                    destacada: true,
                    img_portada: 'https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/4eylxg940ocgdkHjab2Tm8jv2hb.jpg',
                    url_trailer: 'https://www.youtube.com/embed/F2RnxZnubCM?si=WCG0t6qfRmmfnhGn'
                },
                {
                    codigo: 4,
                    nombre: 'Jurassic World: Fallen Kingdom',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Owen y Claire intentan salvar a los dinosaurios que quedan en la isla ante el peligro de erupción de un volcán. Allí se encuentran nuevas especies de dinosaurios gigantes mientras descubren una conspiración que amenaza la vida del planeta.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/7dAh80ydoWvUaBE8uFYkp9WsoSC.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg',
                    url_trailer: 'https://www.youtube.com/embed/MOblcRRCSYU?si=_OSnRDWbNNyOruYx'
                },
                {
                    codigo: 5,
                    nombre: 'Harry Potter: y la piedra filosofal',
                    categoria: 'pelicula',
                    genero: 'fantasia',
                    descripcion: 'Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.',
                    publicado: true,
                    destacada: true,
                    img_portada: 'https://image.tmdb.org/t/p/original/jltsWuPiQhXK8bDdQubUU8xb7UY.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/t3LicFpYHeYpwqm7L5wDpd22hL5.jpg',
                    url_trailer: 'https://www.youtube.com/embed/ZgrCZVjPg9g?si=LtRLAd_EMf9Fmawu'
                },
                {
                    codigo: 6,
                    nombre: 'Wonka',
                    categoria: 'pelicula',
                    genero: 'familiar',
                    descripcion: 'El noble y humilde Charlie desea obtener un ticket dorado para poder entrar a la fabulosa fábrica de chocolate del excéntrico Willy Wonka.',
                    publicado: false,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/cDkMUi0i85qgjlRqq92k2yzRHA2.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/yyFc8Iclt2jxPmLztbP617xXllT.jpg',
                    url_trailer: 'https://www.youtube.com/embed/Fr1tOQIlUcw?si=jkFP6QeDCe1iqzTq'
                },
                {
                    codigo: 7,
                    nombre: 'Barbie',
                    categoria: 'pelicula',
                    genero: 'comedia',
                    descripcion: 'Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial total. O seas un Ken.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/8qQmKfcowF34ZLKilPGJGsNd4FW.jpg',
                    url_trailer: 'https://www.youtube.com/embed/gH2mRECr6y4?si=4lXjktRHk8ox2tLc'
                },
                {
                    codigo: 8,
                    nombre: 'Mujer Maravilla',
                    categoria: 'pelicula',
                    genero: 'aventura',
                    descripcion: 'Antes de convertirse en Wonder Woman, ella solía ser Diana, Princesa de las Amazonas, entrenada para ser una guerrera inconquistable.',
                    publicado: true,
                    destacada: true,
                    img_portada: 'https://image.tmdb.org/t/p/original/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/mcmqAqJtM8OXdNQfAdpfQNB6Fo6.jpg',
                    url_trailer: 'https://www.youtube.com/embed/eyt29sHDc9M?si=RbVyehYayn2gPvUq'
                },
                {
                    codigo: 9,
                    nombre: 'Avengers: Endgame',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Después de los eventos devastadores de "Avengers: Infinity War", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.',
                    publicado: false,
                    destacada: true,
                    img_portada: 'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/vfCYyWwujI5EE160GhKJx80cZ4f.jpg',
                    url_trailer: 'https://www.youtube.com/embed/Oy_SER6dfK4?si=zzgEaekSg3HLpQo2'
                },
                {
                    codigo: 10,
                    nombre: 'Super Mario Bros',
                    categoria: 'pelicula',
                    genero: 'infantil',
                    descripcion: 'Luigi, Princesa Peach, Toad, Donkey Kong, Bowser, ropas con poderes, y hasta carreras de karting: ¡es él, Mario!',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/nNVvqKiIFUoSTjP9rZp812uV93u.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/thcPZNTWOR0SIpHKqof4Jgokkp6.jpg',
                    url_trailer: 'https://www.youtube.com/embed/SvJwEiy2Wok?si=pPNy3vGG-QTD05br'
                },
                {
                    codigo: 10,
                    nombre: 'Damsel',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Una joven acepta casarse con un apuesto príncipe, pero descubre que todo es una trampa. Es arrojada a una cueva con un dragón que escupe fuego y debe confiar únicamente en su ingenio y voluntad para sobrevivir.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/lJTlq4rjRa9vmMuRGvgfYB5q6hU.jpg',
                    url_trailer: 'https://www.youtube.com/embed/dK90jfoEl0k?si=0BhzYyVezCh9BDxx'
                },
                {
                    codigo: 11,
                    nombre: 'Aquaman y el reino perdido',
                    categoria: 'pelicula',
                    genero: 'aventura',
                    descripcion: 'Arthur se ve obligado a sacar de prisión a su hermanastro, Orm, para que lo ayude a detener a Kane, quien ha atacado Atlantis tras encontrar un tridente negro que lo posee y le da la fuerza para vengar la muerte de su padre.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/oEyIhY1WzoFHUDE7U3p1AWwyoSN.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/iXOOGQrR2aVGJ2oSbJtOvnPWMb5.jpg',
                    url_trailer: 'https://www.youtube.com/embed/VpRfvwnq8b0?si=E0XYSNzuFytADw2s'
                },
                {
                    codigo: 12,
                    nombre: 'Rápidos y furiosos X',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Dom Toretto y sus familias se enfrentan al peor enemigo imaginable, uno llegado desde el pasado con sed de venganza, dispuesto a cualquier cosa con tal de destruir todo aquello que Dom ama.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/aAngiE34BMFDTOXpjc04Lr8zsX1.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/iAFO26JzdXNE20xkpl2fJBQr5Jy.jpg',
                    url_trailer: 'https://www.youtube.com/embed/cgHFwv1uMWE?si=AEHPpV2l1jhyXMGL'
                },
                {
                    codigo: 13,
                    nombre: 'Avatar: The Way of Water',
                    categoria: 'pelicula',
                    genero: 'aventura',
                    descripcion: "Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos.Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
                    url_trailer: 'https://www.youtube.com/embed/u0hxjdWG84k?si=LBB6jytMWlvqma3l'
                },
                {
                    codigo: 14,
                    nombre: 'Spider-Man: A través del Spider-Verso',
                    categoria: 'pelicula',
                    genero: 'animacion',
                    descripcion: 'Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
                    url_trailer: 'https://www.youtube.com/embed/rVLFOx7AQp0?si=LSw_YJu4-btHxI15'
                },
                {
                    codigo: 15,
                    nombre: 'Gato con botas: el último deseo',
                    categoria: 'pelicula',
                    genero: 'aventura',
                    descripcion: 'El Gato con Botas descubre que, debido a su pasión por la aventura, ha gastado ya 8 de sus 9 vidas. Por tanto, emprende un peligroso viaje en busca del legendario Último Deseo para solicitar que le restauren las vidas que ya perdió.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg',
                    url_trailer: 'https://www.youtube.com/embed/QaiUm8jNiCk?si=iaikTW_Btt8V0tKR'
                },
                {
                    codigo: 16,
                    nombre: 'Intensa-Mente',
                    categoria: 'pelicula',
                    genero: 'fantasia',
                    descripcion: 'Riley acaba de nacer y en el centro de control de su pequeña mente sólo hay sitio para Alegría. Poco después aparece Tristeza y, más tarde, Ira, Miedo y Asco. Las cinco emociones tendrán que ayudar a la niña cuando, ya con 11 años, su familia se mude desde su idílico pueblo del Medio Oeste estadounidense a la enorme e intimidante ciudad de San Francisco. Tras una serie de acontecimientos, Alegría y Tristeza tendrán que trabajar juntas para salvar a Riley.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/xeqXXTE1Cd3qNaAEOT6qbhhCsgJ.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/7gEfOcnoP2wAgtd7FYPsJopvJZ1.jpg',
                    url_trailer: 'https://www.youtube.com/embed/h1zWcdpH62g?si=fpoZYJt7NTps9uXH'
                },
                {
                    codigo: 17,
                    nombre: 'Batman - El Murciélago y el Gato',
                    categoria: 'pelicula',
                    genero: 'crimen',
                    descripcion: 'En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como "el Acertijo".',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/e66tM5YOawXLxhDAfWkR7sxpb3h.jpg',
                    url_trailer: 'https://www.youtube.com/embed/cFZbgCGI9P0?si=o8Gk1EGBaew4z3Yc'
                },
                {
                    codigo: 18,
                    nombre: 'Deadpool 2',
                    categoria: 'pelicula',
                    genero: 'accion',
                    descripcion: 'Deadpool trabaja ahora a escala internacional, eliminando a asesinos de masas, gánsteres, traficantes de personas y demás indeseables. Se creen intocables, pero Deadpool sabe cómo deshacerse de ellos de la forma más complicada, desmedida y sangrienta posible.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
                    url_trailer: 'https://www.youtube.com/embed/4i6ZePa8jz4?si=waHTAFacRFqX3b7A'
                },
                {
                    codigo: 19,
                    nombre: 'Yo antes de ti',
                    categoria: 'pelicula',
                    genero: 'romance',
                    descripcion: 'Louisa una chica inestable y creativa, reside en un pequeño pueblo de la campiña inglesa. Vive sin rumbo y va de un trabajo a otro para ayudar a su familia a llegar a fin de mes. Sin embargo, un nuevo trabajo pondrá a prueba su habitual alegría. En el castillo local, se ocupa de cuidar y acompañar a Will Traynor, un joven y rico banquero que se quedó paralítico tras un accidente.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/3WK7p9EdZmmvB1IbB2Vw9Rf4lXH.jpg',
                    url_trailer: 'https://www.youtube.com/embed/FRrc2X4Uzm4?si=ZCsI_ZfyDnGXVhye'
                },
                {
                    codigo: 20,
                    nombre: 'Coraline y la puerta secreta',
                    categoria: 'pelicula',
                    genero: 'fantasia',
                    descripcion: 'Una niña descubre una puerta secreta en su nueva casa y entra a una realidad alterna que la refleja fielmente de muchas formas.',
                    publicado: true,
                    destacada: false,
                    img_portada: 'https://image.tmdb.org/t/p/original/4jeFXQYytChdZYE9JYO7Un87IlW.jpg',
                    img_banner: 'https://image.tmdb.org/t/p/original/rRpAZOPY3XxMJY65AJ396IWyjU4.jpg',
                    url_trailer: 'https://www.youtube.com/embed/fvT7W5LHxF4?si=pnJ1iRK_1--gbuqz'
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

    editatElementoDelCatalogo(id_pelicula, objPelicula) {
        const id = parseInt(id_pelicula);
        const catalogo = this.establecerConexion();
        catalogo.forEach(elemet => {
            if (elemet.codigo === id) {
                elemet.codigo = objPelicula.codigo
                elemet.nombre = objPelicula.nombre
                elemet.categoria = objPelicula.categoria
                elemet.genero = objPelicula.genero
                elemet.descripcion = objPelicula.descripcion
                elemet.publicado = objPelicula.publicado
                elemet.destacada = objPelicula.destacada
                elemet.img_portada = objPelicula.img_portada
                elemet.img_banner = objPelicula.img_banner
                elemet.url_trailer = objPelicula.url_trailer
            }
        })
        localStorage.setItem('peliculas', JSON.stringify(catalogo));
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

    filtrarTitulo(titulo) {
        const catalogo = this.establecerConexion();
        const catalogo_filtrado = catalogo.filter(element => {
            return element.nombre.toLowerCase().indexOf(titulo) > -1
        })
        return catalogo_filtrado;
    }
}
