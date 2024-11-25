import { Link } from "react-router-dom";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

const Link3D = () => {
  return (
    <Link to="/3d" title="3D kihid">
      <ThreeDRotationIcon fontSize="large" sx={{  color: "white" }} />
    </Link>
  );
};

export default Link3D;
