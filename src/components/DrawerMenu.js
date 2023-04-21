import {Box, Button, Drawer, List, ListItem, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {menuToggle} from "../redux/actions";
import { Link} from "react-router-dom";


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
                sx={{width: 250}}
                role="presentation"
                onClick={() => openToggle(false)}
                onKeyDown={() => openToggle(false)}>
                <nav>
                    {roomData.length ? (
                        <List>
                            <Link to="/">Main</Link>
                            {roomData.map((roomData) => {
                                return (
                                    <ListItem key={roomData.roomId} component={Link} to={"/"+roomData.roomId}>
                                        <ListItemText primary={roomData.roomName}/>
                                    </ListItem>
                                )
                            })}
                        </List>
                    ) : (
                        <p>
                            <i>Brak Listy</i>
                        </p>
                    )}
                </nav>
            </Box>
        )

    }

    return (
        <>
                <Button onClick={() => openToggle(true)}>DRAWER</Button>
                <Drawer anchor="left"
                        open={drawerToggle}
                        onClose={() => openToggle(false)}>
                    {list(roomData)}

                </Drawer>

        </>
    )
}