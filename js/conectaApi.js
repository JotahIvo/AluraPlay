//Requisição GET
async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json(); //converte para JSON
    
    return conexaoConvertida;
};

//Requisição POST
async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ //objeto de variaveis que vao compor os itens para o POST
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if(!conexao.ok){ //verifica se não existir conexão, ent joga um erro
        throw new Error("Não foi possível enviar o vídeo");
    };

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
};

async function buscaVideo(termoDeBusca){ //fazer a busca utilizando template strings e '...?q=...'
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`); //atraves da url
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
};

export const conectaApi = { //exporta uma variavel chamada 'conectaApi' que é um objeto com funções nele
    listaVideos,
    criaVideo,
    buscaVideo
};