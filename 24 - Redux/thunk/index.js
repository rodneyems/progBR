const {createStore, applyMiddleware} = require('redux')
const thunk = require('redux-thunk').default
const fetch = require('node-fetch')

const initialState = [{id:0, title: "Tarefa", completed:false}]

const addItem = (item)=>{return{type: "ADD_ITEM", payload:item}}

const listReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
    
        default:
            return state
    }
}
const loadItemAndAdd = ()=>{
    return (dispatch) =>{
        fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json()).then(json=>{
            dispatch(addItem(json))
        })
    }
}

const store = createStore(listReducer, applyMiddleware(thunk))
console.log(store.getState())
store.dispatch(loadItemAndAdd())
console.log(store.getState())
store.subscribe(()=>{console.log(store.getState())}) 