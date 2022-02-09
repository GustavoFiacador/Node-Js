//Trabalhar com eventos


const EventEmmiter = require('events');

class MeuEmitter extends EventEmmiter{

};


const meuEmitter = new MeuEmitter();

const nomeEvento = 'usuario:click';	


meuEmitter.on(nomeEvento, (click) => { 
    console.log('O usuario clicou', click);

})

/* meuEmitter.emit(nomeEvento, 'na barra de rolagem');
meuEmitter.emit(nomeEvento, 'na ok');

let count = 0;

setInterval(() => {
    meuEmitter.emit(nomeEvento, 'na barra de rolagem ' + (count++));
}, 1000);
 */

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
    console.log(`Você digitou: ${value.toString().trim()}`);
});