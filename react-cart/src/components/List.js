

import React, {useEffect} from 'react'
import ListItem from './ListItem';

function List({items}) {
    return(
        <ul>
            {items.list.map(item => 
                <ListItem 
                    key={item.id} 
                    item={item}
                    func={items.func}
                />
            )}
        </ul>
    )
}

export default List