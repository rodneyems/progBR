import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import projects from '../listProjects'

function Projects(){
    const match = useRouteMatch()
    const [url, setUrl] = useState("")
    useEffect(()=>{
        let newUrl = match.url.slice(-1) === '/' ? match.url : match.url + '/'
        setUrl(newUrl)

    },[match])

    return(
        <div className="projects">
            <div className="menu">
                <h3>Projetos:</h3>
                <ol>
                    {projects.map(item=>{
                        return <li key={item.id}><Link to={`${url}${item.id}`}>{item.name}</Link></li>
                    })}
                </ol>
            </div>
        </div>
    )
}
export default Projects