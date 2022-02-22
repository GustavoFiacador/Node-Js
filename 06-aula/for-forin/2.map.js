const service = require('./service');

Array.prototype.meuMap = function(callback) {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(array[index], index));
    }
    return newArray;
};

async function main() {
    try {
        const { results } = await service.obterPessoas('a');
        //const names = [];
        //results.forEach(element => {
        //    names.push(element.name);
        //});

       /*  const names = results.map(element => {
            return element.name
        }); */

        //const names = results.map(element => element.name);
        
        const names = results.meuMap(element => element.name);
        console.log(names);

    } catch (error) {
        console.log('Erro', error);
    }

}

main();