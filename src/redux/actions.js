const MARK_DONE = "MARK_DONE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const IS_FETCHING = "IS_FETCHING";
const FETCHING_SUCCESS = "FETCHING_SUCCESS";
const FETCHING_ERROR = "FETCHING_ERROR";

function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
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
        payload: {}
    }
}

function fetchingSuccess() {
    return {}

}

function fetchingError() {
    return {}
}


export {MARK_DONE, INCREMENT, DECREMENT, IS_FETCHING, FETCHING_SUCCESS, FETCHING_ERROR, decrement, markDone, increment}