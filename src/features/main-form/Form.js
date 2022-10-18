import styles from "./Form.module.css";

import {
  FormControlLabel,
  TextField,
  Button,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

export function MainForm(users, setUsers) {
  const handleSubmit = () => {
    return false;
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

        <div className={styles.container}>
          <h2>Monitoring Form</h2>

          <div className={styles.options_container}>
            <TextField variant="outlined" label="area" />

            <Select variant="outlined" label="accom">
              <MenuItem>NFA</MenuItem>
              <MenuItem>Soft Surfing</MenuItem>
              <MenuItem>ABEN</MenuItem>
              <MenuItem>Private Rented</MenuItem>
              <MenuItem>Housing Assoc</MenuItem>
            </Select>

            <TextField variant="outlined" label="Type of sex work" />
            <TextField variant="outlined" label="Nationality" />
            <TextField variant="outlined" label="Ethnicity" />
            <TextField variant="outlined" label="Gender" />
          </div>
        </div>

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
              <Button variant="contained">Drop In</Button>
              <Button variant="contained">Groups Shared</Button>
              <Button variant="contained">Drugs & Alcohol</Button>
              <Button variant="contained">Vilolence against women</Button>
              <Button variant="contained">Family & Relationships</Button>
              <Button variant="contained">Trafficking & Modern Slavery</Button>
              <Button variant="contained">Sexual Health</Button>
              <Button variant="contained">Physical Health</Button>
              <Button variant="contained">Mental & Emotional Health</Button>
              <Button variant="contained">Housing & Homelessness</Button>
              <Button variant="contained">Saftey</Button>
              <Button variant="contained">Criminal Justice</Button>
              <Button variant="contained">Financial Consumer</Button>
              <Button variant="contained">Exiting</Button>
              <Button variant="contained">Onward Refferals</Button>
              <Button variant="contained">Hardship</Button>
              <Button variant="contained">Immigration Supprt</Button>
              <Button variant="contained">Peer Mentoring</Button>
              <Button variant="contained">Respite Room</Button>
              <Button variant="contained">Cold Weather Support</Button>
              <Button variant="contained">Criminal Justic</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
