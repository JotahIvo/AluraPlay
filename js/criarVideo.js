import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criaVideo(event){
    event.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    
    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html"; //ao terminar o envio redireciona a pessoa para uma pag de envio concluido
    } catch (e){
        alert(e);
    };
    
};

formulario.addEventListener('submit', (event) => criaVideo(event));