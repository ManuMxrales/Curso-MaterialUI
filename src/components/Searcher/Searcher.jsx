import React from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import { stackStyles, inputStyles } from './styles';
import SearchIcon from "@mui/icons-material/Search";

const Searcher = () => {
  return (
    <Stack sx={stackStyles} direction="row">
        <TextField 
        id="outlined-basic" 
        label="Search User"
        placeholder= "e.g. Octocat"
        variant="outlined"
        sx={inputStyles}
        InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
          />
    </Stack>
  )
}

export default Searcher;