
let ordenarComida = [
    {
        tipo: "margarita",
        tamaño: "familiar",
        Precio: "8,50",
        estras:[
            "queso mosarela",
            "champiñones",
            "maiz",
        ],
          "para llevar":true
    },
    
    {
      tipo: "4 quesos",
      tamaño: "familiar, individual",
      Precio: "15,50",
      estras: [
        "jamon",
        "champiñones",
        "maiz",
      ],
      para: "llevar"
    }
    ]
    console.log(ordenarComida[0]);
    console.log(ordenarComida[1].estras);
    
    const fecha = new Date()
    console.log(fecha);
    
    
    // bucles
    let tecnologia = ["html", "css", "javascript", "react", "angular"];
    for(let index = 0; index < tecnologia.length; index++) {
      console.log(tecnologia[index]);
    }
    //
    let materiales = ["computadora", "silla gamer", "audifonos", "aire acondicionado"]
    for (materiales of materiales) {
      console.log(materiales);
    }
    
    // bucles recorrer ogjetos
    
    let estudiantes = {
      nombre: "Diber",
      eadd: 22,
      aprende: "javascript"
    }
    for(let clave in estudiantes) {
      console.log(estudiantes[clave])
    }
    
    //
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    numeros.forEach(numeros => (
      console.log(numeros)
    ));
    
    // bucle 
    
    let edad = 0
    
    while(edad < 18) {
      console.log("tienes", (edad), "aun eres un niño")
      edad++;
    
    }
    console.log("ya tienes", (edad), "ya eres mayor puedes salir");
    
    //
    let años = 0
    
    while(años < 30 ) {
      console.log(años)
      años++;
      if (años == 25) break;
    
    }
    console.log("cumpliste ",  (25), "años ya puedes salir"  );
    
    let conjuntos = new Set(["pedro", "maria", "luisana", "jose", "jose", "pedro", "luisana"]) // new set no repite
    console.log(conjuntos);
    conjuntos.add("mariangel"); // agregar
    console.log(conjuntos);
    conjuntos.delete("luisana"); // elinar
    console.log(conjuntos);
    
    // new set
    
    /*let equipamiento = ["cama", "silla", "mueble", "escritorio", "cama", "silla"]
    
    function muebles(cosas) {
      let unaUnidad = new set(cosas)
      console.log(unaUnidad);
    }
    muebles(equipamiento);
    */
    // new Map
    let mapa = new Map([
      ["computadorta", 10],
      ["telefona", 5],
      ["calculadoras", 3]
    ])
    mapa.set("monitor", 8);
    console.log(mapa);
    
    // tipeOf ver eltipo de dato 
    // string
    let z = typeof "diber"
    console.log(z);
    // number
    let x = typeof 12
    console.log(x);
    //booleanoa
    let c = typeof true
    console.log(c);
    let v = typeof false
    console.log(v);
