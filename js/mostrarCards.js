import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, comentario, cargo, foto, id, aspas) {

    const card = document.createElement("div");
    card.className = "swiper-slide";
    card.innerHTML = ` <div class="swiper-slide"> <div class="box-comentarios" id= "${id}">
    <img class="aspas" src="${aspas}" width="80px" height="60px" alt="figura contendo imagem de uma aspas">
    <p  class="comentarios1">${comentario}</p>
    <hr  class="linha" ></hr>
    <div class="conteiner__comentario">
        <img style="border-radius: 20px; width:20%"  class="avatar" src="${foto}"  alt="">
        <div>
            <p class="nome-avatar">${nome}</p>
            <p  id= "${id}" class="comentarios2">${cargo}</p>
        </div>
    </div>
    </div>
    </div>`
    return card;
}

async function listaCards() {
    const listaApi = await conectaApi.listaCards();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.comentario, elemento.cargo, elemento.foto, elemento.id, elemento.aspas)));
}

listaCards();