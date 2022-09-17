import {fetchingError, fetchingSuccess, isFetching} from "./actions";
import axios from "axios";


//TODO ASYNC
export function fetchData() {
    return async dispatch => {
        function onSuccess(data) {
            dispatch(fetchingSuccess(data))
            console.log("fetch Data onSuccess", data.data);
            return data.data
        }

        function onError(error) {
            dispatch(fetchingError(error))
            console.log(error);
            return error
        }

        try {
            dispatch(isFetching())
            const success = await axios.get("../db/db.json")
            console.log("Success Try", success);
            return onSuccess(success)
        } catch (error) {
            return onError(error)
        }


    }
}