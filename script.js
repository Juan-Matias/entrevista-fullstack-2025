// script.js

/*
    INTRUCCIONES
    - __Input__ de texto con placeholder "Creado en código"
    - __Anchor__ que abra una página de google en una nueva pestaña y tenga el texto "Un enlace"
    - __Button__ que al presionarlo escriba "hola, mundo!" en el div output. Debe tener el texto de "Escribir"
    - __Paragraph__ con el texto "Texto creado en código"

    ESTILO
    El div container-elementos debe mostrar su contenido en 2 columnas en todos los tamaños de dispositivo
    Los divs input-y-boton, container-elementos y output no deben ser modificados

*/

// CONSTANTES
const inputBtn = document.getElementById('input-y-boton');
const container = document.getElementById('container-elementos');
const output = document.getElementById('output');

// Creacion de input de texto
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Escribe un tipo de elemento';

// Creacion de botón
const boton = document.createElement('button');
boton.textContent = 'Crear elemento';

// Agregar el input y el botón
inputBtn.appendChild(input);
inputBtn.appendChild(boton);

// Método para Agregar Evento
boton.addEventListener('click', () => {
    const value = input.value.toLowerCase().trim();
    let elemento;

    if (value === 'input') {
        //- __Input__ de texto con placeholder "Creado en código"
        elemento = document.createElement('input');
        elemento.type = 'text';
        elemento.placeholder = 'Creado en código';

    } else if (value === 'anchor') {
        // Anchor
        // Que abra una página de google en una nueva pestaña y tenga el texto "Un enlace"
        elemento = document.createElement('a');
        elemento.href = 'https://www.google.com';
        elemento.target = '_blank';
        elemento.textContent = 'Un enlace';

    } else if (value === 'button') {
        // Button
        // Que al presionarlo escriba "hola, mundo!" en el div output. Debe tener el texto de "Escribir"
        elemento = document.createElement('button');
        elemento.textContent = 'Escribir';
        elemento.addEventListener('click', () => {
            output.textContent = 'hola, mundo!';
        });

    } else if (value === 'paragraph') {
        // Paragraph
        // Con el texto "Texto creado en código"
        elemento = document.createElement('p');
        elemento.textContent = 'Texto creado en código';

    } else {
        // Por descarte 
        elemento = document.createElement('p');
        elemento.textContent = 'Texto creado en código';
    }

    // Agregar el elemento creado al contenedor
    container.appendChild(elemento);
});
