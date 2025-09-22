/* get token() é uma função que retorna o valor do token armazenado no localStorage, para que o usuario permaneça logado mesmo que mude de página e não tenha que "re-logar" */

import { getToken } from "./authAPI";

/*Listar todos os quartos, independente do filtro*/

export async function  listAllRequest() {
    /*Retorna o valor do token armazenado que comprova a autenticação do usuario*/
    const token = getToken();
    
    /*A função para retornar os quartos precisa ser assíncrona, pois espera-se uma "promise" de que, ao chamr o  endpoint api/rooms (que executa o arquivo rooms.php no qual contém todas as requisições possíveis), este arquivo converse com a Controller que, por sua vez, converse com a Model (onde está query SELECT)*/

    const response = await fetch("api/rooms", {
            method: "GET",
            headers:{
                "Accept": "application/json",
            "Content-Type": "application/json"
            },
            credentials: "same-origin"

    })
    
}