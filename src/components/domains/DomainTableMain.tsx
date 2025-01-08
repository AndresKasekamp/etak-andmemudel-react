import Paper from "@mui/material/Paper";
import DomainTable from "./DomainTable";
import { DomainTableMainProps } from "../../interfaces/interfaces";
import { Container } from "@mui/material";

export const DomainTableMain: React.FC<DomainTableMainProps> = ({
  domains,
}) => {
  return (
    <Container
      id="domain"
      component={Paper}
      sx={{
        maxWidth: {
          xs: "lg", // For extra small and small screens, max width is "lg"
          xl: "xl", // For extra large screens, max width is "xl"
        },
        margin: "auto", // Center the table
        marginTop: 2,
        marginBottom: 2,
        display: "flex",
        alignItems: "start",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {domains.map((domain, idx) => (
        <DomainTable key={idx} domain={domain}></DomainTable>
      ))}
    </Container>
  );
};
