import {
    Accordion,
    AccordionSummary, Badge, createTheme,
    Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CancelIcon from '@mui/icons-material/Cancel';


import ItemDetails from "./ItemDetails";
import {pink} from "@mui/material/colors";


export default function RoomItems({roomData}) {

    const theme = createTheme({
        overrides: {
            TableCell: {
                root: {
                    padding: 0,
                    backgroundColor: "#494ecc",
                },
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <TableContainer component={Paper} sx={{
                    border: "1px solid rgba(0,0,0,0.2)",
                    marginLeft: 0,
                    marginRight: "auto",
                    width: "max-content",
                    padding: 1
                }}>
                    <Table style={{marginLeft: 0}} aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" style={{width: 50}}>{roomData.roomId}</TableCell>
                                <TableCell align="right" style={{width: 80}}>{roomData.roomName}</TableCell>
                                <TableCell align="right" style={{width: 5}}>
                                    <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                        <CheckCircleIcon color="success" style={{minWidth: '5px'}}/>
                                    </Badge>
                                </TableCell>
                                <TableCell align="right" style={{width: 5}}>
                                    <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                        <RemoveCircleIcon color="disabled" style={{minWidth: '5px'}}/>
                                    </Badge>
                                </TableCell>
                                <TableCell align="right" style={{width: 10}}>
                                    <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                        <CancelIcon sx={{color: pink[800]}} style={{minWidth: '20px'}}/>
                                    </Badge>
                                </TableCell>
                                <TableCell align="right" style={{width: 10}}>
                                    <Badge badgeContent={4} color="primary" overlap="circular" showZero>
                                        <BuildCircleIcon color="warning" style={{minWidth: '20px'}}/>
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

            </ThemeProvider>


        </>
    )
}