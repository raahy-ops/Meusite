export async function checkoutOrder(items){
    const url = "api/orders/reservation";
    const body = {
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

    if(!res.ok){
        const message = `Erro ao enviar pedido: ${res.status}`;
        throw new Error(message);
    }
    return res.json();

}