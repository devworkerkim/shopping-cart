import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return <div>
        <h1>Shopping Cart | The Odin Project</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
        </ul>
    </div>
}

export default Nav;