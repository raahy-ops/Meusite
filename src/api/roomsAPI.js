
/*Listar todos os quartos, independente do filtro*/

export async function  listAvailableRoomsRequest({ inicio, fim, qnt }) {
    /*Retorna o valor do token armazenado que comprova a autenticação do usuario*/
    const params = new URLSearchParams();
    if(inicio) params.set("inicio", inicio);
    if(fim) params.set("fim", fim);
    if(qnt !== null && qnt !== "") params.set("qnt", String(qnt));

    const url = `api/room/disponiveis?${params.toString()}`;
    
    const response = await fetch(url, {
        method: "GET",
            
        headers: {
            "Accept": "application/json",
        },
        credentials: "same-origin"

    });

    let data = null;
    try{
        data =  await response.json();
    }
    catch{
        data = null;
    }
    if(!response.ok){
        const msg = data?.message || "Falha ao buscar quartos disponíveis!";
       throw new Error(msg);
    }

    const quartos = Array.isArray(data?.Quartos) ? data.Quartos : [];
    console.log(quartos);
    return quartos;
        

}