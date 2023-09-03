import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import "../App.css";
import { Formik } from "formik";
import Grid from "@mui/material/Grid"
import { registerInterface } from "../interface/global.interafce";
import { registerValidationSchema } from "../schema/ValidationSchema";

const Register = () => {
  const initialValues: registerInterface = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Box sx={{ background: "#233142", color: "white", height: "100vh" }}>
        <Box
          sx={{
            border: "1px solid",
            borderRadius: "12px",
            width: "25%",
            padding: "3em",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }: any) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Grid>
                    <FormLabel> Name</FormLabel>
                    <TextField
                      name="name"
                      id="name"
                      autoComplete="off"
                      size="small"
                      type="text"
                      placeholder="Enter Your  Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name ? (
                      <Typography sx={{ color: "red", fontSize: "small" }}>
                        {errors.name}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Box>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      name="email"
                      id="email"
                      autoComplete="off"
                      type="text"
                      size="small"
                      placeholder="Enter your Email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email ? (
                      <Typography sx={{ color: "red", fontSize: "small" }}>
                        {errors.email}
                      </Typography>
                    ) : null}
                  </Box>
                  <Box>
                    <FormLabel>Password</FormLabel>
                    <TextField
                      name="password"
                      id="password"
                      autoComplete="off"
                      size="small"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Enter Password"
                    />
                    {errors.password ? (
                      <Typography sx={{ color: "red", fontSize: "small" }}>
                        {errors.password}
                      </Typography>
                    ) : null}
                  </Box>
                  <Box>
                    <FormLabel>Confirm Password</FormLabel>
                    <TextField
                      name="confirmPassword"
                      id="confirmPassword"
                      autoComplete="off"
                      size="small"
                      placeholder="Enter Password"
                      onChange={handleChange}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword ? (
                      <Typography sx={{ color: "red", fontSize: "small" }}>
                        {errors.confirmPassword}
                      </Typography>
                    ) : null}
                  </Box>

                  <Button
                    variant="contained"
                    sx={{ width: "50%", marginTop: "6%", marginBottom: "10px" }}
                    type="submit"
                  >
                    Register
                  </Button>
                </form>
              );
            }}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default Register;
