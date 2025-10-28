const key = "aurora_cart";

export function setCart(aurora_cart){
    localStorage.setItem(key, JSON.stringify(aurora_cart));
}
export function getCart(){
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : { status : "draft", items: []};
    }catch{
        return {status: "draft", items: []};
    }
    
}

export function addItemToAurora_Cart(item){
    const aurora_cart = getCart();
    aurora_cart.items.push(item);
    setCart(aurora_cart);
    return aurora_cart;

}

export function removeItemFromAurora_Cart(i){
    const aurora_cart = getCart();
    aurora_cart.items.splice(i, 1);
    setCart(aurora_cart);
    return aurora_cart;
}


export function clearAurora_Cart(){
    setCart({
        status: "draft",
        item: []
    });
}

export function getTotalItems(){
    const{ items } = getCart();
    const total = items.reduce((acc, it) =>
        acc + Number(it.subtotal || 0), 0 
    );
    return {
        total,
        qnte_items: items.length
    };

}