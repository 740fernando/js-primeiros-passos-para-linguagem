console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `S�o Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestino = new Array(salvador, saoPaulo, rioDeJaneiro);

// adicionando um item na lista
listaDeDestino.push("Bahia");
listaDeDestino.push("Amazonas");

//remover item da lista
listaDeDestino.splice(0,1);// (posicao do array, quantidade de elemento)

console.log("Destinos poss�veis : ");
console.log(listaDeDestino[0], listaDeDestino[1]);