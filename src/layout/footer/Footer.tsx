import { Typography, Box, Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { genres, usefulLinks } from "../../constant";
import "./footer.css";

const contactDetails = [
  { name: "Bhaktapur, Nepal", icon: <HomeIcon /> },
  { name: "+977 98*******", icon: <PhoneIcon /> },
  { name: "info@gmail.com", icon: <MailIcon /> },
];

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#17273D" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            padding: "3px",
            borderRadius: "none",
            alignItems: "center",
          }}
        >
          <Typography>Get connected with us here on social medias</Typography>
          <Box padding={"3px"} sx={{ gap: "4" }}>
            <FacebookIcon />
            <GoogleIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Container>
      </Box>
      <Grid
        container
        sx={{
          backgroundColor: "#100F10",
          color: "white",
          margin: "auto",
          py:'1rem'
        }}
        className="movieGrid"
      >
        <Grid item xs={6} sm={3}>
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline", textDecorationColor: "#8739F9" }}
            textAlign={"center"}
          >
            Movie
          </Typography>
          <Typography variant="body2" sx={{ py: "10px" }}>
            Here you can check all the details of the movies
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} alignContent={"center"}>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#8739F9",
              textAlign: "center",
            }}
          >
            Genres
          </Typography>
          {genres &&
            genres.map((genre, index) => (
              <Box key={index} textAlign={"center"}>
                <Typography
                  variant="body2"
                  sx={{ py: "10px" }}
                  // className="links"
                >
                  {genre.name}
                </Typography>
              </Box>
            ))}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#8739F9",
              textAlign: "center",
            }}
          >
            Useful Links
          </Typography>

          {usefulLinks &&
            usefulLinks.map((link, index) => (
              <Box key={index} textAlign={"center"}>
                <Typography variant="body2" sx={{ py: "10px" }} key={index}>
                  {link.name}
                </Typography>
              </Box>
            ))}
        </Grid>

        <Grid item xs={6} sm={3}>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#8739F9",
              textAlign: "center",
            }}
          >
            Contact
          </Typography>
          {contactDetails &&
            contactDetails.map((contact, index) => (
              <Box key={index}>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", py: "10px", justifyContent:'center' }}
                  key={index}
                >
                  {contact.icon}
                  {contact.name}
                </Typography>
              </Box>
            ))}
        </Grid>
      </Grid>
      <Box
        width={"100%"}
        sx={{
          backgroundColor: "#17273D",
          display: "flex",
          justifyContent: "center",
          py: "10px",
          color: "white",
        }}
      >
        <CopyrightIcon />
        <Typography fontSize={"15px"}> 2023.Copyright</Typography>
      </Box>
    </>
  );
};

export default Footer;
