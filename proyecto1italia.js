function españa(valor) {
    var respuesta
    switch(valor) {
        case "destino":
         respuesta = "italia"
         break;ç
         case "paiz":
            respuesta = "pais:"
    }
    return respuesta;
}
console.log(españa("destino").toUpperCase());
console.log(españa("paiz"))

var a = 10;
if(a == 10) {
    console.log("Italia, país europeo con una larga costa mediterránea, influyó considerablemente en la cultura \n y la cocina occidental. Su capital, Roma, es hogar del Vaticano, de ruinas antiguas y de \n obras de arte emblemáticas. Otras ciudades importantes son Florencia, con obras maestras")
}
function descripsion(valor) {
    var descri
    switch(valor) {
    case 1: 
    descri = "Italia es reconocida por su arte, su cultura y sus numerosísimos monumentos, entre ellos la torre de \n Pisa y el Coliseo romano; así como por su gastronomía (platos italianos famosos son la pizza \n y la pasta), su vino, su estilo de vida, su pintura, su diseño, cine, teatro, literatura y música, en particular, la ópera."
    }
    return descri;
}
console.log(descripsion(1));

function hecha() {
    return "\n hecha un vistazo a nuestro recorrido por este gran pais "
}
console.log(hecha().toUpperCase())


let lugaresItalia = [" Venecia.", "Murano y Burano.", "Verona.", "Milán y Pisa.", "Florencia. ", "Roma."]

for(var m = 0; m < lugaresItalia.length; m++) {
    console.log(" \n el dia" + " " + m + " " + "visitaremos")
    console.log(lugaresItalia[m].toUpperCase());
    console.log("las mejores artes y esperencias viviras ")
}

function duracionItalia(valor) {
    var duraras 
    switch (valor) {
        case 1:
            duraras = "y hotras sorpresas mas viviras en este hermoso paiz"
            break;
        case "dura":
            duraras = "\n 6 dias de grandes experienzas en este estraordinario viaje a italia "
       break;
    }
    return duraras
}
console.log(duracionItalia(1));
console.log(duracionItalia("dura").toUpperCase());
 
var f = 10;
if(f == 10) {
    console.log("conoceras los mejores vinos y las mejores pizza no te lo pierdas".toUpperCase())
}

let ospedaje = ["\n habitacion acta para 8 personas", " todods los gastos dentro del hotel pagos", "precio paquete: 1500 dolares americanos"]

for(var h = 0; h < ospedaje.length; h++) {
    console.log(ospedaje[h].toUpperCase());
}

function fecha(valor) {
    return "\n el viaje se realisara la fecha" + " " + valor
}
console.log(fecha(new Date()))


function comprar(valor) {
    var acce 
   switch(valor) {
    case "compra":
        acce = "\n comprar paquete"
        break;
        case "clip":
            acce ="clip comprar" 
            break;
   }
    return acce;
}
console.log(comprar("compra"))
console.log(comprar("clip").toUpperCase())