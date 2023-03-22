import { conectaApi } from "./conectaApi.js"; //importa o objeto de funções do outro arquivo js

const lista = document.querySelector('[data-lista]');

export default function constroiCard(item){ //cria o elemento //exporta apenas a função ao inves de um objeto de funções
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${item.url}"
        title="${item.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${item.imagem}" alt="logo canal alura">
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
    </div>`;

    return video;
};

async function listaVideos(){ 
    try{ //tratamento de erros
        const listaApi = await conectaApi.listaVideos(); //chama a função que consome a api e guarda em 'lista'

        listaApi.forEach(item => lista.appendChild(constroiCard(item))); //chama a função que cria um elemento no HTML
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos!</h2>`
    }
};

listaVideos();