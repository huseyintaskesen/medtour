import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import React, { useState, useEffect, Component } from "react";

  export default function ReservationUI(){

    const [treatment, setTreatmentValue] = React.useState('');
    const treatments = [
        {
          value: '$199 ',
          label: 'TREATMENT 1',
        },
        {
          value: '$205',
          label: 'TREATMENT 2',
        },
        {
          value: '$399',
          label: 'TREATMENT 3',
        },
        {
          value: '$299',
          label: 'TREATMENT 4',
        },
      ];
      
      const useStyles = makeStyles(theme => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));
    
      const classes = useStyles();
      
    
      const handleChange = event => {
        setTreatmentValue(event.target.value);
      };

        return(
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Select treatment"
          value={treatment}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {treatments.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-multiline-flexible"
          label="Price for treatment chosen"
          multiline
          rowsMax="4"
          value={treatment}
          variant="filled"
        />
          </div>
        </form>
      </div>
        )
    }
