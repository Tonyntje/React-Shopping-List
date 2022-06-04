

import React from 'react'

function ListItem(props) {
    if(props.func) {
        return(
            <li
                className='list-item'
                onClick={() => props.func(props.item)}
                value={props.item.title}
            >{props.item.title}</li>
        )
    } else {
        return(
            <li
                className='list-item'
                value={props.item.title}
            >{props.item.title} <span>{props.item.amount}</span></li>
        )
    }

}

export default ListItem