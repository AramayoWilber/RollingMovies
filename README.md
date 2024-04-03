# JStream Movies

![](img/logoJStream_movies_100x100.png)

Integrantes

-   Aramayo, Wilber David
-   Franco, Lorenzo
-   Leila, Magali
-   Maximo, Garcia Toledo
-   Cristian, Tejada

## Estructura General del proyecto

![](img/estructura2.jpg)

![](img/estructura1.jpg)

## GitHub comado utiles

### GIT PULL - DESCARGA

-   DESCARGA COMPLETA REPOSITORIO

```
git clone url_repositorio

```

-   DESCARGAR ULTIMOS CAMBIOS

```
git pull origin ramaAdescargar

```

### GIT BRANCH - RAMAS

-   Ver ramas y ramas actual

```
git branch

```

-   Crear ramas

```
git branch nombreRamaNueva

```

-   Cambiar nombre de rama creada

```
git branch -m nombreActual nombreNuevo

```

-   Cambiar de rama

```
git checkout nombreRama

```

-   Eliminar rama

```
git branch -d nombreRama
(al momento de borrar "no  estar en la rama")

```

### GIT COMMIT - GUARDAR CAMBIOS LOCAL Y REMOTO

-   Ver estado de archivos modificados

```
git status

```

-   Agregar archivos modificados

```
git add .

```

-   Guardar en el repo LOCAL

```
git commit -m "mensaje"

```

-   Subir al repo remoto

```
git push -u origin nombreRama

```

-   PASOS

```
git status
git add .
git commit -m "mensaje"
git push -u origin nombreRama


```

### GIT MERGE - FUSIONAR RAMAS

-   1er colorarse en la rama donde se recibiran los nuevos cambios

```
git merge rama1 main (main recibe cambios de rama1)

```

-   Agregamos

```
git add .

```

-   Guardamos cambios

```
git commit -m "mensaje"

```

-   Subimos al rempo remoto

```
git push -u origin nombreRama

```

####Objetos usuarios

```Usuarios:
Usuario = {
	id_usuario;
	email;
	nombre;
	apellido;
	telefono;
	genero;
	password;
}

```

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)
