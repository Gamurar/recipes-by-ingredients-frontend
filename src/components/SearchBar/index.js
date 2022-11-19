import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar({ options }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ingredient" />}
    />
  );
}
