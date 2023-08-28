import {fetchDataFailure, fetchDataSuccess, fetchingError, fetchingSuccess, isFetching} from "./actions";
import axios from "axios";
import {projectDatabase} from "../firebase/config";
import { onValue, get, ref } from 'firebase/database';





export const fetchDatabaseData = () => async (dispatch) => {
    try {
        const dbRef = ref(projectDatabase,"/");
        onValue(dbRef, (snapshot) => {
            dispatch(fetchDataSuccess(snapshot))
            console.log(snapshot,"fetchDB");
        })
    } catch (error) {
        dispatch(fetchDataFailure(error))
        console.log(error);

    }
}

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
            return onSuccess(success)
        } catch (error) {
            return onError(error)
        }


    }


}

