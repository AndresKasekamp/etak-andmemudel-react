import { Box, Paper, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { TableProps, ResourcesTableProps } from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";

const HorizontalList = ({ row }: { row: TableProps }) => {
  const { objectName, dataTypeClass, itemNames } = row;

  const { t } = useTranslation();

  return (
    <Box
      component={Paper}
      elevation={2}
      sx={{
        p: { xs: 0.5, sm: 2 },
        mb: 2,
        backgroundColor: "appColor.frontPageTableColor",
      }}
    >
      {/* Title Section */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        {t(objectName)}
      </Typography>

      {/* Horizontal List */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {itemNames.map((item) => (
          <RouterLink key={item.fcName} to={`${dataTypeClass}/${item.fcName}`}>
            <ListItemButton
              component={Link}
              sx={{
              color: "appColor.landBoardMain",
              m: 0.5,
              px: 1,
              py: 0.5,
              border: "1px solid #b4b4b4", // Add a light gray border
              borderRadius: 1, // Optional: Add rounded corners
              "&:hover": {
              borderColor: "gray", // Optional: Change border color on hover
              },
              }}
            >
              <ListItemText
              primaryTypographyProps={{ fontWeight: 500 }} // Reduce text boldness
              primary={item.fcName}
              />
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
