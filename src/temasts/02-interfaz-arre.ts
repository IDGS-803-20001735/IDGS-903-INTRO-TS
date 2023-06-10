interface Alumno {
  matricula: number;
  nombre: string;
  email: string;
}

const alumno: Alumno = {
  nombre: "Diego Alexis",
  matricula: 20001735,
  email: "diego@gmail.com",
};

let mascotas = ["pero", "gato", "perico"];
mascotas[1] = "sshhh";
mascotas.push("iguana");

let tem: (number | string)[] = [];
tem.push("nombre");
tem.push(224);

console.log(alumno);
console.table(mascotas);

console.table(tem);
