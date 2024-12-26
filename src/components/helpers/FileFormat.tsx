import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

import { FileFormatProps } from "../../interfaces/interfaces";

export const FileFormat = ({ info, format }: FileFormatProps) => {
  return (
    <Tooltip title={info} placement="bottom">
      <Button>{format}</Button>
    </Tooltip>
  );
};
