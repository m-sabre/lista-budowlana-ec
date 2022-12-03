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

import {useDispatch, useSelector} from "react-redux";
import {KeyboardArrowUp, KeyboardArrowDown} from '@mui/icons-material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import {pink} from "@mui/material/colors";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ItemStatus from "./ItemStatus";
import {tableToggle} from "../redux/actions";
import {useState} from "react";


export default function ItemDetails({roomItems}) {

    const[open,setOpen]=useState(false)


    return (
        <>
            {/*{roomData.roomItems.map(({...Items}) => {*/}
            {/*    return (*/}

            {/*        // <tr>*/}
            {/*        //     <th><Typography variant="body2" gutterBottom>{itemParams.id}</Typography>*/}
            {/*        //     </th>*/}
            {/*        //     <td><Typography variant="body2" gutterBottom>{itemParams.name}</Typography>*/}
            {/*        //         </td>*/}
            {/*        //     <td>*/}
            {/*        //         <Typography variant="body2" gutterBottom>*/}
            {/*        //             {itemParams.stage}*/}
            {/*        //         </Typography>*/}
            {/*        //     </td>*/}
            {/*        //     <td>*/}
            {/*        //         <ItemStatus/>*/}
            {/*        //     </td>*/}
            {/*        // </tr>*/}
            {/*        <>*/}
                        <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
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
                            <TableCell align="right">
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <CheckCircleIcon color="success" style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                            <TableCell align="right">
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <RemoveCircleIcon color="disabled" style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                            <TableCell align="right">
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <CancelIcon sx={{color: pink[800]}} style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                            <TableCell align="right">
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <BuildCircleIcon color="warning" style={{minWidth: '40px'}}/>
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
                                                    <TableCell>Customer</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                {roomItems.itemParams.map(({...itemParams}) => {
                                                    return (
                                                        <>
                                                            <TableRow key={itemParams.id}>
                                                                <TableCell component="th" scope="row">

                                                                </TableCell>
                                                                <TableCell>{itemParams.id}</TableCell>
                                                                <TableCell align="right">{itemParams.name}</TableCell>
                                                                <TableCell align="right">
                                                                    <ItemStatus/>
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
                    {/*</>*/}


            {/*//     )*/}
            {/*// })}*/}
        </>
    )
}
