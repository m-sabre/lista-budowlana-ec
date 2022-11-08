import {Typography} from "@mui/material";
import ItemStatus from "./ItemStatus";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function ItemDetails({roomItems}) {

    return (
        <>
            {roomItems.itemParams.map(({...itemParams}) => {
                return (

                    <tr>
                        <th><Typography variant="body2" gutterBottom>{itemParams.id}</Typography>
                        </th>
                        <td><Typography variant="body2" gutterBottom>{itemParams.name}</Typography>
                            </td>
                        <td>
                            <Typography variant="body2" gutterBottom>
                                {itemParams.stage}
                            </Typography>
                        </td>
                        <td>
                            <ItemStatus/>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}
