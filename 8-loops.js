console.log(`\n Trabalhando com loops `);


const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
let contador = 0;
let destinoExiste = false;

const listaDeDestino = new Array(salvador, saoPaulo, rioDeJaneiro);

console.log("\n Destino possiveis: ")
console.log(listaDeDestino);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

while (contador < listaDeDestino.length) {
    if (destino != listaDeDestino[contador]) {
        contador++;
    } else {
        console.log("Destino existente");
        destinoExiste = true;
        break;
    }
}


if (destinoExiste) {
    console.log("Destino existe : ", destinoExiste);
} else {
    console.log("Destino existe : ");

}
for (let i = 0; i < listaDeDestino.length ; i++) {
    console.log(listaDeDestino[i]);
    if (listaDeDestino[i] == destino) {
        destinoExiste = true;
    }
}