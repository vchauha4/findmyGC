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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}