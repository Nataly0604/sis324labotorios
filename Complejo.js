class Complejo {
    constructor(real = 0, imaginario = 0) {
        this.real = real;
        this.imaginario = imaginario;
    }

    // Suma
    sumar(otro) {
        return new Complejo(
            this.real + otro.real,
            this.imaginario + otro.imaginario
        );
    }

    // Resta
    restar(otro) {
        return new Complejo(
            this.real - otro.real,
            this.imaginario - otro.imaginario
        );
    }

    // Mostrar
    mostrar() {
        if (this.imaginario >= 0) {
            return `${this.real} + ${this.imaginario}i`;
        } else {
            return `${this.real} - ${-this.imaginario}i`;
        }
    }
}

// Casos de prueba con 2 valores
const c1 = new Complejo(3.5, 2.4);  // 3.5 + 2.4i
const c2 = new Complejo(1.2, -4.8); // 1.2 - 4.8i

const suma = c1.sumar(c2);
const resta = c1.restar(c2);

console.log("Suma:", suma.mostrar());
console.log("Resta:", resta.mostrar());
console.log("TOSUBE PINTO NATALY");
