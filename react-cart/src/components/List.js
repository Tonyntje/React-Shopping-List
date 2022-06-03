

import React, {useState} from 'react'
import ListItem from './ListItem';

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            groceryItems: [
                { id: 1, title: "Eggs" },
                { id: 2, title: "Soja" },
                { id: 3, title: "Beans" },
                { id: 4, title: "Milk" }
            ]
        }
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick(item) {
        console.log(item.id, item.title)
    }

    render() {
        return(
            <ul>
                {this.state.groceryItems.map(item => 
                    <ListItem 
                        key={item.id} 
                        item={item} 
                        clickItem={() => {this.onItemClick(item)}} 
                    />
                )}
            </ul>
        )
    }
}



export default List