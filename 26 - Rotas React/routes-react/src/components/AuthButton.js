import React from 'react'
import { loginAction, logoutAction } from "../action/action"
import { useDispatch, useSelector } from "react-redux"


function AuthButton(props) {
    const login = useSelector(state => state)
    const dispatch = useDispatch()
    if (login){
        return <button onClick={()=>dispatch(logoutAction())}>Logout</button>
    }else{
        return <button onClick={()=>dispatch(loginAction())}>Login</button>
    }
}

export default AuthButton


// import React from 'react'
// import { loginAction, logoutAction } from "../action/action"
// import { useDispatch, useSelector } from "react-redux"


// function AuthButton(props) {
//     const login = useSelector(state => state)
//     const dispatch = useDispatch()
//     var loginButton
    
//     if (login){
//         loginButton = <button onClick={()=>dispatch(logoutAction())}>Logout</button>
//     }else{
//         loginButton = <button onClick={()=>dispatch(loginAction())}>Login</button>
//     }

//     return (
//         loginButton
//     )
// }

// export default AuthButton

// import React from 'react'
// import { loginAction, logoutAction } from "../action/action"
// import { useDispatch, useSelector } from "react-redux"


// function AuthButton(props) {
//     const login = useSelector(state => state)
//     const dispatch = useDispatch()
    
//     if (login){
    //     }else{
        //     }
        
        //     return (
            //          login ?
            //        <button onClick={()=>dispatch(logoutAction())}>Logout</button>
            //         :
            //        <button onClick={()=>dispatch(loginAction())}>Login</button>
//     )
// }

// export default AuthButton