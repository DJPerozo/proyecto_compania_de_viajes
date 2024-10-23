function nombreEmpresa(nombre) {
        var descripsion  
    switch(nombre) {
        
        case 1:
        descripsion = "hola, bienvenido a la pagina wed de compañia flassx en que te podemos ayudar. "
        break;
        
        case 2:
            descripsion = "en nuentro sitio wed puedes encontrar todo lo relacionado con nuestros servisios:"
            break
    }
    return descripsion;
      }
  console.log(nombreEmpresa(1).toUpperCase());

let ofrecemos = ["te ofrecemos los mejores viajes en el continente europeo. ", "paises como:"]

for(var a = 0; a < ofrecemos.length; a++) {
    console.log(ofrecemos[a]);
}

let variedadPaises = ["españa", "italia", "francia", "portugal"]

for(var b = 0; b < variedadPaises.length; b++) {
    console.log(variedadPaises[b].toUpperCase());
}

function esperiensas(num) {
    var como = 5
    if(como == num) { 
        console.log("vive la mejor experienza y comodidad con nosotros ")
   }else {
    console.log("vive tu esperienza al maximo")
   }
} 
    
 console.log(esperiensas(5))
 console.log(nombreEmpresa(2).toUpperCase());

let entrar = ["accede a nuestro sitio wed:", "CLIP ENTER"]

for(entrar of entrar) {
    console.log(entrar);
}


