/**
 * 0. Obter um usuário
 * 1. Obter um numero de telefone de um usuario apartir de um ID
 * 2. Obter o endereço do usuario pelo seu ID
 * 
 * Refatorando:Aula 02
 */
 const util = require('util');

function ObterUsuario(){
    //Quando der problema, retorna o erro -> Reject
    //Quando não der problema, retorna o usuário -> Resolve
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNacimento: new Date()
            })
        }, 1000);

    })
    
}

function obterTelefone(idUsuario){
   
   return new Promise((resolve,reject) => {
        setTimeout(() => {
       return resolve( {
            telefone: '9999-9999',
            ddd: 11
        })
    }, 2000);
    })
}

function ObterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0,
            cep: '00000-000'
        })
    }, 1000);
}

ObterEnderecoPromise = util.promisify(ObterEndereco);

//Quando der sucesso vai na then => resultado
//Quando der erro vai na catch => erro

ObterUsuario()
    .then(usuario => {
        return obterTelefone(usuario.id)
        .then(resultado => {
            return {
                usuario: {
                    id: usuario.id
                    ,nome: usuario.nome
                },
                telefone: resultado
            }
        })
    })
    .then(resultado => {
        return ObterEnderecoPromise(resultado.usuario.id).then(result => {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
       
    }).then(resultado => {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}, ${resultado.endereco.cep}
        `);
    })
    .catch(
        (erro) => console.log('DEU RUIM', erro)
        );

    

/*
function resolverUsuario(erro, usuario){
    console.log(usuario);
}


obterUsuario((erro,usuario) =>{
    if(erro){
        console.log('DEU RUIM', erro);	
        return;
    }

    obterTelefone(usuario.id, (erro1, telefone) => {
        if(erro1){
            console.log('DEU RUIM', erro1);
            return;
        }

        ObterEndereco(usuario.id, (erro2, endereco) => {
            if(erro2){
                console.log('DEU RUIM', erro2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.cep}
            `);
        });
    }
    );
} );*/

//const telefone = obterTelefone(usuario.id);
//const endereco = obterEndereco(usuario.id);


//console.log(telefone);
//console.log(endereco);


//Jss is magic