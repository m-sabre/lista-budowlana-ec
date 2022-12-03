import {DRAWER_TOGGLE, FETCHING_ERROR, FETCHING_SUCCESS, IS_FETCHING, MARK_DONE} from "./actions";
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

function menuState(state={open:false}, {type,payload}) {
    switch (type) {
        case DRAWER_TOGGLE:
            return {open: payload.open}
        default:
            return state
    }
}




const fetchIniState = {
    isFetching: false,
    error: null,
    data: []
}

function getItems(state = fetchIniState, {type, payload}) {
    switch (type) {
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: true
            }
        }
        case FETCHING_SUCCESS: {
            console.log("success getItems",payload);
            return {
                isFetching: false,
                error: null,
                data: payload.data,

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

export const rootReducer = combineReducers({menuState, getItems})