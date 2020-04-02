let nombre=prompt('Cual es tu nombre');
let edad=prompt('Cual es tu edad');

confirm('deseas agregar tu nombre y edad');
console.log('todo bien');
document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad} años`;