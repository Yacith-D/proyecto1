let boton = document.getElementById("botonEnviar")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let div1 = document.getElementById("texto1")
console.log(boton,input1,input2,input3);

boton.addEventListener("click", function () {
    div1.innerText = input1.value;
    let mostra1 = document.createElement("p")
  div1.appendChild(mostra1)
})















