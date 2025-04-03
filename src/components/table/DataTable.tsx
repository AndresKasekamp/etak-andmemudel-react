import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { HashLink } from "react-router-hash-link";

import { DetailViewLink } from "../DetailViewLink.tsx";

import {
  bgColor,
  determineDataType,
  CategoryKey,
} from "../../utils/translate.ts";

import RegisterHyperLink from "../helpers/RegisterHyperLink.tsx";

import ValueChartBar from "../ValueChartBar.tsx";

import { useTranslation } from "react-i18next";

import { Description, DataTableProps } from "../../interfaces/interfaces.tsx";

import { useState } from "react";

import { IoBarChartSharp } from "react-icons/io5";

import { IconContext } from "react-icons";

import { AppBarColor } from "../../data/colors.ts";

export const DataTable = ({
  pathNameEnd,
  locationPathName,
  groupName,
  fcName,
  elements,
}: DataTableProps) => {
  const { t, i18n } = useTranslation();

  const appLang: keyof Description = i18n.language;

  // State for managing the modal
  const [openRow, setOpenRow] = useState<number | null>(null); // To track the open row index

  const handleOpen = (index: number): void => {
    setOpenRow(index); // Open the modal for the clicked row
  };

  const handleClose = (): void => {
    setOpenRow(null); // Close the modal
  };

  return (
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      {pathNameEnd === "all" ? (
        <caption>
          <DetailViewLink
            locationPathName={locationPathName}
            group={groupName}
            table={fcName}
          />
        </caption>
      ) : null}

      <TableHead>
        <TableRow
          sx={{
            backgroundColor: "appColor.tableHeaderColor",
          }}
        >
          <TableCell>{t("fieldName")}</TableCell>
          <TableCell>{t("fieldType")}</TableCell>
          <TableCell>{t("fieldDomain")}</TableCell>
          <TableCell>{t("fieldDesc")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {elements.map((row, index) => (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              backgroundColor: bgColor[row.meta_type as CategoryKey],
            }}
          >
            <TableCell
              component="th"
              scope="row"
              onClick={() =>
                Object.entries(row.chart_values).length !== 0
                  ? handleOpen(index)
                  : undefined
              }
              sx={{
                cursor:
                  Object.entries(row.chart_values).length !== 0
                    ? "pointer"
                    : "default",
              }}
            >
              {row.name}
              {Object.entries(row.chart_values).length !== 0 && (
                <IconContext.Provider
                  value={{ color: AppBarColor, className: "global-class-name" }}
                >
                  {" "}
                  <IoBarChartSharp />
                </IconContext.Provider>
              )}
            </TableCell>

            <ValueChartBar
              open={openRow === index}
              handleClose={handleClose}
              row={row}
            />

            <TableCell>{determineDataType(row.type, appLang)}</TableCell>

            <TableCell>
              <HashLink smooth to={`#${row.domain}`}>
                {row.domain}
              </HashLink>
            </TableCell>

            <TableCell>
              {row.link ? (
                <RegisterHyperLink
                  link={row.link}
                  desc={row.desc[appLang]}
                ></RegisterHyperLink>
              ) : (
                row.desc[appLang]
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
