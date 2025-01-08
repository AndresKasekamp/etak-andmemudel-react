import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { RegisterHyperLinkProps } from "../../interfaces/interfaces";

const RegisterHyperLink = ({ link, desc }: RegisterHyperLinkProps) => {
  return (
    <Link
      href={link}
      underline="hover"
      color="inherit"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {desc}

      <LaunchIcon fontSize="small"></LaunchIcon>
    </Link>
  );
};

export default RegisterHyperLink;
