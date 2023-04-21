import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {fetchData} from "./redux/fetchData";
import {useEffect, useState} from "react";
import 'bulma-extensions';
import 'bulma-switch'
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import DrawerMenu from "./components/DrawerMenu";
import Main from "./components/Main";
import {Outlet, Route, Routes} from "react-router-dom";
import RoomList from "./components/RoomList";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {

    //TODO 1. Posprzątać komponenty: APP, DRAWER MENU, ROOM LIST
    //TODO 2. Inna Tabelka - MUI z detalami - "rozsuwana"
    //TODO 3. Zapisywanie od Json
    //TODO - działające ikonki, navbar na górze, hamburger zmiana grafiki, ikonki w nagłówku w linii zawsze, ikonki w tabelce jako radio, w main legenda i opis działania apki

    //TODO - finał - działające tworzenie nowego pliku json, tworzenie raportu do pobrania.

    const dispatch = useDispatch()
    const data = useSelector(state => state.getItems.data)

    useEffect((data) => {
        console.log(data, "useEffect Data");
    }, [data])

    console.log(data, "dataSelector");

    const [roomData, setRoomData] = useState([])


    useEffect(() => {
        const getData = async () => {
            const response = await dispatch(fetchData())
            const newData = await response
            setRoomData(newData.projectData)
        }
        getData()

    }, [dispatch])


    return (
        <>
                <DrawerMenu roomData={roomData}/>
                <Outlet/>
                <Routes>
                    <Route path="/" element={<Main/>}>Main</Route>
                    <Route path="/:roomId" element={<RoomList roomData={roomData}/>}/>
                </Routes>
        </>
    );
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUw35rlR6NWVCZW4F9fUZgV2K5T7vZCMc",
    authDomain: "checklista-budowlana.firebaseapp.com",
    projectId: "checklista-budowlana",
    storageBucket: "checklista-budowlana.appspot.com",
    messagingSenderId: "114082480269",
    appId: "1:114082480269:web:df0b87bf046f6a0d80e2c4",
    measurementId: "G-P2KKXRHMF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default App;
