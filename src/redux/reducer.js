import {DECREMENT, FETCHING_ERROR, FETCHING_SUCCESS, INCREMENT, IS_FETCHING, MARK_DONE} from "./actions";
import {combineReducers} from "@reduxjs/toolkit";


function tasks(state = {Room: 1, element: 1, done: false}, action) {
    switch (action.type) {
        case MARK_DONE:
            return {
                ...state,
                done: action.payload
            } //TODO do poprawy stan początkowy i obiekt action.done ma przyjąć wartość boolean
        default:
            return state
    }
}

const counterInitState = {
    counter: 0
}

function counter(state = counterInitState, action) {
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + 1}
        case DECREMENT:
            return {counter: state.counter - 1}
        default:
            return state
    }
}

const fetchIniState = {
    isFetching: false,
    error: null,
    data: []
};

function getData(state = fetchIniState, {type, payload}) {
    switch (type) { //TODO zamienić na payload.value?
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: true
            }
        }
        case FETCHING_SUCCESS: {
            return {
                isFetching: false,
                error: null,
                data:payload.response
            }
        }
        case FETCHING_ERROR:{
            return{
                isFetching: false,
                error: payload.error,
                data:[],
            }
        }
        default: {
            return state
        }

    }
}

export const rootReducer = combineReducers({tasks, counter, getData})