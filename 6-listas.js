console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestino = new Array(salvador, saoPaulo, rioDeJaneiro);

// adicionando um item na lista
listaDeDestino.push("Bahia");
listaDeDestino.push("Amazonas");

//remover item da lista
listaDeDestino.splice(0,1);// (posicao do array, quantidade de elemento)

console.log("Destinos possíveis : ");
console.log(listaDeDestino[0], listaDeDestino[1]);