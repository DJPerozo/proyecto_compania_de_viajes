function nombreEmpresa(nombre) {
    var descripsion  
switch(nombre) {
    
    case 1:
    descripsion = "hola, bienvenido a la pagina wed de compañia flassx en que te podemos ayudar. "
    break;
    
    case 2:
        descripsion = "en nuestro sitio wed puedes encontrar todo lo relacionado con nuestros servisios:"
        break
}
return descripsion;
  }
console.log(nombreEmpresa(1).toUpperCase());


let ofrecemos = ["\n te ofrecemos los mejores viajes en el continente europeo. ".toUpperCase(), "\npaises como:".toUpperCase()]

for(var a = 0; a < ofrecemos.length; a++) {
console.log(ofrecemos[a]);
}

let variedadPaises = ["españa", "italia", "francia", "portugal"]

for(var b = 0; b < variedadPaises.length; b++) {
console.log(variedadPaises[b].toUpperCase());
}

function esperiensas(valor) {
var como 
switch(valor) {
    case 3:
        como = " vive la mejor experienza y comodidad con nosotros\n"
        break;
}
return como;
} 
console.log(esperiensas(3));

console.log(nombreEmpresa(2).toUpperCase());

let entrar = ["acceder a nuestro sitio wed:", "CLIP ENTER"]

for(entrar of entrar) {
console.log(entrar);
}
