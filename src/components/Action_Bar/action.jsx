import * as React from 'react';
import './action.css';
import { Button,ButtonGroup,Box } from '@mui/material';

const styles = {
  "&.MuiButton-root": {
    border: "1px aqua solid"
  },
  '&:hover': {
    backgroundColor: '#1ed4ecce',
    boxShadow: 'none',
  },
  "&.MuiButton-outlined": {
    color: "white"
  }
};

const buttons1 = [
  <Button className='button_size' sx={styles} variant="outlined">PREDICT </Button>,
  <Button className='button_size' sx={styles} variant="outlined">ANALYTICS VIEW</Button>,
  <Button className='button_size' sx={styles} variant="outlined">ADVANCED SEARCH</Button>,
];
const buttons2 = [
  <Button className='button_size1' sx={styles} variant="outlined">ADD</Button>,
  <Button className='button_size1' sx={styles} variant="outlined" disabled>EDIT</Button>,
  <Button className='button_size1' sx={styles} variant="outlined">DELETE</Button>,
];

export default function action() {
    return (
      <Box className='button'
        sx={{
          paddingBottom:'2rem',
          paddingTop:'2rem',
          display: 'flex',
          position: 'relative',
        }}
      >
        <ButtonGroup className='set1'>
          {buttons1}
        </ButtonGroup>
        <input type="text" placeholder="Search Custumer Id" />
        <ButtonGroup className='set2'>   
          {buttons2}
        </ButtonGroup>
      </Box>
    );
  }