function paiz(valor) {
    var reco 
    switch(valor) {
        case 1:
            reco = "destino francia"
            break;
            case 2:
                reco = "pais:"
    }
    return reco;
}
console.log(paiz(1).toUpperCase());
console.log(paiz(2));

function descripsion(descri) {
    var respuesta 
    switch(descri) {
        case "concepto":
        respuesta = "Portugal es un país del sur de Europa en la península ibérica, que limita con España.\n Su ubicación en el océano Atlántico influyó en muchos aspectos de su cultura:\n el bacalao en sal y las sardinas a la parrilla son platos nacionales, "
        break;
        case "concep":
            respuesta = "Este país ha sabido conjugar la belleza de sus paradisíacas playas y sus \n ciudades cosmopolitas con un interior rural y tradicional y es por ello que es conocida como el jardín junto al océano"
    
    }
return respuesta;
}
console.log(descripsion("concepto"));
console.log(descripsion("concep"));

function visitaremos() {
    return "\nhechale un vistaso a nuestro tur por portugal:"
}
console.log(visitaremos().toUpperCase());

let lugaresPortugal = [
    "Lisboa, la Ciudad de las Siete Colinas.",
    " Oporto, la Joya del Norte.",
    "Sintra y Cascais, Tesoros de la Costa Atlántica.",
    "Évora, una Ciudad Llena de Historia.",
    "Faro y Tavira, la Belleza del Algarve."
]

for(var q = 0; q < lugaresPortugal.length; q++) {
    console.log("\nconoseremos" + " " + q);
    console.log(lugaresPortugal[q]);
    console.log("te encanra\n");
}

function dias() {
    return "7 dias de grandes emociones y experienzas quedaras asombrado con su hermosura"
}
console.log(dias().toUpperCase());

var wr = 5;
if(wr == 5) {
    console.log("disfruta de esta esperienza en familia no te la pierdas\n".toUpperCase())
}

let ofrecemos = ["habitacion acta para 8 personas.", "gastos en el hotel y transporte pago. ", "precio paquete 1200 dolares americanos."]

for(var t = 0; t < ofrecemos.length; t++) {
console.log(ofrecemos[t].toUpperCase());
}
function fecha(valor) {
    return "\nel viaje se realizara la fecha" + " " + valor
}
console.log(fecha(new Date));

let compra = ["\ncomprar paqute", "clip comprar"]
for(var h = 0; h < compra.length; h++) {
    console.log(compra[h].toUpperCase());
}