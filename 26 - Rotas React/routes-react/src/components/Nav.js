import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link, useHistory, useLocation} from 'react-router-dom'
import AuthButton from './AuthButton'


function Nav(){
    const login = useSelector(state=>state)
    const history = useHistory()
    const location = useLocation()

    useEffect(()=>{
        let {from} = location.state || {from:{pathname:'/'}}
        if (login){
            history.replace(from)
        }
    },[login])
    
    return(
        <div className="nav">
            <div>Rodney</div>
            <div className="menu">
                <ul>
                    <li><AuthButton></AuthButton></li>
                    <li><Link to="/">Sobre</Link></li>
                    <li><Link to="/projects">Portifólio</Link></li>
                    <li><Link to="/description">Descrição</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav