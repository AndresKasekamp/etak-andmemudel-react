import { Link } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const LinkDerivatives = () => {
  return (
    <Link to="/tuletiskihid">
      <PublishedWithChangesIcon fontSize="large" sx={{ color: "white" }} />
    </Link>
  );
};

export default LinkDerivatives;
