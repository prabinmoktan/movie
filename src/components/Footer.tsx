import { Paper, Typography, Box, Container, Grid, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
    <Paper sx={{backgroundColor:"#8739F9"}}>
        <Container sx={{ display:"flex", justifyContent:"space-between", color:"white", padding:"3px"}}>
    <Typography>Get connected with us here on social medias</Typography>
    <Box  padding={"3px"} sx={{gap:"4"}}>
    <FacebookIcon/>
    <GoogleIcon/>
    <TwitterIcon/>
    <InstagramIcon/>
    <LinkedInIcon/>
    </Box>
    </Container>
    </Paper>
    <Stack direction="row" spacing={8} justifyContent={"space-evenly"} sx={{backgroundColor:"#100F10",mb:"10px",paddingBottom:"10px" , padding:"10px", paddingTop:"30px", color:"white"}}>
        <Grid xs={6} sm={6} md={3} lg={3}>
            <Typography variant='h5' sx={{textDecoration:"underline" , textDecorationColor:"#8739F9"}} textAlign={"center"} >Movie</Typography>
            <Typography variant='body2' sx={{py:"10px"}}> Here you can check all the details of the movies</Typography>
        </Grid>
        <Grid xs={6} sm={6} md={3} alignContent={"center"} lg={3} >
            <Typography variant='h6' textAlign={"center"} sx={{textDecoration:"underline" , textDecorationColor:"#8739F9"}}>Genres</Typography>
            <Typography variant='body2' sx={{ py:"10px"}}>Horror</Typography>
            <Typography variant='body2' sx={{ py:"10px"}}>Action</Typography>
            <Typography variant='body2' sx={{ py:"10px"}}>Romantic</Typography>
            <Typography variant='body2' sx={{ py:"10px"}}>Adventure</Typography>
        </Grid>
        <Grid xs={6} sm={6} md={3} lg={3}>
        <Typography variant='h6' textAlign={"center"} sx={{textDecoration:"underline" , textDecorationColor:"#8739F9"}}>Useful Links</Typography>
        <Typography variant='body2' sx={{ py:"10px"}}>Your Account</Typography>
        <Typography variant='body2' sx={{ py:"10px"}}>Become an affiliate</Typography>
        <Typography variant='body2'>Help</Typography>

        </Grid>

        <Grid xs={6} sm={6} md={3} lg={3} >
        <Typography variant='h6' sx={{textDecoration:"underline" , textDecorationColor:"#8739F9"}} textAlign={"center"}>Contact</Typography>
        <Typography variant='body2' sx={{display:"flex",py:"10px"}} ><HomeIcon/> Bhaktapur, Nepal</Typography>
        <Typography variant='body2' sx={{display:"flex",py:"10px"}}><PhoneIcon/> +9770123456</Typography>
        <Typography variant='body2' sx={{display:"flex",py:"10px"}}><MailIcon/>info@gmail.com</Typography>

        </Grid>
      
       

    </Stack>
    <Box width={"100%"} sx={{backgroundColor:"#8739F9", display:"flex", justifyContent:"center", py:"10px", color:"white"}}  >
    <CopyrightIcon/>
    <Typography> 2023.Copyright</Typography>
    </Box>
    
    </>
  )
}

export default Footer