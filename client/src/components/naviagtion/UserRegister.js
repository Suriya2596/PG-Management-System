import React from "react"
import {Button,FormControl,TextField} from "@mui/material"

const UserRegister = (props)=>{
    return (
        <div>
            <FormControl>
                <TextField id="outlined-basic" label="Name" variant="outlined"  />
                <TextField id="outlined-basic" label="Name" variant="outlined"  />
            </FormControl>
        </div>
    )
}

export default UserRegister