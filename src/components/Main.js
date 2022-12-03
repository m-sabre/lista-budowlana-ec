//TODO Legenda, opis, linki jak w drawer, instrukcja, nawigacja do dodania nowego projektu, wczytanie wzorcowego pliku xls?

import {Box, Grid, Paper} from "@mui/material";

export default function Main(){

    return(
        <>
            <Grid container spacing={0} >
                <Box alignContent="center"
                     sx={{
                         display: 'flex',
                         flexWrap: 'wrap',
                         '& > :not(style)': {
                             m: 1,
                             width: 250,
                             height: 250,
                         },
                     }}
                >

                    <Paper elevation={3} >
                        LEGENDA
                        <ul>
                            <li>
                                Znaczek - opis
                            </li>
                            <li>
                                Znaczek - opis
                            </li>

                        </ul>

                    </Paper>
                    <Paper elevation={3} >
                        Instrukcja
                        <ul>
                            <li>
                                Kroki
                            </li>
                            <li>
                                Funkcje

                            </li>

                        </ul>

                    </Paper>
                </Box>
            </Grid>

        </>
    )
}