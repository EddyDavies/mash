import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ListBox(ListName: string, ListItems: {label: string}[]) { 
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ListItems}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={ListName} />}
    />
  );
}
