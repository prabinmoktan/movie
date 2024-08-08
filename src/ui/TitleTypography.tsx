import { Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { titleTypes } from "../interface/global.interafce";

const TitleTypography:React.FC<titleTypes> = ({ title, variant, ...rest }) => {
  const isMobileScreen = useMediaQuery({ maxWidth: 600 });
  return (
    <>
      <Typography variant={isMobileScreen ? 'h6' : 'h4'} {...rest}>{title}</Typography>
    </>
  );
};

export default TitleTypography;
