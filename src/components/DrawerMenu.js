import {Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {menuToggle} from "../redux/actions";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {useEffect, useState} from "react";


export default function DrawerMenu({roomData}) {
    const [uniqueRecords, setUniqueRecords] = useState([]);
    const dispatch = useDispatch()
    const drawerToggle = useSelector(state => state.menuState.open)

    const openToggle = (value) => {
        console.log(value, "value");
        dispatch(menuToggle(value))
    }
    useEffect(() => {
        const uniqueRecordsMap = {};

        roomData.csvData.forEach(obj => {
            // Check if the roomId matches the regex pattern
            const regexPattern = /^\d+\d+\.\d+\d+(\.\d+\d+)?$/;
            if (regexPattern.test(obj.roomId)) {
                uniqueRecordsMap[obj.roomId] = obj.roomName;
            }
        });

        const uniqueRecordsArray = Object.entries(uniqueRecordsMap).map(([roomId, roomName]) => ({
            roomId,
            roomName
        }));
        console.log("uniqueArr",uniqueRecordsArray)
        setUniqueRecords(uniqueRecordsArray);
    }, [roomData]);






    const list = (roomData) => {
        console.log("App list-Drawer", roomData);
        return (

            <Box
                sx={{
                    width: 350,
                    bgcolor: 'background.paper'
                }}
                role="presentation"
                onClick={() => openToggle(false)}
                onKeyDown={() => openToggle(false)}

            >
                <nav aria-label="main nav">


                        <List>
                            <ListItemButton key={'main'} to={"/"}>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Główna"/>
                            </ListItemButton>
                            <Divider/>
                            {uniqueRecords.map((record, index) => (
                                <ListItemButton key={index} component={Link} to={"/" + record.roomId}>
                                    <ListItemText secondary={record.roomId} />
                                    <ListItemText primary={record.roomName} />
                                </ListItemButton>
                            ))}
                        </List>

                        {/*<p>*/}
                        {/*    <i>Wybierz Projekt</i>*/}
                        {/*</p>*/}

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