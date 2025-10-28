export async function addRoom(contentForm) {
    const formData = new FormData(contentForm);
    const typeAccept = ['image/jpeg', 'image/png'];
    const inputFotos = contentForm.querySelector('#formFileMultiple');
    const imgs = inputFotos.files;

    for (let i = 0; i < imgs.length; i++) {
        if(!typeAccept.includes(imgs[i].type)) {
            throw new Error(`Arquivo "${imgs[i].name}" não é suportado.
                Selecione um Arquivo JPG ou PNG`);
        }}
    
    const url = `api/rooms`;
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    //Interpreta a resposta como JSON 
    let result = null;
    try {
        result = await response.json();
    }
    catch {
        // Se não for JSON válido, result permanece null
        result = null; }
    if(!response.ok) {
        throw new Error(`Erro ao enviar requisição: ${response.status}`);
    }
    return result; }

/*Listar os quartos disponíveis de acordo com inicio, fim e qnt*/

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
    try {
        data = await response.json();
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