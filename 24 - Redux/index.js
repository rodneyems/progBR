const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const {incrementAction, decrementAction} = require('./actions/CountAction')
const {addItemAction} = require('./actions/ListActions')
const listReducer = require('./reducers/ListReducers')
const counterReducer = require('./reducers/CountReducers')
// -----------------------------------------------------------------------------------


const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
})
const store = createStore(allReducers)
console.log(store.getState())
store.subscribe(()=>{console.log(store.getState())})

store.dispatch(incrementAction(10))
store.dispatch(incrementAction(20))
store.dispatch(addItemAction("20"))
