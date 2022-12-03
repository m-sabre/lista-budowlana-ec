import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {fetchData} from "./redux/fetchData";
import {useEffect, useState} from "react";
import 'bulma-extensions';
import 'bulma-switch'
import { Grid } from "@mui/material";
import DrawerMenu from "./components/DrawerMenu";
import Main from "./components/Main";
import { Outlet, Route, Routes} from "react-router-dom";
import RoomList from "./components/RoomList";

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

    // justifyContent="center"
    return (
        <>

                <Grid xs={12} md={12} alignItems="center">
                    {/*<NavBar />*/}
                    <DrawerMenu roomData={roomData}/>
                </Grid>

                <Grid xs="auto" alignItems="center">

                    <Outlet />

                    <Routes>
                        <Route path="/" element={<Main/>}>Main</Route>
                        <Route path="/:roomId" element={<RoomList roomData={roomData}/>}/>
                    </Routes>

                    {/*{data.length ?*/}
                    {/*    <div className="content block">*/}
                    {/*        {roomData.map(({...roomData}) => {*/}
                    {/*            return (*/}
                    {/*                <ul key={roomData.roomId}>*/}
                    {/*                    <div className=" columns is-variable">*/}
                    {/*                        <div style={{height: "50px"}}*/}
                    {/*                             className="column is-1 tag is-warning is-medium ">{roomData.roomId}</div>*/}
                    {/*                        <div style={{height: "50px"}}*/}
                    {/*                             className="column is-11 tag is-info is-large ">{roomData.roomName}</div>*/}
                    {/*                    </div>*/}
                    {/*                    <RoomItems key={roomData.id} roomData={roomData}/>*/}

                    {/*                </ul>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*    : <p1>"Ładowanie Tabeli"</p1>*/}
                    {/*}*/}
                </Grid>

        </>
    );
}

export default App;
