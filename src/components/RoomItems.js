import {
    Accordion,
    AccordionSummary, Badge,
    Grid,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CancelIcon from '@mui/icons-material/Cancel';


import ItemDetails from "./ItemDetails";
import {pink} from "@mui/material/colors";


export default function RoomItems({roomData}) {

    return (
        <>
            {roomData.roomItems.map(({...roomItems}) => {
                return (
                    <>
                        <Accordion>
                            <AccordionSummary
                                // expandIcon={}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Grid container spacing={0.5}>
                                    <Grid xs={1} sx={{color: "#b2a429"}}>
                                        {roomItems.itemSymbol}
                                    </Grid>
                                    <Grid xs={3}>
                                        <h6 style={{color: "#1c54b2"}}>
                                            {roomItems.itemName}
                                        </h6>
                                    </Grid>
                                    <Grid xs={2}>
                                        <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                            <CheckCircleIcon color="success" style={{minWidth: '40px'}}/>
                                        </Badge>
                                        <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                            <RemoveCircleIcon color="disabled" style={{minWidth: '40px'}}/>
                                        </Badge>

                                        <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                            <CancelIcon sx={{color: pink[800]}} style={{minWidth: '40px'}}/>
                                        </Badge>
                                        <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                            <BuildCircleIcon color="warning" style={{minWidth: '40px'}}/>
                                        </Badge>

                                    </Grid>

                                </Grid>

                            </AccordionSummary>
                            <div>
                                <table className="table">
                                    <thead className="table">
                                    <tr>
                                        <th style={{width: "20px"}}>#</th>
                                        <th style={{width: "200px"}}>Element</th>
                                        <th style={{width: "100px"}}>Etap</th>
                                        <th style={{width: "500px"}}>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <ItemDetails roomItems={roomItems}/>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Filtr Etap</td>
                                        <td>Filtr Status</td>
                                    </tr>

                                    </tfoot>

                                </table>
                            </div>

                        </Accordion>
                    </>
                )
            })}
        </>
    )
}