import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} style={{ marginRight: '2.5%', cursor:'pointer' }}>
      <Link to="/addForm" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" startIcon={<AddIcon/>} sx={{backgroundColor:'white'}}>
        Add Messenger Group
      </Button>
      </Link>
    </Stack>
  );
}