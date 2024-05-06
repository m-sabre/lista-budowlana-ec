import {fetchDataFailure, fetchDataSuccess, fetchingError, fetchingSuccess, isFetching} from "./actions";

import {projectDatabase} from "../firebase/config";
import { onValue, ref } from 'firebase/database';





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

