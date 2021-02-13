import React, { useContext } from 'react'
import { ContadorContext } from '../componets/countContext'

function Counter(props){

    const [contagem, setContagem] = useContext(ContadorContext)

    return(
        <div>
            <div>{contagem}</div>
            <button onClick={()=>{setContagem(anterior=>anterior + 1)}}>+</button>
            <button onClick={()=>{setContagem(anterior=>anterior - 1)}}>-</button>
        </div>
    )
}

export default Counter