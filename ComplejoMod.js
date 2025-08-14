class Complejo {
    constructor(valor = "0+0i") {
        const regex = /([-]?\d+(\.\d+)?)\s*([-+])\s*(\d+(\.\d+)?)i/;
        const match = valor.match(regex);

        if (!match) {
            throw new Error("Formato inválido. Use 'a+bi' o 'a-bi'");
        }

        this.real = parseFloat(match[1]);
        this.imaginario = parseFloat(match[4]) * (match[3] === "-" ? -1 : 1);
    }

    // Suma
    sumar(otro) {
        return new Complejo(
            `${this.real + otro.real}${this.imaginario + otro.imaginario >= 0 ? "+" : ""}${this.imaginario + otro.imaginario}i`
        );
    }

    // Resta
    restar(otro) {
        return new Complejo(
            `${this.real - otro.real}${this.imaginario - otro.imaginario >= 0 ? "+" : ""}${this.imaginario - otro.imaginario}i`
        );
    }

    // Mostrar
    mostrar() {
        return `${this.real} ${this.imaginario >= 0 ? "+" : "-"} ${Math.abs(this.imaginario)}i`;
    }
}

// Casos de prueba usando strings
const c1 = new Complejo("3.5+2.4i");
const c2 = new Complejo("1.2-4.8i");

const suma = c1.sumar(c2);
const resta = c1.restar(c2);

console.log("Suma:", suma.mostrar());
console.log("Resta:", resta.mostrar());
console.log("TOSUBE PINTO NATALY");r
