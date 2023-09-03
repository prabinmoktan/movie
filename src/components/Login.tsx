import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import "../App.css";
import EastIcon from "@mui/icons-material/East";
import { Form } from "formik";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')",
          height: "100vh",
          width: "100%",
          opacity: 0.8,
          backgroundPositionX: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            textAlign: "center",
            width: "30%",
            maxWidth: "sm"
          }}
          className="{[classes.glass, classes.glasscard]}"
        >
          <form>
            <Typography sx={{ color: "white" }} variant="h5">
             
              Login Page
            </Typography>
            <Box sx={{ padding: "2em" }}>
              <TextField
                placeholder="Name"
                size="small"
                label="Name"
                sx={{ width: "100%" }}
              />
              <TextField
                label="Password"
                size="small"
                sx={{ width: "100%", marginTop: "5%" }}
              />
              <Button variant="contained" sx={{ marginTop: "3em" }} >
                Log in
              </Button>
            </Box>
          </form>
          <Typography sx={{ color: "white" }} fontSize={'15px'}>
            Dont have an account?
            <Link href="/register" sx={{ marginBottom: "20px" }} >
              Register here <EastIcon />
             
            </Link>
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
