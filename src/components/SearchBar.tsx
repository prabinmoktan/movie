import React, { useEffect, useState } from 'react'
import { IconButton, Button, Paper, InputBase, TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { searchedData } from '../services/axios.service';
import { string } from 'yup';

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("")
  

 
  // const getData= async(searchKey: string) => {
  //   const response = await searchedData(searchKey);
  //   console.log(response);
    
  // }
  // useEffect(() => {
  //   getData(searchKey);
  // },[])

 const inputHandler = (e:any) => {
  console.log(e.target.value)
  setSearchKey(e.target.value)
 }
//  console.log(searchKey)
  return (
    <>
    {/* <Paper sx={{borderRadius:"12px ", width:"25%"}}>
      <IconButton >
        <SearchIcon />
      </IconButton>
      <InputBase placeholder='Type to Search' onChange={inputHandler}/>
     
    </Paper>
   */}
   <TextField placeholder='Type to search' size='small' onChange={inputHandler} InputProps={{
    endAdornment:(
      <InputAdornment position='end'>
        <SearchIcon />
      </InputAdornment>
    )
   }}/>
    </>
  )
}

export default SearchBar