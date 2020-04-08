// let nombre=prompt('Cual es tu nombre');
// let edad=prompt('Cual es tu edad');

// confirm('deseas agregar tu nombre y edad');
//mensajes por consola
console.log('todo bien');
console.table([1,2,3]);
console.error('algo salio mal');
console.warn('ufff');
console.time('uno');
console.error('algo salio mal');
console.error('algo salio mal');
console.timeEnd('uno');
//tipos de variable
 var nombre='mat';
 var nombre='mat';//no genera error por existir 2 variables con el mismo nombre
 console.log(nombre);
 let product='libro';
 const appp='uno';//este tipo de variable no puede cambiar su valor mas adelante
 //let product='libro';//genera error ya que existen 2 variables con el mismo nombre
 console.log(product);
 let dos,tres;
//concatenar
 dos='uno'+'dos';
 console.log(dos);
 console.log(`${nombre} ${dos}`);

 //metodos
 console.log(nombre.length);
 console.log(nombre.concat(' ','es genial!'));
 console.log(nombre.toUpperCase());
 console.log(nombre.toLocaleLowerCase());
 let mensaje="aprendiendo javaScript css";
 console.log(mensaje.indexOf('javaScript'));
 console.log(mensaje.substring(3,11));
 console.log(mensaje.slice(0,11));
 console.log(mensaje.split(' '));
 console.log(mensaje.replace('css','php'));
 console.log(mensaje.includes('php'));
 console.log(mensaje.repeat(10) );

 //matematicas
 let result =Math.PI;
 result=Math.round(2.4);
 result=Math.ceil(2.4);
 result=Math.floor(2.4);
 result=Math.sqrt(144);
 result=Math.abs(-3);
 result=Math.pow(8,3);
 result=Math.min(3,6,5,1,8,9);
 result=Math.max(2,5,4,9,1);
 result=Math.random();

 console.log(result);
//tipos de datos
 let prueba,prueba1,prueba2;

 prueba='mat';
 prueba=55;
 prueba=true;
 prueba=null;
 prueba=Symbol('sss');
 prueba=[1,1,1,1];
 prueba={
     nombre:'mat',
     edad:28
 }
 prueba=new Date();

 console.log(typeof prueba);

 //operadores de comparacion
prueba=10;
prueba2=20.434234234;
prueba1='10';

console.log(prueba>prueba2);
console.log(prueba==prueba1);
console.log(prueba===prueba1);
console.log('uno'==' uno');
console.log('a'>'b');
console.log('z'>'b');
console.log(null==undefined);
console.log(null===undefined);
console.log(prueba+prueba1);
console.log(prueba-prueba1);
console.log(typeof parseInt(prueba1));
prueba1=Number("10");
console.log(prueba2.toFixed(2));
let hh;
hh=123456;
hh=String(hh);
console.log(hh.length);
const prod='pizza',
      precio=999,
      prod2='bebida',
      precio1=100;  
let html;

html='<ul>'+
     '<li>Orden: '+ prod + '</li>'+
     '<li>Precio: '+ precio + '</li>'+  
     '<li>Orden: '+ prod2 + '</li>'+
     '<li>Precio: '+ precio1 + '</li>';

html=`
        <ul>
            <li>Orden: ${prod} </li>
            <li>Precio: ${precio} </li>
            <li>Orden: ${prod2} </li>
            <li>Precio: ${precio1} </li>
            <li>Total: ${total(precio,precio1)} </li>`;  

function total(precio,precio1){
    return precio + precio1;
}
document.getElementById('app').innerHTML=html;

//arreglos

const numeros=[9,2,3,4,1,7,0];
console.log(numeros);

const meses=new Array('enero','febrero','marzo');
console.log(meses.length);
console.log(Array.isArray(meses));
console.log(meses[1]);
meses.push('abril');
meses.unshift('inicio');
console.log(meses[0]);
console.log(meses.indexOf('abril'));
meses.pop();
meses.shift();
meses.splice(2,1);
meses.reverse();
console.log(meses.concat(numeros));
const autos=new Array('bmw','audi','nissan');
autos.sort();
console.log(autos);
numeros.sort(function(x,y){
    return x-y;
});
console.log(numeros);

//objeto
const persona={
    nombre: 'mat',
    apellido: 'sal',
    edad: 28,
    musica: ['rap','trap','rock'],
    hogar: {
        ciudad: 'santiago',
        pais: 'chile'
    },
    fechaCumple: function(){
        return new Date().getFullYear()-this.edad;
    }
};
persona.musica.push('house');
console.log(persona.hogar.pais);
console.log(persona.fechaCumple());

console.log(persona);

//arreglo de objetos

const auto=[
    {modelo: 'bmw',motor:'m10'},
    {modelo: 'nissan',motor:'beams'},
    {modelo: 'volks', motor:'vr6'},
];

for(let i=0;i<auto.length;i++){
    console.log(auto[i].modelo);
    console.log(`${auto[i].modelo} ${auto[i].motor} `);
}
console.log(auto);

//funciones

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar('mat');

function sumar(a,b){
    return a+b;
}
let s;
s=sumar(1,7);
console.log(s);

function cat(n){
    if(typeof n==='undefined'){
        n='visitante';
    }
    return `hola ${n}`;
}
s=cat();
console.log(s);

function cat2(n = 'visitante'){
    return `hola ${n}`;
}

s=cat2('mat');
console.log(s);

const x=function(a,b){
    return a+b;
}
 console.log(x(5,9));

const z=function(nombre='nn', edad=99, trabajo='full stack'){
    return `hola ${nombre}, edad ${edad} y trabajas como ${trabajo}`;
} 
console.log(z('mat'));

//function IIFE

(function(tec){
    console.log(`aprendiendo ${tec}`);
})('javaScript');

//metodos de propiedad
//cuando una funcion se pone dentro de un objeto
const musica={
    reproducir: function(id){
        console.log(`Reproduccion Musica ${id}`);
    },
    pusar: function(){
        console.log(`pause a la  musica`);
    }
}
musica.borrar=function(id){
    console.log(`borrando cancion ${id}`);
}
musica.reproducir(30);
musica.pusar();
musica.borrar(15);

function client(){
    console.log(`descargando...`);
    setTimeout(function(){
        console.log(`completado`);
    },3000)
}
client();
//funcion que no existe
try{
    algo();
} catch(error){
    console.log(error);
}
finally{
    console.log('no le importa, ejecurta de todos modos');
}

// date

const dia=new Date();

console.log(dia);

let navidad=new Date('12-25-1991');

console.log(navidad);

let val;
val=dia.getMonth();

console.log(val);

val=dia.getDate();
console.log(val);
val=dia.getDay();
console.log(val);
val=dia.getFullYear();
console.log(val);
val=dia.getMinutes();
console.log(val);
val=dia.getTime();
console.log(val);
val=dia.setFullYear(2000);
val=dia.getFullYear();
console.log(val);

//if elseif

const d=15;

if(d>18){
    console.log(`puedes entrar`);
}
else{
    console.log(`no puedes entrar`);
}

let punt;

if(punt){
    console.log(`el puntaje es de ${punt}`);
}
else{
    console.log(`no hay puntaje`);
}

if(d<=10){
    console.log(`buenos dias`);
}
else if(d<=18){
    console.log(`Buenas tardes`);
}
else{
    console.log(`buenas noches`);
}

punt=100;

if(punt<150){
    console.log('uno');
}
else if(punt<200){
    console.log('dos');
}

//ternario

const log=true;

console.log( log===true ? 'logueado':'no logueado');

//switch
const met='efectivo';

switch(met){
    case 'efectivo':
        console.log(`pagado con ${met}`);
    break;
    case 'cheque':
        console.log(`pagado con ${met}`);    
    break;
    default:
        console.log(`no soportado`);
    break;    
}
let mese;
switch(new Date().getMonth()){
    case 0:
        mese='enero';
    break;
    case 1:
        mese='febrero';
    break;  
    case 2:
        mese='marzo';
    break;
    case 3:
        mese='abril';
    break;      
}

console.log(`mes ${mese}`);

//for loops

for(let i = 0;i <10;i++){
    console.log(`numero: ${i}`);
}

i=0;
while(i<10){
    if(i==5){
        console.log('cinco');
        i++;
        continue;
    }
    console.log(`numero: ${i}`);
    i++;
}
i=12;

do{
    console.log(`${i}`);
    i++;
}while(i<10);

const gg=['uno','dos','tres'];

gg.forEach(function(g, index){
    console.log(`${index}:| ${g}`);
});

const mati=[
    {id:1,producto:'libro'},
    {id:2,producto:'revista'},
    {id:3,producto:'papel'}
];

const pp=mati.map(function(mati){
    return mati.producto;
});
console.log(pp);

const car={
    modelo: '318',
    motor: 'm10',
    anio: 1987,
    marca: 'bmw'
};

for( let cars in car){
    console.log(`${cars}:${car[cars]}`);
}

const ciudades=['stgo','conce','arica'];
const ordenes=new Set([123,321,456]);
const data=new Map();
data.set('nombre','juan');
data.set('profesion','desarrollador');

console.log(ciudades);
console.log(ordenes);
console.log(data);
//entries iterador

for(let entrada of ciudades.entries()){
    console.log(entrada);
}
for(let entrada of ordenes.entries()){
    console.log(entrada);
}
for(let entrada of data.entries()){
    console.log(entrada);
}

//values iterador dafault

for(let entrada of ciudades){
    console.log(entrada);
}
for(let entrada of ordenes){
    console.log(entrada);
}
for(let entrada of data.values()){
    console.log(entrada);
}
// for(let entrada of data){
//     console.log(entrada);
// }default

//keys iterador

for(let entrada of ciudades.keys()){
    console.log(entrada);
}
for(let entrada of ordenes.keys()){
    console.log(entrada);
}
for(let entrada of data.keys()){
    console.log(entrada);
}

const mesag='aprendiendo';

for(let letra of mesag){
    console.log(letra);
}

const enlace=document.getElementsByTagName('a');
for(let enla of enlace){
    console.log(enla.href);
}

//windows object

// if(confirm('eliminar?')){
//     console.log('eliminado');
// }
// else{
//     console.log('nada paso');
// }

let alto, ancho,ubicacion;

alto=window.outerHeight;
ancho=window.outerWidth;
console.log(alto);
console.log(ancho);

ubicacion=window.location;

//window.history.go(-2) vuelve a la busqueda anterior en el navegador

console.log(ubicacion);

ubicacion=window.navigator;
console.log(ubicacion);

//scope

var a='a';
let b='b';
const c='c';

function scope(){
    var a='A';
    let b='B';
    const c='C';
    console.log('funcion:'+a,b,c);
}
scope();

if(true){
    var a='AA';
    let b='BB';
    const c='CC';
    console.log('funcion 2:'+a,b,c);
}

console.log('global:'+a,b,c);











// document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad} años`;