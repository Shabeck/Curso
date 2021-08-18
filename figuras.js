// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
  return lado * 4;
}


function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();


// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");


function alturaIsoceles (lado1, lado2, base){

  if (lado1 != lado2) {
    console.error("Los lados 1 y 2 no son iguales");
  } else{
    console.log("Es un triángulo Isoceles");
  }

  const altura = Math.sqrt(lado1**2-(lado2/2)**2);
  return ("La altura es: "+ altura);

}

console.groupEnd();


// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();






// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
