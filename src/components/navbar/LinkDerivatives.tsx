import { Link } from "react-router-dom";
import AltRouteIcon from "@mui/icons-material/AltRoute";

const LinkDerivatives = () => {
  return (
    <Link to="/tuletiskihid" title="Tuletiskihid">
      <AltRouteIcon fontSize="large" sx={{ color: "white" }} />
    </Link>
  );
};

export default LinkDerivatives;
