import React, { useState } from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { stackStyles, inputStyles } from "./styles";

const Searcher = (props) => {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState("");

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  const onSearchValueChange = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  return (
      <Stack sx={stackStyles} direction="row">
        <TextField
          id="outlined-basic"
          label="Search User"
          placeholder="e.g. Octocat"
          variant="outlined"
          value={valueInput}
          onChange={onSearchValueChange}
          sx={inputStyles}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Stack>
  );
};

export default Searcher;
