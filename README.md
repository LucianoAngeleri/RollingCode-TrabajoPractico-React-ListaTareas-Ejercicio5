# Trabajo Práctico de React
## Ejercicio 5 - Lista de Tareas (Parte 2)

Este proyecto es una aplicación web desarrollada en **React** que permite agregar, borrar y ver una lista de tareas que se almacenan en Local Storage.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Node.js
- npm

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```

## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abbre tu navegador web y ve a la dirección que aparece en la terminal, deberia ser algo como:
    ```
    http://localhost:5173/
    ```

## Funcionamiento de los componentes
### App.jsx

El componente `App` es el componente principal de la aplicación. Renderiza un encabezado con el título "Lista de Tareas" y luego muestra el componente `FormularioTarea` para agregar nuevas tareas. También incluye un footer.

### FormularioTarea.jsx

El componente `FormularioTarea` es responsable de manejar el formulario para agregar nuevas tareas. Guarda las tareas en el estado y en el almacenamiento Local Storage. Cuando se envía el formulario, la tarea se agrega a la lista de tareas y se borra el contenido del input.

### ListaTareas.jsx

El componente `ListaTareas` muestra la lista de tareas. Recibe la lista de tareas como prop y las muestra utilizando el componente `ItemTarea` para cada tarea.

### ItemTarea.jsx

El componente `ItemTarea` muestra una tarea individual de la lista. Cada tarea se muestra en un elemento de lista con un botón de "Borrar" para eliminar la tarea de la lista..
