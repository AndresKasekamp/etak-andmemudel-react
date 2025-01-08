import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface SpinnerSize {
  wfsData?: boolean; // Made optional for flexibility
}

export default function LoadingSpinner({ wfsData = false }: SpinnerSize) {
  // Define shared styles for reuse
  const centeredBoxStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Center vertically for full screen
    width: "100vw", // Center horizontally for full screen
  };

  const defaultBoxStyles = {
    display: "flex",
  };

  return (
    <Box sx={wfsData ? defaultBoxStyles : centeredBoxStyles}>
      <CircularProgress
        size={wfsData ? 20 : 80}
        sx={{ color: "appColor.landBoardMain" }}
      />
    </Box>
  );
}
