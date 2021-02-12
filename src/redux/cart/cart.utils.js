export const addItemToCart = (cartItems, cartItemToAdd) => {
    let isExistingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if(isExistingCartItem) {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id ?
            { ...item, quantity: item.quantity + 1} :
            item
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    let isExistingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if(isExistingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem
    ));
}