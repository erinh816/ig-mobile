import { combineReducers } from 'redux'

const counter = (state = 125, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUBTRACT':
            return state - 1
        default:
            return state
    }
}

//for Login.js
const user = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload }
        //grabbing the initial state
        case 'UPDATE_PASSWORD':
            return { ...state, password: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    counter,
    user
})

//rootReducer is the parent
//counter and user are the children

export default rootReducer

