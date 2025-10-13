export default function CardLounge(cardLoungeitem, index = 0){
    const{
        path,
        title,
        text
    } = cardLoungeitem || {}
    
    const CardLounge = document.createElement('div');
    CardLounge.innerHTML = 
    
    
    `
    <div class="card" style="width: 18rem;">
        <img src="public/assets/img/${path}"style="height: 15rem" class="card-img-top" alt="...">
  
        <div class="btn-group dropup">
            <button type="button" class="btn btn-bege" 
                data-bs-toggle="dropdown" aria-expanded="false" style="border: none";>
                <img src="public/assets/img/seta.svg" width="20" height="20">
                <h3 class="card-text" style="font-size: 1rem;font-weight: 700;">${title}</h3>
            </button>
            
            <ul class="dropdown-menu" style="border-radius: 0.375rem 0.375rem 0 0;">
                <p class = "card-text" style="text-align: center";>${text} despojado e simples para sua familia</p>
            </ul>
        </div>
        
    </div>

`
    
    return CardLounge;
}