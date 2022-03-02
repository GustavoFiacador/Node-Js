const service = require('./service');


async function main(){
    try {
        const { results } = await service.obterPessoas('a');
        const names = [];

        console.time('for');
        for (let index = 0; index < results.length; index++) {
            const people = results[index];
            names.push(people.name);            
        }
        console.timeEnd('for');
        
        console.time('forin');
        for (let i in results) {
           const people = results[i];
           names.push(people.name);
        }
        console.timeEnd('forin'); 

        console.time('forof');
        for (const result of results) {
            names.push(result.name);
        }
        console.timeEnd('forof');
        
        console.log(names);
    } catch (error) {
        console.error('Erro', error);
    }

}

main();