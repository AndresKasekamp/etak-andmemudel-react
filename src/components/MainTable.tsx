import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { TableProps } from "../types/interfaces";

const MainTable = ({
  backgroundColor,
  objectName,
  itemNames,
  dataTypeClass,
}: TableProps) => {
  return (
    <List
      sx={{
        backgroundColor,
        padding: "1rem",
        borderRadius: "5px",
        m: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {objectName}
      </Typography>

      {itemNames.map((item) => (
        <ListItem disablePadding key={item}>
          <RouterLink to={`${dataTypeClass}/${item}`}>
            <ListItemButton component={Link} sx={{ color: "white" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </RouterLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MainTable;
