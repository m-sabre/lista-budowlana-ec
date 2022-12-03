import RoomItems from "./RoomItems";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export default function RoomList({roomData}) {

    const data = useSelector(state => state.getItems.data)
    console.log(data, "data RoomList");
    const {roomId} = useParams()

        const newData = data[0].projectData //TODO to na pewno można zrobić zgrabniej, możę use state?
        console.log(newData, "NewData");
        const filteredRoom = newData.filter(({...data}) => data.roomId === roomId) //TODO  czy nie powinno być w if albo use Effect żeby sie zabezpieczyć przed pustym data? - tylko czemu nie działa  nie widzi zmiennej w jsx
        console.log(filteredRoom);




    return (
        <>
            <p>ID: {roomId}</p>
            {filteredRoom.map(({...roomData}) => {
                return (
                    <ul key={roomData.roomId}>
                        {/*<div className=" columns is-variable">*/}
                        {/*    <div style={{height: "50px"}}*/}
                        {/*         className="column is-1 tag is-warning is-medium ">{roomData.roomId}</div>*/}
                        {/*    <div style={{height: "50px"}}*/}
                        {/*         className="column is-11 tag is-info is-large ">{roomData.roomName}</div>*/}
                        {/*</div>*/}
                        <RoomItems key={roomData.roomId} roomData={roomData}/>
                    </ul>
                )
            })}
        </>

    )

}