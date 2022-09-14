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

function dieta (desayuno,almuerzo,merienda,cena){
    this.desayuno = desayuno
    this.almuerzo = almuerzo
    this.merienda = merienda
    this.cena = cena
}

const dietaUno = new dieta ("yogurt , carne con papas , leche chocolatada con galletas , pizza")

console.log (dieta)


function caloriasDiarias () {
    let desayuno = parseInt(prompt ("Ingrese cantidad de calorias ingestada en desayuno"));
    let almuerzo = parseInt(prompt ("Ingrese cantidad de calorias ingestada en almuerzo"));
    let merienda = parseInt(prompt ("Ingrese cantidad de calorias ingestada en merienda"));
    let cena = parseInt(prompt ("Ingrese cantidad de calorias ingestada en la cena"));

    let resultadoCalorias = desayuno + almuerzo + merienda + cena 

    alert ("La suma de ingesta diaria en calorias es de:" + resultadoCalorias);
 
}

caloriasDiarias()

let ListaCalorias = parseInt(prompt ("Resultado de sus calorias : \n 1.Entre 700 y 1000,\n 2.Entre 900 y 1200 ,\n 3.Entre 1200 y 1500,\n 4.Más de 1500"));

switch (ListaCalorias){
    case 1:
        alert ("Su resultado es saludable") 
     break
    case 2:
        alert ("Su resultado es saludable")
     break
    case 3:
        alert ("Su resultado esta al limite") 
     break
    case 4: 
        alert ("Su resultado es insaluble, debe bajar la ingesta de calorias diarias")
     break
    default:
        alert ("Opción inválida")
     break
}

let arrayDietas = [
    {nombre: "Keto", cantidadCalorias: "Entre 700 y 900", precio: "2500"},
    {nombre: "Bajas en carbohidratos", cantidadCalorias: "Entre 600 y 900",precio: "1500"},
    {nombre: "Mantenimiento",cantidadCalorias: "Entre 800 y 1000",precio: "1000"},
    {nombre: "Subir de peso", cantidadCalorias: "Entre 1000 y 1200",precio: "2000"},
];

let dietasEncontradas = arrayDietas.filter((elemento)=>elemento.precio <=1500 )

console.log (dietasEncontradas)



