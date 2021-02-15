import React from 'react'
import { useLocation } from 'react-router-dom'

function Query(){
    return new URLSearchParams(useLocation().search)
}

function Watch(props){
    const query = Query()
    return(
        <div className="header">
            <h2>Assista o vídeo da URL :)</h2>
            <h4>{query.get('v')}</h4>
            <div><iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get('v')}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    )
}

export default Watch