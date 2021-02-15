import React from 'react'

function Counter(props){
    return (
        <div>
            <div>+</div>
            <div>-</div>
            <div>{props.value}</div>
        </div>
    )
}

export default Counter