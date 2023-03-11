

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SearchRes({searchResult}) {
    
  return (
    

      <Typography variant="h3" gutterBottom sx={{marginLeft:'20%'}}>
        Search:{searchResult}
      </Typography>


  );
}