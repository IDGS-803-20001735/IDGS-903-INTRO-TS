function suma(): void {
  console.log(3 + 6);
}

function suma2(a: number, b: number): number {
  return a + b;
}

const sumar3 = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiplicar(n1: number, otroNumero: number, nuevoNumero = 3): number {
  let tem = n1 * nuevoNumero;
  return tem;
}

interface Mascota {
  nombre: string;
  edad: number;
  mostrarEdad: () => void;
}

// Arrow Functions
const calcular = (mascota: Mascota, x: number): void => {
  mascota.edad += x;
  console.log(mascota);
};

const nuevaMascota: Mascota = {
  nombre: "Juan",
  edad: 3,
  mostrarEdad() {
    console.log("La edad des: ", this.edad);
  },
};

console.log(calcular(nuevaMascota, 5));
console.log(suma2(23, 10));
console.log(multiplicar(3, 0, 2));
console.log(sumar3(23, 10));

// Función Anonima
const functionSumar = function (valor1: number, valor2: number): number {
  return valor1 + valor2;
};

console.log(functionSumar(4, 5));

// Función con parametros opcionales
function calcular1(n1: number, n2: number, n3?: number): number {
  return n3 ? n1 + n2 + n3 : n1 + n2;
}

// Fucnión Rest en funciones
function calcular2(...valores: number[]) {
  let suma = 0;
  for (let x = 0; x < valores.length; x++) {
    suma += valores[x];
  }
  return suma;
}

console.log(calcular2(10, 2, 3, 4));
console.log(calcular2(1, 2));
