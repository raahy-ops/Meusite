export async function  loginRequest(email, senha) {
    const dados = {email, senha};

    const response = await fetch ("api/login/client", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(dados),
      
        //  body: new URLSearchParams({ "email":email, "password":senha }).toString(),




        /* URL da requisição é a mesma da origem do front (mesmo protocolo http/ mesmo dominio - local/mesmo porta 80 do servidor web Apache)
        Front : http://localhost/meusite/public/index.html
        Back : http://localhost/meusite/api/login.php*/ 


        credentials: "same-origin"

    });

    //Interpreta a resposta com JSON
    let data = null;
    try{
        data = await response.json();
    }
    catch{
        // se não for JSON válido, data permanece nell
        data = null;
    }

    if (!data || !data.token) {
        const message = "Resposta inválida do servidor, Token ausente";
        return {ok: false, token: null, raw: data, message};
    }



    return{
        ok: true,
        token: data.token,
        raw: data
    };
    
}
    
    /* Função para salvar a chave token após autenticação confirmada, ao salvar
    no local storage, o usuario poderá mudar de página, fechar o site e ainda 
    assim permanecer logado, DESDE QUE O TEMPO NÃO EXPIRE*/


    export function saveToken(token){
        localStorage.setItem("auth_token", token);
    }

    /*Recuperar a chave a cada página que o usuario navegar*/
       export function getToken(){
        localStorage.getItem("auth_token");
    }

    /*Função para remover a chave token quando o usuario deslogar */

    export function clearToken(){
        localStorage.removeItem("auth_token");
    }





