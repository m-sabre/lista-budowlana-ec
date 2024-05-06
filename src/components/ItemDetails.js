import {
    Badge,
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import {KeyboardArrowUp, KeyboardArrowDown} from '@mui/icons-material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import {pink} from "@mui/material/colors";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ItemStatus from "./ItemStatus";
import {useEffect, useState} from "react";


export default function ItemDetails({data}) {




    const [open, setOpen] = useState(false)
    // const [nd, setNd] = useState(0)
    // const [done, setDone] = useState(0)
    // const [uc, setUc] = useState(0)
    // const [improv, setImprov] = useState(0)




    useEffect(() => {

        // const ndArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "Nie dotyczy")
        // setNd(ndArr.length)
        //
        // const doneArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "Wykonano")
        // setDone(doneArr.length)
        //
        // const ucArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "W trakcie")
        // setUc(ucArr.length)
        //
        // const improvArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "Do poprawy")
        // setImprov(improvArr.length)
        console.log(data,"itemD")

    }, [data])
    
    return (
        <>

        </>
    )
}
