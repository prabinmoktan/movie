import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { cardTypes } from "../../interface/global.interafce";
import "./card.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Card: React.FC<cardTypes> = ({ onClick, image, title, details, className, ...rest }) => {
  return (
    <>
      <div
        className="card"
        {...rest}
      >
        <CardMedia
          component={"img"}
          image={image}
          sx={{ objectFit: "cover" }}
        />
        <Box className="overlay">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{details}</Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton
            onClick={onClick}
              color="inherit"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "grey",
                  border: "50%",
                },
                transition: "transform 0.7s ease",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Card;
