import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import DrawerMenu from "./DrawerMenu";
import AppMenu from "./AppMenu";
import {createTheme} from '@mui/material/styles';
import {Avatar, ThemeProvider} from "@mui/material";


export default function NavBar({roomData}) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#c62828',
            },
            secondary: {
                main: '#d81b60',
            },
        },
    });

    return (
        <Box sx={{flexGrow: 2}}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <DrawerMenu roomData={roomData}></DrawerMenu>

                        {/*<Avatar alt="EC" src={require('../ECLOGOGRAY.png')} sx={{ width: 36, height: 36 }}/>*/}
                        {/*<img src={require('../ECLOGOGRAY.png')} style={{width: "2.5%", height: "2.5%"}} alt="EC"></img>*/}
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}} style={{marginLeft: '.5rem'}}>
                            EC Lista AB
                        </Typography>

                        <AppMenu/>
                        <Button color="inherit">Zapisz</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}