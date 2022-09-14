let nombre = " "
do {
    nombre = prompt ("Ingrese su nombre")
} while (nombre == " " )
 


let edad = prompt ("Ingrese su edad")


function saludar () {
    alert ("Hola "+ nombre)
}

saludar ();

let peso = prompt ("Ingrese su peso en Kg")
let altura = prompt ("Ingrese su altura en Metros")
let resultado = peso/(altura*altura)

function sacarIMC () {
    let resultado = peso/(altura*altura)
    alert ("Su indice de masa corporal es" + "" + parseInt(resultado) )
}

sacarIMC ();

let resultadoFinal = parseInt(prompt ("Ingrese su resultado"))

function mostrarResultado () {
if (resultadoFinal <= 18.5) {
    alert ("Su peso es inferior al normal") ;
} else if (resultadoFinal < 24.9) {
    alert ("Su peso es normal") ;
} else if (resultadoFinal< 29.9) {
    alert ("Usted tiene sobrepeso");
} else if (resultadoFinal > 30) {
    alert ("Usted tiene obesidad") ;
}
}

mostrarResultado ();