import React, { useContext } from 'react'
import { ContadorContext } from './countContext';


function Header(props){
    const value = useContext(ContadorContext)
    return(
        <div>
            <div>LOGO</div>
            <div>{value}</div>
        </div>
    )
}

export default Header