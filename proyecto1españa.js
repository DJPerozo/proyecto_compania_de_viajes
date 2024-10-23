function españa(valor) {
    var respuesta
    switch(valor) {
        case "destino":
         respuesta = " españa"
         break;ç
         case "paiz":
            respuesta = "pais:"
    }
    return respuesta;
}
console.log(españa("destino").toUpperCase());
console.log(españa("paiz"))


var a = 0;

if(a == 5) {
    console.log("conociendo")
} else {
    console.log("España, país de la península ibérica de Europa, incluye 17 regiones autónomas \n con diversas características geográficas y culturales.  En Madrid, su capital, \n se encuentra el Palacio Real y el Museo del Prado, que alberga obras de maestros europeos")
}
function descripsion(valor) {
    var  descri 
    switch(valor){
        case 1:
            descri = "España se sitúa principalmente en el suroeste de Europa,  si bien también tiene presencia \n en el norte de África.  En Europa, ocupa la mayor parte de la península \n ibérica, conocida como España peninsular, y las islas Baleares (en el mar Mediterráneo)."
    }
    return descri
}
console.log(descripsion(1));

function lugares() {
    return " \n hechale un vistaso a los lugares que conoseras en nuestro recorrido por españa:"
}
console.log(lugares().toUpperCase());

let visitaremos = [
  "  El Cabo de Gata en Almería.  ",
  " Barcelona, la ciudad de las mil caras. ",
  "Madrid, una capital llena de vida.  ",
  " oledo, de capital del imperio a ciudad espectacular.  ",
  " San Sebastián, la perla del País. " 

]

for(var z = 0; z < visitaremos.length; z++) {
        console.log(" \n el " + z + " " + "dia recorreremos:")
       console.log(visitaremos[z].toUpperCase())
       console.log("una experencia sin igual al lado de tus seres queridos")
       var vivir = visitaremos[z]
    
}
    
function duracion(asignar) {
     var  duraras
     switch(asignar) {
        case "dias":
        duraras = "\n 5 dias de experencias sin igual en uno de los paises mas hermosos del mundo "
        break;
        case "seres":
            duraras = "recuerdos inolvidables viviras en tu experienza en españa"
    
    }
    return duraras;
}
console.log(duracion("dias").toUpperCase());
console.log(duracion("seres").toUpperCase());


var x = 0;

if(x == 0) {
    console.log(" \n habitacion valida para 6 pesronas")
}

function precio(pre) {
    var v = 5;
    switch(pre) {
        case "precio":
            v = "1200 dolares americanos"
    }
    return "nuestro paquete familiar de 6 persona tiene un valor de " + v
    
}
console.log(precio("precio"))

function fecha(valor) {
    return "\n el viaje sadra para la fecha" + " " + valor
}
console.log(fecha(new Date()))


function comprar(compra) {
    var d
    switch(compra) {
        case "acdr":
        d = "\n comprar paquete:"
        break;
        case "pp": {
            d = "clip comprar"
        }
    }
    return d; 
}
console.log(comprar("acdr"))
console.log(comprar("pp").toUpperCase())
