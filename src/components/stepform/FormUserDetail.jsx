import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const formStyle = {
    margin: "10px",
};

export default function Form() {

    return (
        <form>
            <Grid container direction="column" justify="center" alignItems="stretch">
                <TextField required id="outlined-name" label="Name" variant="outlined" color="primary" style={formStyle}/>
                <TextField required id="outlined-number" label="Phone Number" type="tel" variant="outlined" color="primary" style={formStyle}/>
                <TextField required id="outlined-email" label="Email" variant="outlined" color="primary" style={formStyle}/>
                <TextField required id="outlined-ig" label="Instagram" variant="outlined" color="primary" style={formStyle}/>
            </Grid>
        </form>
    )
}

