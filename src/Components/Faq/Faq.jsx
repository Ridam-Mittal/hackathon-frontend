import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Faq.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
  borderBottomLeftRadius: theme.spacing(2),
  borderBottomRightRadius: theme.spacing(2),

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
  borderBottomLeftRadius: theme.spacing(2),
  borderBottomRightRadius: theme.spacing(2),
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="faq-heading">
        <h2 
          style={{ textAlign: "center", fontSize: "2.5rem", color: "",fontFamily:"Fahkwang" }}
        >
          CUSTOMER QUERIES
        </h2>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem",fontFamily:"Helvetica" ,fontWeight:"Bold"}} className="faq-que">
              What is CARBONMITRA, and how can it help my coal mining operation?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8, fontFamily:"Helvetica",  }}>
              CARBONMITRA is a web application designed to assist coal mining operations in reducing carbon emissions. It allows users to input key data such as net emissions, location, and production quantity, and provides tailored strategies for achieving carbon neutrality, along with cost estimates.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              style={{ height: "5rem",backgroundColor:"#e6c7eb" }}
            >
              <Typography style={{ fontSize: "1.5rem" ,fontWeight:"Bold"}} className="faq-que">
              How does CARBONMITRA calculate carbon reduction strategies?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
              CARBONMITRA integrates advanced algorithms and AI-driven analysis to evaluate your mining data. It considers various factors like current emission levels, industry best practices, and available carbon offset methods to suggest actionable strategies for reducing your carbon footprint.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem",fontWeight:"Bold" }} className="faq-que">
              Is my data secure with CARBONMITRA?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
              Yes, CARBONMITRA prioritizes data security and privacy. We implement robust encryption and follow industry standards to ensure that all user data is protected against unauthorized access and breaches.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="showcasing-join" style={{ marginTop: "6rem" }}>
        <h2 className="having-que">For More Queries</h2>
        <div className="join-content">
        <h2><a href="mailto:contactus@carbonmitra.com">contactus@carbonmitra.com</a></h2>
          <lord-icon
            src="https://cdn.lordicon.com/whtfgdfm.json"
            trigger="hover"
            colors="primary:#000000"
          ></lord-icon>
        </div>
      </div>
    </div>
  );
}
