import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, MouseEvent } from "react";

export default function BasicMenu() {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        startIcon={<MenuIcon />}
        size="large"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      ></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" title={t("nameLevituum")}>
            {t("nameLevituum")}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Link to="/3d" title={t("name3DLayers")}>
            {t("name3DLayers")}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Link to="/tuletiskihid" title={t("nameDerivatives")}>
            {t("nameDerivatives")}
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}