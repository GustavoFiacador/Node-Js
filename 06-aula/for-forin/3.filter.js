const { obterPessoas } = require("./service");

/* Filter na mao */

Array.prototype.meuFilter = function (callback) {
  const lista = [];

  for (index in this) {
    const result = callback(this[index], index, this);
    if (!result) continue;
    lista.push(this[index]);
  }
};

async function main() {
  try {
    const { results } = await obterPessoas("a");
    const familiaLars = results
      .filter((pessoa) => {
        const result = pessoa.name.toLowerCase().indexOf("lars") !== -1;
        return result;
      })
      .map((pessoa) => pessoa.name);

    //const names = familiaLars.map((pessoa) => pessoa.name);
    console.log(familiaLars);
  } catch (error) {
    console.error("Erro", error);
  }
}

main();
