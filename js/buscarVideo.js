import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js"; //importa apenas uma função ao inves de um objeto de funções

async function buscarVideo(event){
    event.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa); 

    const lista = document.querySelector('[data-lista]');

    lista.innerHTML = '';
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídos com esse título</h2>`
    };
};

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', event => buscarVideo(event));