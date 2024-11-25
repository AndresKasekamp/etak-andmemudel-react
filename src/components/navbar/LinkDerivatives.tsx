import { Link } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const LinkDerivatives = () => {
  return (
    <Link to="/tuletiskihid" title="Tuletiskihid">
      <PublishedWithChangesIcon fontSize="large" sx={{ color: "white" }} />
    </Link>
  );
};

export default LinkDerivatives;
