async function listaCards() {
    const conexao = await fetch ("https://jsonteste.vercel.app/cards");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaCards,
    
}
