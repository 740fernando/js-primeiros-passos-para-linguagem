console.log(`Trabalhando com condicionais `);


const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestino = new Array(salvador, saoPaulo, rioDeJaneiro);

console.log("Destino possiveis: ")
console.log(listaDeDestino);

const idadeComprador = 15;
const estaAcompanhada = true;

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`compra efeutada`);
    listaDeDestino.splice(0, 1);//remove item
} else {
    console.log(`Nao eh maior de idade, não pode verder`);
}

console.log("Embarque : \n \n");

temPassagemComprada = true; 

if (idadeComprador > 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você nao pode embarcar");
}


console.log(idadeComprador == 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador != 18);
console.log(listaDeDestino);