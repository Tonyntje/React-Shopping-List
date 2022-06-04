

import React from 'react'
import List from './List';

function ShoppingCart(props) {
    return(
        <div className='listcontainer'>
            <h2>Shopping Cart</h2>
            <button onClick={props.action}>Empty cart</button>
            <hr/>
            <div className="list-container">
                <List items={props} />
            </div>
        </div>
    )
}



export default ShoppingCart