import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

import { FileFormatProps } from "../../interfaces/interfaces";


// TODO võibolla teha buttongroupina
export const FileFormat = ({info, format}: FileFormatProps) => {
  return (
    <Tooltip title={info} placement="bottom">
      <Button color="secondary" variant="contained" size="small" sx={{ m: 0.5 }}>
        {format}
      </Button>
    </Tooltip>
  );
};
