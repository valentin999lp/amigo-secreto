// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  //capturar el valor del input
    let input = document.getElementById("amigo");
    const nombre = input.value.trim();
  //validar la entrada de datos
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
        return;
    }
    //actualizar array de amigos
    amigos.push(nombre);
    //Limpiar el campo de entrada 
    input.value = '';

    mostrarAmigos()
}

function sortearAmigo(){
  //validar que haya nombres en el array amigos
  if (amigos.length === 0) {
    alert('No hay amigos disponibles para sortear');
    return;
  }
  //generar un nombre aleatorio
  let indiceAleatorio = Math.floor(Math.random()*amigos.length);

  //obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];
  
  //mostrar el resultado en la lista de resultados
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`


  
}

function mostrarAmigos() {
  //obtener elementos de la lista
  let lista = document.getElementById("listaAmigos");

  //limpiar la lista antes de actualizar
  lista.innerHTML = '';

  //recorrer el array amigos
  for (let i = 0; i < amigos.length; i++) {
    //crear <li> para cada amigo
    let li = document.createElement("li");
    li.textContent = amigos[i],

    //agregar el li a la lista
    lista.appendChild(li);
    
  }
}

