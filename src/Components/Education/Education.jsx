import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import wave from "../../assets/images/wave.png";
import "./Education.css";
import nibm from "../../assets/images/eduLogo/nibm.png";
import apiit from "../../assets/images/eduLogo/apiit.png";
import udemy from "../../assets/images/eduLogo/udemy.png";
import Model from "../Model/Model";
import ComCeti from "../../assets/images/CetiAndTans/ComCeti.jpg";
import DipCeti from "../../assets/images/CetiAndTans/DipCeti.jpg";
import DipTra from "../../assets/images/CetiAndTans/DipTra.jpg";
import HndCet from "../../assets/images/CetiAndTans/HndCeti.jpg";
import HndTra from "../../assets/images/CetiAndTans/HndTra.jpg";
import BSc from "../../assets/images/CetiAndTans/apiit.png";
import reactCeti from "../../assets/images/CetiAndTans/react.jpg";
import js from "../../assets/images/CetiAndTans/js.jpg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 6,
            background: "#f9f9f9",
            marginTop: "1rem",
            borderRadius: "10px",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Education = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="fullEducation">
      {/* <img src={wave} alt="sgfs" className="eduWave" /> */}
      <span className="eduWord">Education Background</span>
      <div className="eduWrapper">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 5,
              borderColor: "#242D49",
              borderRadius: "5px ",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#242D49",
                  height: 8,
                  borderRadius: "5px 5px 0px 0px",
                },
              }}
            >
              <Tab
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    Certificate Level Course in <br /> Computer Science
                  </Typography>
                }
                {...a11yProps(0)}
                sx={{
                  fontWeight: "bold",
                  color: "#788097",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#ff4d20",
                  },
                }}
              />
              <Tab
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    Dip in <br /> Software Engineering
                  </Typography>
                }
                {...a11yProps(1)}
                sx={{
                  fontWeight: "bold",
                  color: "#788097",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#ff4d20",
                  },
                }}
              />
              <Tab
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    HND in <br /> software engineering
                  </Typography>
                }
                {...a11yProps(2)}
                sx={{
                  fontWeight: "bold",
                  color: "#788097",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#ff4d20",
                  },
                }}
              />
              <Tab
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    BSc Hons. in <br /> Computer Science
                  </Typography>
                }
                {...a11yProps(2)}
                sx={{
                  color: "#788097",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#ff4d20",
                  },
                }}
              />
              <Tab
                label="Udemy Courses"
                {...a11yProps(2)}
                sx={{
                  fontWeight: "bold",
                  color: "#788097",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#ff4d20",
                  },
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="cetiWrapper">
              {/* left */}
              <div className="eduLeft">
                <img src={nibm} alt="" />
              </div>

              {/* right */}
              <div className="eduRight">
                <span>
                  Certificate Level Course in Computer Science at NIBM Kandy.
                </span>

                <Model
                  cetificateName={"The Certificate of Computer Science"}
                  image1={ComCeti}
                />
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="cetiWrapper">
              {/* left */}
              <div className="eduLeft">
                <img src={nibm} alt="" />
              </div>

              {/* right */}
              <div className="eduRight">
                <span>Diploma in Software Engineering at NIBM Kandy.</span>
                <span>Final GPA - 3.98 out of 4.00</span>

                <Model
                  cetificateName={"Diploma in Software Engineering"}
                  image1={DipCeti}
                  image2={DipTra}
                />
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="cetiWrapper">
              {/* left */}
              <div className="eduLeft">
                <img src={nibm} alt="" />
              </div>

              {/* right */}
              <div className="eduRight">
                <span>
                  Highr National Diploma in Software Engineering at NIBM Kandy.
                </span>
                <span>Final GPA - 3.78 out of 4.00</span>

                <Model
                  cetificateName={"Diploma in Software Engineering"}
                  image1={HndCet}
                  image2={HndTra}
                />
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="cetiWrapper">
              {/* left */}
              <div className="eduLeft">
                <img src={apiit} alt="" />
              </div>

              {/* right */}
              <div className="eduRight">
                <span>BSc Hons. in Comptuer Science</span>
                <span>2nd Class : 1st Division</span>

                <Model
                  cetificateName={"Diploma in Software Engineering"}
                  image1={BSc}
                />
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <div className="cetiWrapper">
              {/* left */}
              <div className="eduLeft">
                <img src={udemy} alt="" />
              </div>

              {/* right */}
              <div className="eduRight">
                <span>React.JS Crash Course.</span>

                <Model
                  cetificateName={"Diploma in Software Engineering"}
                  image1={reactCeti}
                />
              </div>
              <div className="eduRight">
                <span>Javascript for beginners.</span>

                <Model
                  cetificateName={"Diploma in Software Engineering"}
                  image1={js}
                />
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Education;
