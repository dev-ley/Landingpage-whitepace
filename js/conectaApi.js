async function listaCards() {
    const conexao = await fetch ("https://landingpage-whitepace.vercel.app/db.json");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaCards
}