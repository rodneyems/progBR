import React, { useState } from 'react'

function TodoForm(props){
    const [text, setText] = useState("")

    function handleChange(event){
        let textType = event.target.value
        setText(textType)
    }
    function addItem(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")
        }else{
            alert("Type something to add")
        }
    }

    return (
        <form>
            <input onChange={handleChange} value={text} type="text" name="activity" id="activity" placeholder="Type your activity"></input>
            <button onClick={addItem} type="submit">ADD</button>
        </form>
    )
}

export default TodoForm