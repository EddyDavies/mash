import { TextField, Select, MenuItem } from "@mui/material";
import styles from "./Form.module.css";

export function MonitoringSection() {
  return (
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
  );
}
export default MonitoringSection;
