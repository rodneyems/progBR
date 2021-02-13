import React from 'react'
import Card from './Card'

function ListItem(props){

    function DoneImg(props) {
        if(props.done){
            return (
                <img src="./done.png" alt="done" width="40px"></img>
            )
        }else{
            return (
                <img src="./undone.png" alt="undone" width="40px"></img>
            )
        }
    }

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                <div className="textActivity">
                    {props.item.text}
                </div>
                <div className="containerButtonsList">
                    <button onClick={()=>{props.onDone(props.item)}} className="imgButton"><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=>{props.onItemDeleted(props.item)}} className="imgButton"><img src="./x.png" alt="delete" width="30px"></img></button>
                </div>
            </Card>
        </li>)
}

export default ListItem