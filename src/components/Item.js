import React, { useState } from 'react';

function Item(props) {
    const [quantity, setQuantity] = useState(0);

    const quantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const addOne = () => {
        setQuantity(quantity + 1);
    }
    
    const subtractOne = () => {
        if (quantity === 0) return;
        setQuantity(quantity - 1);
    }

    return <div>
        <h3>{props.name}: {'$' + props.price}</h3>
        <input type='number' value={quantity} onChange={quantityChange}/>
        <button onClick={() => addOne()}>+</button>
        <button onClick={() => subtractOne()}>-</button>
        <button onClick={() => props.addItem({name: props.name, price: props.price, quantity: quantity})}>Add To Cart</button>
    </div>
}

export default Item;