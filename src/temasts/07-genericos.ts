class PilaEnteros {
  private vec: number[] = [];

  insertar(x: number) {
    this.vec.push(x);
  }

  extraer() {
    return this.vec.length > 0 ? this.vec.pop() : null;
  }
}

class PilaString {
  private vec: string[] = [];

  insertar(x: string) {
    this.vec.push(x);
  }

  extraer() {
    return this.vec.length > 0 ? this.vec.pop() : null;
  }
}

let pila1 = new PilaEnteros();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());
console.log("----------------------------------------------------------------");
let pila2 = new PilaString();
pila2.insertar("23");
pila2.insertar("28");
pila2.insertar("2");
console.log(pila2.extraer());
console.log("----------------------------------------------------------------");
// Clase geericas
class PilaGenerica<T> {
  private vec: T[] = [];

  insertar(x: T) {
    this.vec.push(x);
  }

  extraer() {
    this.vec.length > 0 ? this.vec.pop() : null;
  }
}

let pila3 = new PilaGenerica<number>();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());
console.log("----------------------------------------------------------------");
let pila4 = new PilaGenerica<string>();
pila2.insertar("23");
pila2.insertar("28");
pila2.insertar("2");
console.log(pila2.extraer());
console.log("----------------------------------------------------------------");
