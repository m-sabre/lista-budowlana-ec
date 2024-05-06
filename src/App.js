import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {fetchData, fetchDatabaseData} from "./redux/fetchData";
import {useEffect, useState} from "react";
import 'bulma-extensions';
import 'bulma-switch'
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import DrawerMenu from "./components/DrawerMenu";
import Main from "./components/Main";
import {Outlet, Route, Routes} from "react-router-dom";
import RoomList from "./components/RoomList";

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import NavBar from "./components/NavBar";
import csvUploader from "./components/CsvUploader";
import CsvUploader from "./components/CsvUploader";
import {projectDatabase} from "./firebase/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {

    //TODO 1. Posprzątać komponenty: APP, DRAWER MENU, ROOM LIST
    //TODO 2. Inna Tabelka - MUI z detalami - "rozsuwana"
    //TODO 3. Zapisywanie od Json
    //TODO - działające ikonki, navbar na górze, hamburger zmiana grafiki, ikonki w nagłówku w linii zawsze, ikonki w tabelce jako radio, w main legenda i opis działania apki

    //TODO - finał - działające tworzenie nowego pliku json, tworzenie raportu do pobrania.

    const data = useSelector((state) => state.data.data);
    const error = useSelector((state) => state.data.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDatabaseData());
    }, [dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <NavBar roomData={data}>
                {/*<DrawerMenu roomData={roomData}/>*/}
            </NavBar>

            <Outlet/>
            <Routes>
                <Route path="/" element={<Main data={data}/>}>Main</Route>
                <Route path="/csvup" element={<CsvUploader/>}></Route>
                <Route path="/:roomId" element={<RoomList roomData={data}/>}/>
            </Routes>
        </>
    );
}


export default App;
