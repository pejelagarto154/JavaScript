// Eliminar de Local Storage
localStorage.clear();

let elemento;

elemento=document;
elemento=document.all[10];
elemento=document.head;
elemento=document.body;
elemento=document.domain;
elemento=document.URL;
elemento=document.characterSet;
elemento=document.forms;
elemento=document.forms[0];
elemento=document.forms[0].classList;
elemento=document.forms[0].classList[0];
elemento=document.images;
elemento=document.images[2];
elemento=document.images[2].src;
elemento=document.images[2].getAttribute('src');

elemento=document.scripts;
elemento=document.images;

let imagenes=document.images;
let imagenesArr=Array.from(imagenes);
imagenesArr.forEach(function(imagen){
    console.log(imagen);
})
console.log(imagenesArr);