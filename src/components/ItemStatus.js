import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {green, orange, pink} from "@mui/material/colors";
import {useState} from "react";

export default function ItemStatus() {

    const [value,setValue]=useState("Nie dotyczy")

    const handleChange=(event)=>{
        setValue(event.target.value)
    }

    return (
        <>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    color="primary"
                    value={value}
                    onChange={handleChange}>
                    <FormControlLabel value="Wykonano"
                                      control={<Radio sx={{color: green[800],
                                          '& .MuiSvgIcon-root': {fontSize: 18,},
                                          '&.Mui-checked': {color: green[600],},
                                      }}/>}
                                      label="Wykonano"
                                      color="success"/>
                    <FormControlLabel value="Nie Dotyczy"
                                      control={<Radio color="default" sx={{
                                          '& .MuiSvgIcon-root': {fontSize: 18,},
                                      }}/>}
                                      label="Nie dotyczy"/>
                    <FormControlLabel value="Do Poprawy"
                                      control={<Radio sx={{
                                          color: pink[800],
                                          '& .MuiSvgIcon-root': {fontSize: 18,},
                                          '&.Mui-checked': {color: pink[600],},
                                      }}/>}
                                      label="Do poprawy"/>
                    <FormControlLabel value="W trakcie"
                                      control={<Radio sx={{
                                      color: orange[800],
                                          '& .MuiSvgIcon-root': {fontSize: 18,},
                                          '&.Mui-checked': {color: orange[600],},
                                      }}/>}
                                      label="W trakcie"/>
                </RadioGroup>
            </FormControl>
        </>
    )
}