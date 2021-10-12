import React, { useState } from 'react';
import Nav from './Nav';
import Item from './Item';

function Shop() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const tempCart = cart;
        tempCart.push(item)
        setCart(tempCart);
        document.querySelector('#cartQuantity').innerText = `Total Items In Cart: ${cart.length}`;
        document.querySelector('#subtotal').innerText = `Subtotal: ${'$' + cart.reduce((sum, item) => sum + (item.quantity * item.price), 0)}`;
    }

    return <div>
        <Nav />
        <h2>Shop</h2>
        <div>
            <p id='cartQuantity'>Total Items In Cart: 0</p>
            <p id='subtotal'>Subtotal: $0.00</p>
            <button>Checkout</button>
        </div>
        <Item name='Product 1' price='5' addItem={addToCart}/>
        <Item name='Product 2' price='7' addItem={addToCart}/>
    </div>
}

export default Shop;