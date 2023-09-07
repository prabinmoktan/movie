import { RotatingLines } from 'react-loader-spinner'
import { Box } from '@mui/material'

const Loader = () => {
    
  return (
    <>
    <Box sx={{display:"flex", margin:" auto", justifyContent:"center"}}>
    <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
</Box>
    </>
  )
}

export default Loader