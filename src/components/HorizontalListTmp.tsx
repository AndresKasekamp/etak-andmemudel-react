import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const HorizontalList = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ mb: 2, textAlign: "center" }}
      >
        My Horizontal List
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          overflowX: "auto",
          padding: 0,
        }}
      >
        {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, index) => (
          <ListItem
            key={index}
            sx={{
              flex: "0 0 auto",
              textAlign: "center",
              padding: "8px",
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HorizontalList;
