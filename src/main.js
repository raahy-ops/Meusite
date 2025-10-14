import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";
import renderHomePage from "./pages/home.js";
import renderCartPage from "./pages/cart.js"; 
import renderResgisterRoom from "./pages/register-room.js";
 
//Configuração de rotas
const routes = {
    "/login": renderLoginPage,
    "/cadastro": renderRegisterPage,
    "/home": renderHomePage,
   "/cart": renderCartPage,
   "/register-room": renderResgisterRoom,
    //Novas páginas adicionadas conforme desenvolvidas
};
 
//Obtém o caminho atual a partir da hash da URL
function getPath() {
    //obtém o hash (ex. "#login/"), remove o # e tira espaço
    const url = (location.pathname || "").replace("/Meusite/", "/").trim();
 
    //retorna url se começar com "/", se não, retorna "//home" como padrão
    return url && url.startsWith("/") ? url : "/home";
}
 
//Decide o que renderiza com base na rota atual
function renderRoutes() {
    const url = getPath(); //Lê a rota atual, ex. "/register"
    const render = routes[url] || routes["/home"]; //Busca esta rota no mapa
    render(); //Executa a função de render na página atual
}
 
//Renderização
document.addEventListener('DOMContentLoaded', renderRoutes);