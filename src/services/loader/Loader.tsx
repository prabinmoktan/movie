import './Loader.css'
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <>
    <Box margin={'auto'} py={3}>

      <div className="spinner">
        <div className="spinner1"><p>Loading...</p></div>
      </div>
    </Box>
    </>
  );
};

export default Loader;
