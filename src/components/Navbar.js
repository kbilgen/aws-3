import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
        <Button color="inherit">Menu 1</Button>
        <Button color="inherit">Menu 2</Button>
        <Button color="inherit">Menu 3</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
