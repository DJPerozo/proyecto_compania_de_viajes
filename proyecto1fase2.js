function bienvenida(valor) {
     var a
    switch(valor) {
 case 1:
a = "binevedo a nuestro sitio wed en que podemos ayudarte"
    }
    return a;
}
console.log(bienvenida(1).toUpperCase());

var b = 19;
if(b == 5) {
    console.log("ofrecemos los mejores viajes ")
}else {
    console.log("te ofresemos la mejor esperienza en cada viaje ")
 }
 var z = 20;
 if(z > 10) {
    console.log("hechale un vistazo a nuestros paquete: ")
 }

 let vuelos = [  "españa", "italia", "francia", "portugal"]

 for(var destino = 0; destino < vuelos.length; destino++ ) {
console.log("nuestro paquete " + " " + destino  )
 console.log(vuelos[destino])
console.log("CLIP ENTER")
    
}
function verPaquete(valor) {
    var respuesta
    switch(valor) {
        case 1:
            respuesta = " as CLIP para accede al paiz que quieras viajar "
    }
    return respuesta;
}
console.log(verPaquete(1).toUpperCase());
