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


// document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad} años`;