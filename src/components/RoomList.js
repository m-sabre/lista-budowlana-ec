import RoomItems from "./RoomItems";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function RoomList({roomData}) {
    const { roomId } = useParams();
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [uniqueSymbols,setUniqueSymbols] =useState([]);
    const filteredRoom = roomData.csvData.filter(obj => obj.roomId === roomId);

    useEffect(() => {

        console.log(filteredRoom,"filtered room")
        setData(filteredRoom)
        setIsLoading(false);
    }, [ roomData, roomId]);

    useEffect(() => {
        const uniqueSymbolsMap ={};
        data.forEach(obj=>{
            uniqueSymbolsMap[obj.elSymbol]=obj.elName;
        })

        const uniqueSymbolsArray = Object.entries(uniqueSymbolsMap).map(([elSymbol,elName])=>({
            elSymbol,
            elName
        }))
        setUniqueSymbols(uniqueSymbolsArray)
    }, [data]);




    return (
        <>
            <p>ID: {roomId}</p>
            { isLoading ? (<p>Loading...</p>):(
            uniqueSymbols.map(({...items}, index) => {

                return (
                    <ul key={index}>
                        {/*<RoomItems key={index} data={data}/>*/}
                        {items.elSymbol} , {items.elName}
                    </ul>
                )
            })
)}
        </>

    )

}