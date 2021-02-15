import React, { useEffect, useState } from 'react'
import projects from '../listProjects'
import { useParams } from 'react-router-dom'

function Project(){
    const id = useParams().id
    return projects.filter(item => item.id == id)[0]
}

function ProjectReview(){
    // MODO 1
    // const location = useLocation()
    // const params = useParams()
    // const [project, setProject] = useState({})
    // useEffect(()=>{
    //     setProject(projects.filter(item => item.id == params.id)[0])
    // }, [params])
    
    const project = Project()

    return(
        <div className="project">
            <h2>{project.name}</h2>
            <h3>{project.description}</h3>
        </div>
    )
}

export default ProjectReview