import {
    Accordion,
    AccordionSummary,
    Grid,
} from "@mui/material";

import ItemsTable from "./ItemsTable";

export default function RoomItems({roomData}) {

    return (
        <>
            {roomData.roomItems.map(({...roomItems}) => {
                return (
                    <>
                        <Accordion>
                            <AccordionSummary
                                // expandIcon={}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Grid container spacing={0.5}>
                                    <Grid xs={1} sx={{ color: "#b2a429"}}>
                                        {roomItems.itemSymbol}
                                    </Grid>
                                    <Grid xs={6}>
                                        <h6 style={{color: "#1c54b2"}}>
                                            {roomItems.itemName}
                                        </h6>
                                    </Grid>
                                </Grid>

                            </AccordionSummary>
                            <div>
                                <table className="table">
                                    <thead className="table">
                                    <tr>
                                        <th style={{width: "20px"}}>#</th>
                                        <th style={{width: "200px"}}>Element</th>
                                        <th style={{width: "100px"}}>Etap</th>
                                        <th style={{width: "500px"}}>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <ItemsTable roomItems={roomItems}/>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Filtr Etap</td>
                                        <td>Filtr Status</td>
                                    </tr>

                                    </tfoot>

                                </table>
                            </div>

                        </Accordion>
                    </>
                )
            })}
        </>
    )
}