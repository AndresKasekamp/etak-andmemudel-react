import { Box, Paper, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { TableProps, ResourcesTableProps } from "../interfaces/interfaces";
import { FrontPageTableColor } from "../data/colors";

const HorizontalList = ({ row }: { row: TableProps }) => {
  const { objectName, dataTypeClass, itemNames } = row;

  return (
    <Box
      component={Paper}
      elevation={2}
      sx={{
        p: { xs: 0.5, sm: 2 },
        mb: 2,
        backgroundColor: FrontPageTableColor,
      }}
    >
      {/* Title Section */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        {objectName}
      </Typography>

      {/* Horizontal List */}
      <Box

        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {itemNames.map((item) => (
          <RouterLink  key={item.fcName} to={`${dataTypeClass}/${item.fcName}`}>
            <ListItemButton
              component={Link}
              sx={{
                color: "#797C7F",
                m: 0.5,
                border: "1px solid lightgray", // Add a light gray border
                borderRadius: 1, // Optional: Add rounded corners
                "&:hover": {
                  borderColor: "gray", // Optional: Change border color on hover
                },
              }}
            >
              <ListItemText primary={item.fcName} />
            </ListItemButton>
          </RouterLink>
        ))}
      </Box>
    </Box>


  );
};

export default function ResourcesTable({ data }: ResourcesTableProps) {
  return (
    <Box>
      {data.map((row) => (
        <HorizontalList key={row.objectName} row={row} />
      ))}
    </Box>
  );

}
