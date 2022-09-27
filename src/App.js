import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {fetchData} from "./redux/fetchData";
import {useEffect, useRef, useState} from "react";
import 'bulma-extensions';
import 'bulma-switch'
import RoomItems from "./components/RoomItems"

function App() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.getItems.data)


    const [roomData, setRoomData] = useState([])

    console.log("Data", data);

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
            {roomData !== null ?
                <div className="content block">
                    {roomData.map(({...roomData}) => {
                        return (
                            <ul key={roomData.roomId}>
                                <div className=" columns is-variable">
                                    <div style={{height: "50px"}}
                                         className="column is-1 tag is-warning is-medium ">{roomData.roomId}</div>
                                    <div style={{height: "50px"}}
                                         className="column is-11 tag is-info is-large ">{roomData.roomName}</div>
                                </div>
                                <RoomItems key={roomData.id} roomData={roomData}/>

                            </ul>
                        )
                    })}
                </div>
                : <p1>"Ładowanie Tabeli"</p1>
            }
        </>
    );
}

export default App;
