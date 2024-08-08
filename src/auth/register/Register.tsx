import { useForm } from "react-hook-form";
import FormTextField from "../../ui/FormTextField";
import { Button, Grid, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema/ValidationSchema";
import TitleTypography from "../../ui/TitleTypography";
import "./register.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

import { successToast } from "../../services/Toastify.service";

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    const userCredintial = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    {
      userCredintial && console.log(userCredintial);
      const user = userCredintial.user;
      await updateProfile(user, {
        displayName: data.firstName,
      });
      await sendEmailVerification(user);

      successToast("Account created successfully ");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container-box">
        <Grid container maxWidth={"500px"} textAlign={"center"} gap={2} px={2}>
          <Grid item container textAlign={"center"}>
            {/* @ts-ignore */}
            <TitleTypography title="Sign Up" sx={{ color: "black" }} />
          </Grid>
          <Grid item md={5.7} sm={6} xs={12}>
            <FormTextField
              name="firstName"
              size="small"
              control={control}
              label="First Name"
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.email?.message ?? ""} // Ensure it's a string
            />
          </Grid>

          <Grid item md={5.8} sm={6} xs={12}>
            <FormTextField
              name="lastName"
              size="small"
              control={control}
              label="Last Name"
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.lastName?.message ?? ""} // Ensure it's a string
            />
          </Grid>

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
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.password?.message ?? ""} // Ensure it's a string
            />
          </Grid>
          <Grid item container>
            <FormTextField
              name="confirmPassword"
              size="small"
              control={control}
              label="Confirm Password"
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.email?.message ?? ""} // Ensure it's a string
            />
          </Grid>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Grid container textAlign={"center"}>
            <Typography variant="caption" color={"black"} textAlign={"center"}>
              Already have an account?,
              <Link to={"/login"} style={{ color: "black" }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Register;
