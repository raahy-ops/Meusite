export async function checkoutOrder(items){
    const url = "api/orders/reservation";
    const body = {
        cliente_id: 39,




        pagamento : "pix",
        quartos : items.map(it => (
        {
            id : it.roomId,
            inicio : it.checkIn,
            fim: it.checkOut 
        }
        )) 
    };
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Typer": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(body)
    });

    let data = null;

    try{
        //Retorno em json() da requisição armazenado em data
        data = await res.json();
    }
    catch{
        data = null;
    }

    if(!data){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return {ok: false, raw: data, message};
    }
    return {
        ok: true,
        raw: data
    }

}