/**
 * 0. Obter um usuário
 * 1. Obter um numero de telefone de um usuario apartir de um ID
 * 2. Obter o endereço do usuario pelo seu ID
 */


function obterUsuario(callback){
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNacimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '9999-9999',
            ddd: 11
        })
    }, 2000);
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
} );
//const telefone = obterTelefone(usuario.id);
//const endereco = obterEndereco(usuario.id);


//console.log(telefone);
//console.log(endereco);


//Jss is magic