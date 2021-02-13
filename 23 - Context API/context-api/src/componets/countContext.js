import React, {createContext, useState} from 'react'



export const ContadorContext = createContext()

export function ContadorProvider(props){
    const [contagem, setContagem] = useState(4)

    return(
        <ContadorContext.Provider value={[contagem, setContagem]}>
            { props.children }
        </ContadorContext.Provider>
    )
}