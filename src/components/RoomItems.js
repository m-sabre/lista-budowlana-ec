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
import {useEffect, useState} from "react";


export default function RoomItems({data}) {





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
            <Table>
                <TableBody>
                    <TableRow></TableRow>
                </TableBody>
            </Table>

        </>
    )
}