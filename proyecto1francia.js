function franciaPaiz(valor) {
    var paiz 
    switch(valor) {
        case "paiz":
            paiz = "destino francia"
            break;
            case 2:
                paiz = "pais:"
    }
    return paiz;
}
console.log(franciaPaiz("paiz").toUpperCase())
console.log(franciaPaiz(2))


    var d = 10;
    if(d == 10) {
        console.log("Francia, en Europa Occidental, abarca ciudades medievales, villas \n alpinas y playas mediterráneas. París, su capital, es famosa por sus firmas de alta costura, los museos de arte \n clásico, como el Louvre, y monumentos como la Torre Eiffel. El país también es reconocido");
    } 
        
function descripsion(valor) {
   var respuesta 
   switch(valor) {
    case 1:
   respuesta = "El atractivo turístico de Francia se debe a la gran cantidad y variedad de puntos \n de interés, a la diversidad de paisajes, a la riqueza vinícola y gastronómica, al patrimonio histórico, cultural y artístico,\n al clima templado y a la facilidad de acceso y de infraestructuras de transporte, así como a la amplia y variada ..." 
   }
return respuesta;
}
 console.log(descripsion(1));

function visitaremos() {
    return "\n hecha un vistazo a los lugares que visitaremos por este tur en francia:"
}
console.log(visitaremos().toUpperCase());

let lugaresFrancia = ["Torre Eiffel, París. ...", "Montmartre, París. ...", "Palacio de Versalles, París. ...", "Arco del Triunfo, París. ...", "Catedral de Notre Dame, París.", "Opera de Niza, Niza."]

for(var i = 0; i < lugaresFrancia.length; i++ ) {
    console.log(" \n visitaremos" + " " + i);
    console.log(lugaresFrancia[i]);
    console.log("disfruta de esta experencia unica.")
}

function duracionItalia(valor) {
    var dura
    switch(valor) {
        case "dias":
            dura = "\n 7 dias de grandes experienza y emociones en el paiz mas romantico, francia"
            break;
            case 2:
                dura = "vive esta experienza unica no te lo pierdas"
                break;
    }
    return dura;
}
console.log(duracionItalia("dias").toUpperCase())
console.log(duracionItalia(2).toUpperCase())

let ofrecemos = ["\n habitacion acta para 8 personas", "hotel y guia, pagos", "precio paquete: 1800 dolares americanos"]

for(var k = 0; k < ofrecemos.length; k++) {
    console.log(ofrecemos[k].toUpperCase());
}

function fecha(valor) {
    return "\n el viaje se realizara la fecha" + " " + valor
}
console.log(fecha(new Date));

function comprar(valor) {
    var respuesta 
    switch(valor) {
        case "acquirir":
            respuesta = "\n comprar paquete"
            break;
            case "si":
            respuesta = "clip comprar "
    }
    return respuesta;
}

console.log(comprar("acquirir").toUpperCase());
console.log(comprar("si").toUpperCase());

