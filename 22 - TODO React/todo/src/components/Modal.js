import React, { useState } from 'react'
import Card from './Card'

function Modal(props){
    return(
        <div id="modal" onClick={props.hideModal} className={props.show ? "modal": "modal hide"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    )    
}
export default Modal