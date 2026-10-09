//  PARTE 1 

let listaDeSuper = [];


listaDeSuper[0] = "Sal";
listaDeSuper[1] = "Arroz";
listaDeSuper[2] = "Fideos";


console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;
console.log(ultimoElemento);

console.log(listaDeSuper[ultimoElemento]);


//  PARTE 2 

listaDeSuper.push("Leche", "Pan");


listaDeSuper.unshift("Café", "Azúcar");


console.log(listaDeSuper.length);


let noHabia = listaDeSuper.pop();
console.log(noHabia);


let comprado = listaDeSuper.shift();
console.log(comprado);

console.log(listaDeSuper.length);


//  ENTREGA FINAL 

function logItems(arreglo) {
  arreglo.forEach(function (producto, indice) {
    console.log(indice + ": " + producto);
  });
}


let comando = "";

while (comando !== "salir") {
  comando = prompt('Escribí un comando: "nuevo", "listar", "borrar" o "salir"');

 
  if (comando === null) {
    break;
  }

  comando = comando.trim().toLowerCase();

  if (comando === "nuevo") {
    let item = prompt("¿Qué producto querés agregar?");
    if (item !== null && item.trim() !== "") {
      listaDeSuper.push(item.trim());
      console.log('Se agregó "' + item.trim() + '" a la lista.');
    } else {
      console.log("No se agregó ningún producto.");
    }

  } else if (comando === "listar") {
    if (listaDeSuper.length === 0) {
      console.log("La lista está vacía.");
    } else {
      logItems(listaDeSuper);
    }

  } else if (comando === "borrar") {
    let indice = parseInt(prompt("¿Qué índice querés borrar?"));

    if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
      let eliminado = listaDeSuper.splice(indice, 1);
      console.log('Se eliminó "' + eliminado[0] + '" de la lista.');
    } else {
      console.log("Índice inválido.");
    }

  } else if (comando === "salir") {
    console.log("¡Hasta luego!");

  } else {
    console.log("Comando no reconocido.");
  }
}