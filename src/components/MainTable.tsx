import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { TableProps } from "../types/interfaces";
import Paper from "@mui/material/Paper";

const MainTable = ({
  backgroundColor,
  objectName,
  itemNames,
  dataTypeClass,
}: TableProps) => {
  return (
    <List
    component={Paper}
      sx={{
        backgroundColor: "#F5FAFA",
        borderRadius: "5px",
        m: 1,
        position: 'relative',
      }}
    >

      <Typography variant="h4" sx={{ color: "#797C7F", paddingLeft: "1rem", paddingRight: "1rem"  }} gutterBottom>
        {objectName}
      </Typography>

      <div style= {{border: "1px solid #4F4F4F"}}></div>


      {itemNames.map((item) => (
        <ListItem disablePadding key={item.fcName}>
          <RouterLink to={`${dataTypeClass}/${item.fcName}`}>
            <ListItemButton component={Link} sx={{ color: "#797C7F" }}>
              <ListItemText primary={item.fcName} />
            </ListItemButton>
          </RouterLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MainTable;
