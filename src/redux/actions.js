const MARK_DONE = "MARK_DONE";
const IS_FETCHING = "IS_FETCHING";
const FETCHING_SUCCESS = "FETCHING_SUCCESS";
const FETCHING_ERROR = "FETCHING_ERROR";


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
        payload:{
            data:[value.data]
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
    markDone,
    isFetching,
    fetchingError,
    fetchingSuccess
}