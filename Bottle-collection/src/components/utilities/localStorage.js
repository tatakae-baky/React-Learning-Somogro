const getCart = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}



const addToLS = (id) => {
    const cart = getCart();
    cart.push(id);
    setCartItems(cart);
}


const setCartItems = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export {addToLS, getCart}