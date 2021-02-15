import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({children, ...rest}){
    const login = useSelector(state=>state)
    return (
        <Route {...rest}
        render={({location})=>{
            return login ? (children) :
            (<Redirect to={{
                pathname:'/denied',
                state:{from: location}
            }}></Redirect>)
        }}
        >

        </Route>
    )
}


export default PrivateRoute