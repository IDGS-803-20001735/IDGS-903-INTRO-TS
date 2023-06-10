// Desestructuración de objetos y arreglo

interface Alumno1 {
  matricula1: number;
  nombre: string;
  edad: number;
  correo: string;
  grupo: Grupo;
}

interface Grupo {
  grupo: string;
  year: number;
}

const alumno2: Alumno1 = {
  matricula1: 12345,
  nombre: "Diego Alexis",
  edad: 20,
  correo: "alexesgo29@gmail.com",
  grupo: {
    grupo: "IDGS",
    year: 2023,
  },
};

console.log(`La matricula es: ${alumno2.matricula1}`);
console.log(`Elnombre es: ${alumno2.nombre}`);
console.log(`El año del grupo es: ${alumno2.grupo.year}`);

console.log("----------------------------------------------------------------");

const { matricula1, nombre: nom, grupo: xx } = alumno2;
const { grupo, year: anio } = xx;

console.log(`La matricula es: ${matricula1}`);
console.log(`El nombre es: ${nom}`);
console.log(`El grupo es: ${grupo}`);
console.log(`El año del grupo es: ${anio}`);

console.log("----------------------------------------------------------------");

// Desestructuración de arreglos
const gps: string[] = ["IDGS", "IEVN", "REDES"];

console.log(`Grupo 1: ${gps[0]}`);
console.log(`Grupo 2: ${gps[1]}`);
console.log(`Grupo 3: ${gps[2]}`);

console.log("----------------------------------------------------------------");

const [a, , b] = gps;
console.log(`Grupo 1: ${b}`);
