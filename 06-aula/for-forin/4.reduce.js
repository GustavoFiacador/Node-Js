const { obterPessoas } = require("./service");

Array.prototype.meuReduce = function (callback, valorInicial, valorFinal) {
  valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

  for (let index = 0; index < this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");
    const pesos = results.map((pessoa) => parseInt(pessoa.height));

    console.log(pesos);

    const total = pesos.meuReduce((anterior, atual) => {
      console.log(`anterior: ${anterior}`);
      console.log(`atual: ${atual}`);
      return anterior + atual;
    }, 0);
    console.log(`total `, total);
  } catch (error) {
    console.error("Erro", error);
  }
}

main();
