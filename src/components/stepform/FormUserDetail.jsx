import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export default function Form() {
    const classes = useStyles();

    return (
        <form>
            <div>
                <TextField required id="outlined-name" label="Name" variant="outlined" color="primary"/>
                <TextField required id="outlined-number" label="Phone Number" type="number" variant="outlined" color="primary"/>
                <TextField required id="outlined-email" label="Email" variant="outlined" color="primary"/>
                <TextField required id="outlined-ig" label="Instagram" variant="outlined" color="primary"/>
            </div>
        </form>
    )
}

