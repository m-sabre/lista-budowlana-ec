import {
    DRAWER_TOGGLE,
    FETCHING_ERROR,
    FETCHING_SUCCESS,
    IS_FETCHING,
    MARK_DONE,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from "./actions";
import {combineReducers} from "@reduxjs/toolkit";


const dataReducer = (state = fetchIniState, {type, payload}) => {
    switch (type) {
        case FETCH_DATA_SUCCESS:
            return {...state, data: payload, isFetching: false}
        case FETCH_DATA_FAILURE:
            return {...state, error: payload, isFetching: false}
        default:
            return state;
    }
}

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

function menuState(state = {open: false}, {type, payload}) {
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
    data: null
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
            return {
                isFetching: false,
                error: null,
                data: payload.data,

            }
        }
        case FETCHING_ERROR: {
            return {
                isFetching: false,
                error: payload.error,
                data: [],
            }
        }
        default: {
            return state
        }

    }
}

export const rootReducer = combineReducers({data:dataReducer, menuState,getItems})