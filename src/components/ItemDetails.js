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


export default function ItemDetails({roomItems}) {

    const [open, setOpen] = useState(false)
    const [nd, setNd] = useState(0)
    const [done, setDone] = useState(0)
    const [uc, setUc] = useState(0)
    const [improv, setImprov] = useState(0)


    useEffect(() => {

        const ndArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "Nie dotyczy")
        setNd(ndArr.length)

        const doneArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "Wykonano")
        setDone(doneArr.length)

        const ucArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "W trakcie")
        setUc(ucArr.length)

        const improvArr = roomItems.itemParams.filter(({...itemParams}) => itemParams.flag === "Do poprawy")
        setImprov(improvArr.length)


    }, [])
    
    return (
        <>
            <TableRow style={{marginLeft: 0}} sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {roomItems.itemSymbol}
                </TableCell>
                <TableCell style={{width: 10}} align="right">
                    <Badge badgeContent={done} color="primary" overlap="circular" showZero>
                        <CheckCircleIcon color="success" style={{minWidth: '5px'}}/>
                    </Badge>
                </TableCell>
                <TableCell style={{width: 10}} align="right">
                    <Badge badgeContent={nd} color="primary" overlap="circular" showZero>
                        <RemoveCircleIcon color="disabled" style={{minWidth: '5px'}}/>
                    </Badge>
                </TableCell>
                <TableCell align="right">
                    <Badge badgeContent={improv} color="primary" overlap="circular" showZero>
                        <CancelIcon sx={{color: pink[800]}} style={{minWidth: '5px'}}/>
                    </Badge>
                </TableCell>
                <TableCell align="right">
                    <Badge badgeContent={uc} color="primary" overlap="circular" showZero>
                        <BuildCircleIcon color="warning" style={{minWidth: '5px'}}/>
                    </Badge>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                {roomItems.itemName}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Lp</TableCell>
                                        <TableCell>Nazwa elementu</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {roomItems.itemParams.map(({...itemParams}) => {
                                        // flagItem({...itemParams})
                                        return (
                                            <>
                                                <TableRow key={itemParams.id}>
                                                    {/*<TableCell component="th" scope="row">*/}
                                                    {/*</TableCell>*/}
                                                    <TableCell>{itemParams.id}</TableCell>
                                                    <TableCell align="right">{itemParams.name}</TableCell>
                                                    <TableCell align="right">
                                                        <ItemStatus nd={nd} done={done} uc={uc} improv={improv}/>
                                                    </TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
