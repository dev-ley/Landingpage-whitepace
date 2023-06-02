import { conectaApi } from "./conectaApi.js";


const lista = document.querySelector("[data-lista]");


function constroiCard(nome, comentario, cargo, foto) {

    const card = document.createElement("div");
    card.className = "swiper-slide";
    card.innerHTML = `<div class="box-comentarios" style="background-color: var(--cor-box);">
    <img class="aspas" src="img/Mobile/img-what-our-clients-says/Group.png" width="80px" height="60px" alt="figura contendo imagem de uma aspas">
    <p style="color:#fff;"  class="comentarios1" >${comentario}</p>
    <p style="color:#fff;"  class="linha" >_________________________________</p>
    <div class="conteiner__comentario">
        <img style="border-radius: 20px;" class="avatar" src="${foto}"  alt="">
        <div>
            <p class="nome-avatar">${nome}</p>
            <p style="color:#fff;" class="comentarios2">${cargo}</p>
        </div>
        <div class="swiper-button-next"></div>

        
    </div>
    </div>`
    
    return card;
}

async function listaCards() {

    const listaApi = await conectaApi.listaCards();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.comentario, elemento.cargo, elemento.foto)));
}

listaCards();