//TODO Legenda, opis, linki jak w drawer, instrukcja, nawigacja do dodania nowego projektu, wczytanie wzorcowego pliku xls?

import {Box, Grid, Paper, styled} from "@mui/material";
import * as React from "react";

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

    // TODO Przepisać to jako osobny komponent?  z reduxem przekazującym id?
    //TODO Najpierw sprawdzic czy metoda działa.
    function findElementByRoomId(array,target) {
        return(
            array.elements.forEach((el)=>{
                if  (el.find(el=>el.id===target)){
                    return (
                        <div key={el.id}>
                            <li>{el.name}</li>
                            {el.checklist.map((chkls)=>{
                                return(
                                    <li key={chkls.id}>{chkls.name}</li>
                                )
                            })}
                        </div>
                    )
                }
            })

        )

    }


    return (
        <>
            <div>
                <h2>Rooms</h2>
                <ul>
                    {data && data.rooms.rooms.map((room) => {
                            return (
                                <div key={room.id}>
                                    <li >{room.name}</li>
                                    <ul>
                                        {room.elements.map((el)=>{
                                            return(
                                                <li key={el}>{el}</li>
                                               // <li key={el}>{findElementByRoomId(data,el)}</li>
                                            )
                                        })}
                                    </ul>
                                </div>


                            )
                        }
                    )}
                </ul>
                {/*<div>*/}
                {/*    {findElementByRoomId(data,"FB10")}*/}
                {/*</div>*/}

            </div>
            {/*<Box mt={2} ml={1} sx={{ flexGrow: 1, alignItems:'center', align:'center' }}>*/}
            {/*    <Grid container spacing={2}  direction="column" alignItems="center">*/}
            {/*        <Grid item xs={6} md={8} >*/}
            {/*            <Item>xs=6 md=8</Item>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={6} md={8}>*/}
            {/*            <Item>xs=6 md=8</Item>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={6} md={8}>*/}
            {/*            <Item>xs=6 md=8</Item>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={6} md={8}>*/}
            {/*            <Item>xs=6 md=8</Item>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Box>*/}

            {/*<Grid container spacing={0}>*/}
            {/*    <Box alignContent="center"*/}
            {/*         sx={{*/}
            {/*             display: 'flex',*/}
            {/*             flexWrap: 'wrap',*/}
            {/*             '& > :not(style)': {*/}
            {/*                 m: 1,*/}
            {/*                 width: 400,*/}
            {/*                 height: 400,*/}
            {/*             },*/}
            {/*         }}*/}
            {/*    >*/}

            {/*        <Paper elevation={3}>*/}
            {/*            LEGENDA*/}
            {/*            <ul>*/}
            {/*                <li>*/}
            {/*                    Znaczek - opis*/}

            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Znaczek - opis*/}
            {/*                </li>*/}

            {/*            </ul>*/}

            {/*        </Paper>*/}
            {/*        <Paper elevation={3}>*/}
            {/*            Instrukcja*/}
            {/*            <ul>*/}
            {/*                <li>*/}
            {/*                    Kroki*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Funkcje*/}

            {/*                </li>*/}

            {/*            </ul>*/}

            {/*        </Paper>*/}
            {/*    </Box>*/}
            {/*</Grid>*/}

        </>
    )
}