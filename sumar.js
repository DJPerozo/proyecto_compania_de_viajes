 var a = 0;

 while(a < 5) {
    console.log("hola, mundo")
    a++;
 }

//

var miArreglo = []
var b = 0;

while(b <= 5) {
   miArreglo.push(b)
   b++;
}

console.log(miArreglo);

//

let c = [1, 2, 3, 4, 5, 6, 7, 8]

while(c.length > 4 ) {
   c.pop()
   
}
console.log(c);

//

let arreglo = []

for(var d = 0; d <= 10; d += 2 ) {
   arreglo.push(d);
}
console.log(arreglo);

//


let numeros = []

for(var e = 2; e <= 26; e += 2) {
   numeros.push(e);
}
console.log(numeros); 

//resta

for(var f = 15; f > 10; f--) {
   console.log(f);
}

let arregloResta = []

for(var g = 10; g > 0; g -= 2) {
   arregloResta.push(g);
}
console.log(arregloResta);

// 

let interacciones = [4, 6, 8, 2];
let total = 0;

for(var i = 0; i < interacciones.length; i++) {
   console.log("interaccion" + " " + i);
   console.log(interacciones[i]);
   total += interacciones[i]
}
console.log(total); 

//  mayusculas toUppercase llama en mayuscula

let lenguajedeprogramacion = ["javascript", "python", "java", "c++", "html"]

for(var j = 0; j < lenguajedeprogramacion.length; j++) {
   console.log(lenguajedeprogramacion[j].toUpperCase());
}
// arreglos anidados
let arregosAninados = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

for(var k = 0; k < arregosAninados.length;
    k++) {
  console.log("division de corchetes")
  console.log("corchetes:")
     var nidados = arregosAninados[k]
     console.log("arregos" + " " + nidados)
     
     for(var m = 0; m < nidados.length; m++) {
      console.log("ciclos" + " " + m)
      console.log(nidados[m]);
   }
}

let contactos = [
   {
      "nombre": "nora",
      "apellido": "zaen",
      "numero": "04138743256",
      "gustos": ["pizza , programar"]
   },
   {
      "nombre": "harry",
      "apellido": "poter",
      "numeros": "043467484",
      "gustos": ["programar en javascript"]

   },
   {
      "nombre": "pedro",
      "apellido": "swmit",
      "numeros": "04246588",
      "gustos": ["aser depote"]

   }
]
function buscarNumero(nombre, parametro) {
   for(var n = 0; n < contactos.length; n++) {
      if(contactos[n]. nombre === nombre) {
       return contactos[n][parametro] 
      }
      return "el contacto no se encuentra"
   }
}
console.log(buscarNumero("nora", "numero"));




 




