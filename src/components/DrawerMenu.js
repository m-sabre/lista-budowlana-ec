import {Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {menuToggle} from "../redux/actions";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';


export default function DrawerMenu({roomData}) {
    const dispatch = useDispatch()
    const drawerToggle = useSelector(state => state.menuState.open)

    const openToggle = (value) => {
        console.log(value, "value");
        dispatch(menuToggle(value))
    }


    const list = (roomData) => {
        console.log("App list-Drawer", roomData);
        return (

            <Box

                sx={{
                    width: 250,
                    bgcolor: 'background.paper'
                }}
                role="presentation"
                onClick={() => openToggle(false)}
                onKeyDown={() => openToggle(false)}

            >
                <nav aria-label="main nav">
                    {roomData.length ? (

                        <List>
                            <ListItemButton key={'main'} to={"/"}>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Główna"/>
                            </ListItemButton>
                            <Divider/>
                            {roomData.map((roomData) => {
                                return (
                                    <ListItemButton key={roomData.roomId} component={Link} to={"/" + roomData.roomId}>
                                        <ListItemText secondary={roomData.roomId}/>
                                        <ListItemText primary={roomData.roomName}/>
                                    </ListItemButton>
                                )
                            })}
                        </List>
                    ) : (
                        <p>
                            <i>Wybierz Projekt</i>
                        </p>
                    )}
                </nav>
            </Box>
        )

    }

    return (
        <>
            <Button onClick={() => openToggle(true)}>
                <MenuIcon color="action"/>
            </Button>
            <Drawer anchor="left"
                    open={drawerToggle}
                    onClose={() => openToggle(false)}>
                {list(roomData)}

            </Drawer>

        </>
    )
}