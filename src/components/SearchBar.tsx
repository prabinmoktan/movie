import React from 'react'
import { TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <>
    <TextField  sx={{color:"white", border:'white'}} size='small' InputProps={{
        startAdornment:(
            <InputAdornment position='start'>
            <SearchIcon/>
            </InputAdornment>
        )
    }}/>
    </>
  )
}

export default SearchBar