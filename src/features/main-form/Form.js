import React, { useState } from "react";

import styles from "./Form.module.css";
import { TextField, Button } from "@mui/material";
import { MonitoringSection } from "./MonitoringSections";

export function MainForm({ users, setusers }) {
  const [interventionCodes, setInterventionCodes] = useState([]);

  const drop_in = [
    { code: "B1", info: "General advice & support" },
    { code: "B2", info: "Access food/drink" },
    { code: "B3", info: "Access computers" },
    { code: "B4", info: "Support with accessing computers" },
    { code: "B5", info: "General social interaction" },
    { code: "B6", info: "Screening Assessment" },
    { code: "B7", info: "Comprehensive assessment" },
    { code: "B8", info: "Cooked meal" },
  ];

  const groups_shared = [
    { code: "C1", info: "Physical health" },
    { code: "C2", info: "Mental health" },
    { code: "C3", info: "Wellbeing/self-esteem/social" },
    { code: "C4", info: "Life Skills/Positive Activity" },
    { code: "C5", info: "Emplyabillity/Job Seach" },
    { code: "C6", info: "Saftey" },
    { code: "C7", info: "Service user group/user involvement" },
    { code: "C8", info: "Referral to volunteering/education" },
  ];

  const drugs_alcohol = [
    { code: "D1", info: "General advice & information" },
    { code: "D2", info: "Safer injecting advice" },
    { code: "D3", info: "Overdose prevention advice" },
    { code: "D4", info: "BBV advice" },
    { code: "D5", info: "Needle exchange" },

    {
      code: "D7",
      info: "Support accessing other services, including advocacy",
    },
    { code: "D9", info: "Adult safeguarding issues" },
    { code: "D10", info: "Recovery support" },
    { code: "D11", info: "Recovery promotion" },
    { code: "D12", info: "Support to access treatment" },
  ];

  const handleSubmit = () => {
    return false;
  };

  const setCodes = (e) => {
    const option = e.target.value;
    if (option === "drop_in") {
      setInterventionCodes(drop_in);
    } else if (option === "groups_shared") {
      setInterventionCodes(groups_shared);
    } else if (option === "drugs_alcohol") {
      setInterventionCodes(drugs_alcohol);
    }
  };

  const handleChange = (e, key) => {
    const input = e.target.value;
    // const user = users.filter()
    // user.key = input;
  };

  return (
    <div className={styles.form}>
      <form onSubmit={() => handleSubmit()}>
        <div className={styles.container}>
          <h2> Observations</h2>
          <TextField
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange(e)}
          >
            THIS WILL BE TEXT AREA
          </TextField>
        </div>

        <MonitoringSection />

        <div className={styles.container}>
          <h2>Consumables</h2>
          <div className={styles.options_container}>
            <Button variant="contained">Option 1</Button>
            <Button variant="contained">Option 2</Button>
            <Button variant="contained">Option 3</Button>
            <Button variant="contained">Option 4</Button>
            <Button variant="contained">Option 5</Button>
            <Button variant="contained">Option 6</Button>
          </div>
        </div>

        <div className={styles.container}>
          <h2>Intervention Codes</h2>

          <div className={styles.interventionCodes}>
            <div className={styles.interventionOptions}>
              <Button
                variant="contained"
                size="small"
                onClick={(e) => setCodes(e)}
                value="drop_in"
              >
                Drop In
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="groups_shared"
                size="small"
              >
                Groups Shared
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="drugs_alcohol"
              >
                Drugs & Alcohol
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="violence_women"
              >
                Vilolence against women
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="family_relationship"
              >
                Family & Relationships
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="trafficking"
              >
                Trafficking & Modern Slavery
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="sexual_health"
              >
                Sexual Health
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="physical_health"
              >
                Physical Health
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="mental_health"
              >
                Mental & Emotional Health
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="housing_homelessness"
              >
                Housing & Homelessness
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="saftey"
              >
                Saftey
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="criminal_justice"
              >
                Criminal Justice
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="financial_consumer"
              >
                Financial Consumer
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="exiting"
              >
                Exiting
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="onward_refferal"
              >
                Onward Refferals
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="hardship"
              >
                Hardship
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="immigration_support"
              >
                Immigration Supprt
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="peer_mentoring"
              >
                Peer Mentoring
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="respite_room"
              >
                Respite Room
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="cold_weather"
              >
                Cold Weather Support
              </Button>
              <Button
                variant="contained"
                onClick={(e) => setCodes(e)}
                value="criminal_justice"
              >
                Criminal Justice
              </Button>
            </div>
            <div className={styles.interventionItems}>
              {interventionCodes
                ? interventionCodes.map((item) => (
                    <Button variant="contained" size="small">
                      {item.info}
                    </Button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
