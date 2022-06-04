

import React from 'react'
import List from './List';

function GroceryList(props) {
    return(
        <div className='listcontainer'>
            <h2>Shopping List</h2>
            <div className="contain">
                <input type='text' id='toAdd'/>
                <button onClick={props.action}>Add to list</button>
            </div>
            <hr/>
            <div className="list-container">
                <List items={props} />
            </div>
        </div>
    )
}



export default GroceryList