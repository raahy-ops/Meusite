export async function createRequest(nome, cpf, telefone , email, senha) {
    const dados = {nome, cpf, telefone, email, senha};
    const response = await fetch ("api/client", {
        method : "POST",
        headers: {
            "Accept": "applicaation/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados),
        credentials: "same-origin"
    });

    //Interpreta o json
    let data = null;
    try {
        date = await response.json();
    }
    catch{
        data = null;
    }
    return {
        ok : true,
        raw: data
    };
}