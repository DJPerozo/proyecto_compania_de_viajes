// modificar los elementos de un arreglo

var miArreglo = [4, 5, 6];

miArreglo[1] = 50;
console.log(miArreglo);
miArreglo[0] = "hola"
console.log(miArreglo);

// metodo pusht añadir un elemento al final del arreglo

var estaciones = ["invierno", "otoño", "primavera"];

estaciones.push("verano");
console.log(estaciones)
var n = [1, 2, 3];
n.push(4);
console.log(n);

// metodo pop() remover el ultimo elemento

var estacione = ["invierno", "primavera", "otoño", "verano"];
estacione.pop()
console.log(estacione)
var esta;
esta = estacione.pop()
console.log(esta)

// metodo shift remover el primer elemento del arreglo

var es = ["invierno", "primavera", "otoño", "verano"]
es.shift()
console.log(es)

// metodo unshift agregar un elemento al principio del arreglo

var estacioones = ["invierno", "otoño", "primavera"];
estacioones.unshift("verano");
console.log(estacioones)

// lista de compras
// pan
var listaDeCompras = [["pan", 5], ["carne", 3], ["pollo", 5]];
console.log("voy a comprar "  + listaDeCompras[0][1] + " unidades de " + listaDeCompras[0][0])
//carne
console.log("voy a comprar "  + listaDeCompras[1][1] + " inidades de " + listaDeCompras[1][0])
//pollo
console.log("voy a comprar "  + listaDeCompras[2][1] + " unidades de " + listaDeCompras[2][0])

// funciones 

function mostrar() {
  console.log("hola, mundo")
}
mostrar();
mostrar();

// argunmentoa de una funcion 

function suma(a, b) {
    var suma = a + b;
    console.log("el valor de " + a + " + " + b + " es " + suma);
}

suma(10, 5);
suma(5, 5);
suma(7, 7);
suma(10, 9);

function unirCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
unirCadenas("estoy", "aprendiendo a", "programar");
unirCadenas("hoy", "es", "domingo");
unirCadenas("octubre", "fecha", 6);

// variables globales

var variableGlobal = 5;    // variable fuera de funcion global
console.log(variableGlobal);

function miFuncion() {
  console.log(variableGlobal);
}
miFuncion();

console.log(variableGlobal);

// variable local

function miFuncionn() {
  var local = 7;     // variable dentro de la funcion local
console.log(local);
}
miFuncionn();
miFuncionn();

// ambito global vs ambito local

var miNombre = "juan";

function mostrarMiNombre() {
  var miNombre = "nora";
  console.log(miNombre); 
}
mostrarMiNombre();

console.log(miNombre);

// retornar un valor de una funcion 

function sumar(a, b) {
  return a + b;            // si quitamos el console no muestra nada 
} 
console.log(sumar(5, 3));

// Asignar un valor retornado a una funcion 

function sumas(a, b) {
  return a + b;
}
var resultado = sumas(10, 15);
console.log(resultado);

// asignar valor retornado a una variable

function crearConMeta(lenguajedeprogramacion) {
  return "mi meta es aprender" + lenguajedeprogramacion
}
var miMetaa = crearConMeta(" javaScript ");
console.log(miMetaa);




function nombre(num1, num2, num3) {
   return "aprendiendo a" + " " + num1 + " " + num2 + " " + num3;

}

nombre("A", "B", "C");


// actualizar propiedades en odjeto

let mochila = {
  color: "azul",
  lapiz: "amarillo",
  nombre: ["pedro"],
 }
console.log(mochila.color);
mochila.color = "verde";
console.log(mochila.color);
//agrgar al final
console.log(mochila.nombre);
mochila.nombre.push("gonzalez");
console.log(mochila.nombre);
//eliminar del odjeto
console.log(mochila.lapiz);
delete mochila.lapiz;
console.log(mochila.lapiz);

//



  let ordenarComida = [ // corchete
    {
      tipo: "margarita",
      tamaño: "familiar",
      precio: 6.56,
      estras: [            // num 0
        "estra queso",
        "champiñones",
        "refresco"
      ],
      "para llevar": true
    },
    
    {
      tipo: "cuatro queso",
      tamaño: "pequeña, familiar",
      precio: 10.50,
      estras:[                  // num 1
        "champiñones",
        "full jamon",
        "bebidas"
      ],
    }

  ]
 
  console.log(ordenarComida[0].tipo);




let arreglarNumero = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

for(var q = 0; q < arreglarNumero.length; q++) {
  var numeros = arreglarNumero[q]
  console.log("arreglos" + " " + numeros)

    for(var w = 0; w < numeros.length; w++) {
      console.log("ciclos" + " " + w)
      console.log(numeros[w])
    }
   
  }

  