import {projectDatabase} from "../firebase/config";

const MARK_DONE = "MARK_DONE";
const IS_FETCHING = "IS_FETCHING";
const FETCHING_SUCCESS = "FETCHING_SUCCESS";
const FETCHING_ERROR = "FETCHING_ERROR";
const DRAWER_TOGGLE = "DRAWER_TOGGLE";
const FETCH_DATA_SUCCESS ="FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE="FETCH_DATA_FAILURE"





function fetchDataSuccess(snapshot){
    return {
        type:FETCH_DATA_SUCCESS,
        payload:snapshot.val()
    }
}

function fetchDataFailure (error){
    return{
        type:FETCH_DATA_FAILURE,
        payload:error
    }
}


function menuToggle(value) {
    return {
        type: DRAWER_TOGGLE,
        payload: {
            open: value
        }
    }
}


function markDone(value) {
    return {
        type: MARK_DONE,
        payload: {
            done: value,
        }
    }
}

function isFetching() {
    return {
        type: IS_FETCHING,

    }
}

function fetchingSuccess(value) {
    return {
        type: FETCHING_SUCCESS,
        payload: {
            data: [value.data]
        }

    }

}

function fetchingError(error) {
    return {
        type: FETCHING_ERROR,
        payload: {error}

    }
}


export {
    MARK_DONE,
    IS_FETCHING,
    FETCHING_SUCCESS,
    FETCHING_ERROR,
    DRAWER_TOGGLE,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    menuToggle,
    markDone,
    isFetching,
    fetchingError,
    fetchingSuccess,
    fetchDataSuccess,
    fetchDataFailure
}