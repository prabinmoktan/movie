import { Button, Grid, Typography } from "@mui/material";
import FormTextField from "../../ui/FormTextField";
import "./login.css";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { successToast } from "../../services/Toastify.service";
// import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess, userLoggedIn } from "../redux/auth.slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onsubmit = async (data: any) => {
    try {
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        
        if (response) {
            console.log(response);
            // Correctly access the accessToken
            // @ts-ignore
            dispatch(loginSuccess({ accessToken: response.user.accessToken, displayName: response.user.displayName })); // Fixed the typo here
            dispatch(userLoggedIn());
            successToast('Logged in Successfully');
            navigate('/');
        }
    } catch (error) {
        console.error("Login failed", error);
        // Handle error (e.g., show a toast notification)
    }
};
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onsubmit)}>
        <div className="gridbox">
          <Grid
            container
            
            px={4}
            justifyContent={"center"}
            gap={2}
          >
            <div style={{  textAlign: "center" }}>
              <Typography variant="h6" color={"black"}>
                Login
              </Typography>
            </div>
            <Grid item container>
              <FormTextField
                name="email"
                size="small"
                control={control}
                label="Email"
                error={!!errors.email}
                // @ts-ignore
                helperText={errors.email?.message ?? ""} // Ensure it's a string
              />
            </Grid>
            <Grid item container>
              <FormTextField
                name="password"
                size="small"
                control={control}
                label="Password"
                error={!!errors.password}
                // @ts-ignore
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid container justifyContent={"center"}>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Grid>
            <Grid item container justifyContent={"flex-end"}>
              <Typography variant="caption" color={"black"}>
                Dont have an account?
                <Link to={"/register"} style={{ color: "black" }}>
                  Sign up Here.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
};

export default Login;
