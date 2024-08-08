import { Autocomplete, TextField } from "@mui/material";
import { appAutoComplete } from "../../interface/global.interafce";

const AppAutoComplete: React.FC<appAutoComplete> = ({
  options,
  label,
  onChange,
  defaultValue,
  id,
  width = 300,
  ...rest
}) => {
  return (
    <>
      <Autocomplete
      defaultValue={defaultValue}
        size="small"
        disablePortal
        id={id}
        options={options}
        
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label={label} />}
        sx={{
          width,
          '& .MuiAutocomplete-option': {
            backgroundColor: 'black',
            color: 'red',
            '&[aria-selected="true"]': {
              backgroundColor: 'blue',
              color: 'red',
            },
            '&:hover': {
              backgroundColor: 'darkblue',
              color: 'red',
            },
          },
          '& .MuiAutocomplete-inputRoot': {
            color: 'white',
          },
          '& .MuiAutocomplete-popper': {
            '& .MuiPaper-root': {
              backgroundColor: 'black',
            },
            '& .MuiAutocomplete-listbox': {
              backgroundColor: 'black',
            },
          },
        }}
        {...rest}
      />
    </>
  );
};

export default AppAutoComplete;
