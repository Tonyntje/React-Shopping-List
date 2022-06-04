

import React, {useState, useEffect} from 'react'
import './ContainerCSS.css'
import ShoppingCart from './ShoppingCart';
import GroceryList from './GroceryList';

function Container() {
    const [ groceryItems, addList ] = useState([
        {id: 1, title: 'Apples'},
        {id: 2, title: 'Eggs'},
        {id: 3, title: 'Milk'},
        {id: 4, title: 'Strawberries'}
    ])
    const [ shoppingListItems, sortList ] = useState(
        []
    )
    function handleClickGroceryItem(item) { 
        const filtered = shoppingListItems.filter(e => e.id === item.id)
        if(filtered.length > 0) {
            addAmountToItem(item)
        } else {
            const newVal = [...shoppingListItems, item]
            const mapped = newVal.map(e => {
                return {id: e.id, amount: (e.amount) ? e.amount : 1, title: e.title}
            })
            sortList(mapped)
        }
    }
    function addAmountToItem(item) {
        console.log(item)
        const newState = [...shoppingListItems]
        const wanted = newState.find(e => (item.id == e.id))
        const index = newState.indexOf(wanted)
        newState[index].amount++
        sortList(newState)
    }
    function emptyCart(){
        sortList([])
    }
    function addToList(){
        const { value } = document.getElementById('toAdd')
        document.getElementById('toAdd').value = ''
        const newId = groceryItems.length + 1
        const newItem = {id: newId, title: value}
        addList([...groceryItems, newItem])
    }

    return(
        <main>
            <GroceryList 
                list={groceryItems} 
                func={handleClickGroceryItem}
                action={addToList}
            />
            <ShoppingCart 
                list={shoppingListItems} 
                action={emptyCart}
            />
        </main>
    )
}



export default Container