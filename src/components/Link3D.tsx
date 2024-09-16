import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

import cube3DImageSource from "../assets/cube-3d.svg";

const Link3D = () => {
  return (
    <Link to="/3d">
      <ThreeDRotationIcon fontSize='large' sx={{ mr: 2, color: 'white' }} />

    </Link>
  );
};

export default Link3D;
