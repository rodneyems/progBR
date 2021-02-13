import React, { useEffect, useState } from 'react'
import "./Todo.css"
import Item from './components/Item'
import List from './components/List'
import TodoForm from './components/Form'
import Modal from './components/Modal'

function App(){
    const [showModal, setShowModal] = useState(true)
    const [items, setItems] = useState([])

    function hideModal(element){
        console.log(element)
        let target = element.target
        if (target.id === "modal"){
            setShowModal(false)
        }
    }

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem("savedItems"))
        if (savedItems){
            setItems(savedItems)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("savedItems", JSON.stringify(items))
    },[items])

    function onAddItem(text){
        let item = new Item(text)
        setItems([...items, item])
        setShowModal(false)
    }

    function onItemDeleted(item) {
        
        if (window.confirm("Do you want to delete the item?")){
            let filteredItems = items.filter(itemList=>itemList !== item)
            setItems(filteredItems)
        }
    }
    function onDone(item) {
        let updatedItems = items.map(itemList => {
            if(itemList.id === item.id){
                itemList.done = !itemList.done
            }
            return itemList
        })
        setItems(updatedItems)
    }

    return (
        <div className="container">
            <header>
                <h1>Todo</h1>
                <button onClick={()=>{setShowModal(true)}} className="addButton">+</button>
            </header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} hideModal={hideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}
export default App