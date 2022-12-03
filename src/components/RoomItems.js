import {
    Accordion,
    AccordionSummary, Badge,
    Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CancelIcon from '@mui/icons-material/Cancel';


import ItemDetails from "./ItemDetails";
import {pink} from "@mui/material/colors";


export default function RoomItems({roomData}) {

    return (
        // <>
        //     {roomData.map(({...roomData}) => {
        //         return (
        <>
            {/*<Accordion>*/}
            {/*    <AccordionSummary*/}
            {/*        // expandIcon={}*/}
            {/*        aria-controls="panel1a-content"*/}
            {/*        id="panel1a-header">*/}
            {/*        <Grid container spacing={0.5}>*/}
            {/*            <Grid xs={1} sx={{color: "#b2a429"}}>*/}
            {/*                {roomItems.itemSymbol}*/}
            {/*            </Grid>*/}
            {/*            <Grid xs={3}>*/}
            {/*                <h6 style={{color: "#1c54b2"}}>*/}
            {/*                    {roomItems.itemName}*/}
            {/*                </h6>*/}
            {/*            </Grid>*/}
            {/*            <Grid xs={2}>*/}
            {/*                <Badge badgeContent={4} color="primary" overlap="circular" showZero>*/}
            {/*                    <CheckCircleIcon color="success" style={{minWidth: '40px'}}/>*/}
            {/*                </Badge>*/}
            {/*                <Badge badgeContent={4} color="primary" overlap="circular" showZero>*/}
            {/*                    <RemoveCircleIcon color="disabled" style={{minWidth: '40px'}}/>*/}
            {/*                </Badge>*/}

            {/*                <Badge badgeContent={4} color="primary" overlap="circular" showZero>*/}
            {/*                    <CancelIcon sx={{color: pink[800]}} style={{minWidth: '40px'}}/>*/}
            {/*                </Badge>*/}
            {/*                <Badge badgeContent={4} color="primary" overlap="circular" showZero>*/}
            {/*                    <BuildCircleIcon color="warning" style={{minWidth: '40px'}}/>*/}
            {/*                </Badge>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}

            {/*    </AccordionSummary>*/}
            {/*    <div>*/}
            {/*        <table className="table">*/}
            {/*            <thead className="table">*/}
            {/*            <tr>*/}
            {/*                <th style={{width: "20px"}}>#</th>*/}
            {/*                <th style={{width: "200px"}}>Element</th>*/}
            {/*                <th style={{width: "100px"}}>Etap</th>*/}
            {/*                <th style={{width: "500px"}}>Status</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            <ItemDetails roomItems={roomItems}/>*/}
            {/*            </tbody>*/}
            {/*            <tfoot>*/}
            {/*            <tr>*/}
            {/*                <td></td>*/}
            {/*                <td></td>*/}
            {/*                <td>Filtr Etap</td>*/}
            {/*                <td>Filtr Status</td>*/}
            {/*            </tr>*/}

            {/*            </tfoot>*/}

            {/*        </table>*/}
            {/*    </div>*/}

            {/*</Accordion>*/}


            <TableContainer component={Paper} sx={{
                border: "1px solid rgba(0,0,0,0.2)",
                marginLeft: "20",
                marginRight: "auto",
                width: "max-content",
                padding: 1
            }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            {/*<TableCell />*/}
                            {/*<TableCell>LP</TableCell>*/}
                            <TableCell align="right" style={{width: 100}}>{roomData.roomId}</TableCell>
                            <TableCell align="right" style={{width: 250}}>{roomData.roomName}</TableCell>
                            <TableCell align="right" style={{width: 60}}>
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <CheckCircleIcon color="success" style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                            <TableCell align="right" style={{width: 60}}>
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <RemoveCircleIcon color="disabled" style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                            <TableCell align="right" style={{width: 60}}>
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <CancelIcon sx={{color: pink[800]}} style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                            <TableCell align="right" style={{width: 60}}>
                                <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                    <BuildCircleIcon color="warning" style={{minWidth: '40px'}}/>
                                </Badge>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {roomData.roomItems.map(({...roomItems}) => {
                                return (
                                    <>
                                        <ItemDetails key={roomItems.itemSymbol} roomItems={roomItems}/>
                                    </>

                                )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
    //         })}
    //     </>
    // )
}