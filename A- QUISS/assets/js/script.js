alert("Hola");
var miArreglo = ["Hola","Adios",[11,12,13]];

console.log(miArreglo[2][1]);

var nombres = ["Maria","Cristina","Paola","Lucia"];
var edades = ["15","12","13","20"];
var apellidos = ["Nuñes","Prada","Yupanqui","Torres"];
var notas = [ [15,11,5],[16,12,9] ,[15,19,18] ,[19,20,18] ]

console.log(nombres[3]);
console.log(edades[3]);
console.log(apellidos[3]);
console.log(notas[3][0]);

//console.log(preguntas[1]);
//console.log(opciones[1][0]);
//console.log(puntajePorOpcion[1]);

function sumar(num1,num2){
    var suma;
    suma = num1 + num2;
    return suma;
}

var miSuma = sumar(5,4);
console.log(miSuma);

//var precioFinal = calcularMontoFinal()

var preguntas = [
    "¿Con qué frecuencia realizas deporte? Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuántos vasos de agua (200mL) bebes al día? No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de frutas y verduras consumes diariamente?",
    "¿Cuándo fue la última vez que fuiste al médico y/o te realizaste un chequeo general? No consideres visitas por situaciones muy específicas en las que no se revisó tu estado general de salud ni siquiera de manera visual, como por ejemplo en caso de una lesión.",
    "Piensa en lo que sueles comer día a día. ¿Qué tipo de alimentos es el más frecuente en tu dieta?",
    "¿Existen antecedentes de enfermedades crónicas en tu familia?.<br>Se considera como enfermedad crónica aquella que dura 3 ó más meses y que, posiblemente, empeore con el tiempo. Ejemplos: cáncer, diabetes, hipertensión, cardiopatías, accidentes cerebrovasculares.",
    "En general, consideras que tu salud es:",
];

var opciones = [
    ["3 ó más veces por semana","Entre 1 y 2 veces a la semana","Al menos 4 veces al mes","2 a 3 veces al mes","1 vez al mes ó menos"],
    ["Al menos 8 vasos al día","Entre 5 y 8, depende del día","Cuando me acuerdo","Solo si tengo sed","No me gusta el agua, prefiero la gaseosa"],
    ["5 ó más","2 a 4","Al menos 1 vez al día","Depende del día","Solo si me obligan"],
    ["Hace menos de un mes","Entre 1 y 3 meses atrás","stoy segura que fui al menos una vez en los últimos 12 meses","Solo voy si hay algún hueso expuesto","Nunca me enfermo, no necesito ir al médico"],
    ["Harinas y cereales","Proteína de origen animal (carnes rojas, blancas o pescado)","Aceites y grasas","Ensaladas de verduras y/o frutas","Proteínas de origen vegetal"],
    ["Sí, ambos padres padecen enfermedades crónicas","Sí, uno de mis padres padece de una o más enfermedades crónicas","Sí, al menos uno de mis hermanos","Sí, pero es un tío y/o abuelo","No que yo sepa"],
    ["Excelente, no recuerdo la última vez que tuve un resfrío","Buena, no suelo enfermarme más de una vez al año y es de manera leve","Buena, tengo alguna(s) enfermedad(es) crónica(s) pero está(n) controlada(s)","Regular, me refrío siempre y/o tengo descompensaciones ocasionales de enfermedades crónicas","Mala, paso resfriada, con crisis de enfermedades crónicas y/o lesionada"],
];

var puntajePorOpcion = [
    [5, 4, 3, 1, 0],
    [5, 4, 2, 1, 0],
    [5, 4, 3, 1, 0],
    [5, 4, 3, 1, 0],
    [1, 4, 0, 3, 5],
    [1, 2, 2, 3, 5],
    [5, 4, 4, 2, 0]  
];

var indecePreg = 0;
var puntaje = 0;

function nuevaPregunta(){
    document.getElementById("pregunta").innerHTML = preguntas[indecePreg];

document.getElementById("op1").innerHTML = opciones[indecePreg][0];
document.getElementById("op2").innerHTML = opciones[indecePreg][1];
document.getElementById("op3").innerHTML = opciones[indecePreg][2];
document.getElementById("op4").innerHTML = opciones[indecePreg][3];
document.getElementById("op5").innerHTML = opciones[indecePreg][4];

document.getElementById("barra-progreso").value = indecePreg/preguntas.length*100;

}

function actualizarPuntaje(opcione){
    var indece = opcione - 1;
    puntaje = puntaje + puntajePorOpcion[indecePreg][indece];
    indecePreg = indecePreg + 1;
    if(indecePreg<preguntas.length){
        nuevaPregunta();
    }
    else{
        mostrarResultados()
    }

}

function mostrarResultados(){
    // Se mueven los hijos del div con "card"
}







nuevaPregunta();

document.getElementById("op1").addEventListener("click",
function(){
    actualizarPuntaje(1)
}
);

document.getElementById("op2").addEventListener("click",
function(){
    actualizarPuntaje(2)
}
);

document.getElementById("op3").addEventListener("click",
function(){
    actualizarPuntaje(3)
}
);

document.getElementById("op4").addEventListener("click",
function(){
    actualizarPuntaje(4)
}
);

document.getElementById("op5").addEventListener("click",
function(){
    actualizarPuntaje(5)
}
);