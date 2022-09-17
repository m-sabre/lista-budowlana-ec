import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {fetchData} from "./redux/fetchData";
import {useEffect, useRef, useState} from "react";


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

    }, [])


    console.log("Room data", roomData);
    console.log();


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
                                {roomData.roomItems.map(({...roomItems}) => {
                                    return (
                                        <>
                                            <p></p>
                                            <div key={roomItems.itemSymbol} className="columns">
                                                <div style={{height: "30px"}}
                                                     className="column is-1 tag is-warning is-medium is-light">{roomItems.itemSymbol} </div>
                                                <div style={{height: "30px"}}
                                                     className="column is-11 tag is-info is-medium is-light">{roomItems.itemName}</div>

                                            </div>
                                            <div>
                                                <table className="table">
                                                    <thead className="table">
                                                    <tr>
                                                        <th style={{width: "10px"}}>#</th>
                                                        <th style={{width: "200px"}}>Element</th>
                                                        <th style={{width: "50px"}}>Wykonany</th>
                                                        <th style={{width: "50px"}}>Etap</th>
                                                        <th style={{width: "50px"}}>Zweryfikowany</th>
                                                        <th style={{width: "50px"}}>W trakcie</th>
                                                        <th style={{width: "50px"}}>Nie Dotyczy</th>
                                                        <th style={{width: "50px"}}>Nieprawidłowy</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {roomItems.itemParams.map(({...itemParams}) => {
                                                        return (

                                                            <tr>
                                                                <th>{itemParams.id}</th>
                                                                <td>{itemParams.name}</td>
                                                                <td>
                                                                    <input className="form-check-input me-1"
                                                                           type="checkbox" value="" id="firstCheckbox"></input>
                                                                </td>
                                                                <td>
                                                                    {itemParams.stage}
                                                                </td>
                                                                <td>
                                                                    <input className="form-check-input me-1"
                                                                           type="checkbox" value="" id="firstCheckbox"></input>
                                                                </td>
                                                                <td>
                                                                    <input className="form-check-input me-1"
                                                                           type="checkbox" value="" id="firstCheckbox"></input>
                                                                </td>
                                                                <td>
                                                                    <input className="form-check-input me-1"
                                                                           type="checkbox" value="" id="firstCheckbox"></input>
                                                                </td>
                                                                <td>
                                                                    <input className="form-check-input me-1"
                                                                           type="checkbox" value="" id="firstCheckbox"></input>
                                                                </td>


                                                            </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                                </table>
                                            </div>


                                        </>
                                    )
                                })}
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
