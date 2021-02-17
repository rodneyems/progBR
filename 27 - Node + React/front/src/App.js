import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetch('/api/videos').then(res=>res.json()).then( data=> {
            console.log(data)
            setVideos(data)
        })
    }, [])

    return (
        <div className="App">
            <h1>Assista os vídeos abaixo</h1>
            <header className="App-header">
                {videos.map((id,index)=>{
                    return (
                        <a key={index} href={`https://www.youtube.com.br/watch?v=${id}`}>
                            <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt=""/>
                        </a>
                        
                    )
                })}
            </header>
        </div>
    );
}       

export default App;
