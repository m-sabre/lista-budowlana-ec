//TODO Legenda, opis, linki jak w drawer, instrukcja, nawigacja do dodania nowego projektu, wczytanie wzorcowego pliku xls?

import {Box, Grid, Paper, styled} from "@mui/material";
import * as React from "react";
import ElementsTable from "./ElementsTable";

export default function Main({data}) {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 400,
        height: 400,
        alignItems: 'center'
    }));


    return (
        <>



            <Box mt={2} ml={1} sx={{ flexGrow: 1, alignItems:'center', align:'center' }}>
                <Grid container spacing={2}  direction="column" alignItems="center">
                    <Grid item xs={6} md={8} >
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>





        </>
    )
}