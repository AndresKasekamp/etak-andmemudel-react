import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

import { FrontPageTableColor } from "../data/colors";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { TableProps, ResourcesTableProps } from "../interfaces/interfaces";

function FeatureClassRow(props: { row: TableProps }) {
  const { row } = props;
  const [open, setOpen] = useState(true);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ fontSize: "1.25rem" }}>
          {row.objectName}
        </TableCell>
      </TableRow>
      <TableRow
        sx={{
          backgroundColor: FrontPageTableColor,
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.itemNames.map((item) => (
                    <ListItem disablePadding key={item.fcName}>
                      <RouterLink to={`${row.dataTypeClass}/${item.fcName}`}>
                        <ListItemButton
                          component={Link}
                          sx={{ color: "#797C7F" }}
                        >
                          <ListItemText primary={item.fcName} />
                        </ListItemButton>
                      </RouterLink>
                    </ListItem>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function ResourcesTable({ data }: ResourcesTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {data.map((row) => (
            <FeatureClassRow key={row.objectName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
