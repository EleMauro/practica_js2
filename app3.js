let edad = prompt("ingresa tu edad");
console.log(edad);
if(edad === "" || edad === null || isNaN(edad)){
alert("ingresa un valor valido");
} else{
    edad = parseInt(edad);
    console.log(`tienes ${edad} años`);
}

