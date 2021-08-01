import './App.css';
import React, { useCallback, useState } from 'react';
import { TextField, Fab, Button } from '@material-ui/core';
import { ThemeProvider, useTheme, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9800",
    },
    secondary: {
      main: "#0098FF",
    },
  },
 });
 

function App() {

  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, []);

  return (
    <>
    <ThemeProvider theme={theme}>

      <TextField 
        style={{margin: '20px'}}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </ThemeProvider>
      <Fab color="secondary" aria-label="edit">
        Edit!
      </Fab>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
}

export default App;
