import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import MediaCard from './Card';

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <MediaCard/>
      </Grid>
      <Grid item xs={4}>
        <MediaCard/>

      </Grid>
      <Grid item xs={4}>
        <MediaCard/>

      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  const oneList = Array(1982).fill(1)
  return (
    <Box sx={{ flexGrow: 1 ,justify:'center'}}>

    {oneList.map((value)=>(
      <Grid key = {value} container spacing={1}>
        <Grid container item spacing={3} align="center">
          <FormRow />
        </Grid>

      </Grid>
    ))}
    </Box>
  );
}