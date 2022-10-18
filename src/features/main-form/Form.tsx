import styles from './Form.module.css';


import { FormControlLabel,TextField,Button,RadioGroup,Radio,Select,MenuItem,InputLabel } from '@mui/material';

export function MainForm() {




  return (
      <div className={styles.form}>
          <form> 


    <div className={styles.container}>
        <h2>Monitoring Form</h2>

        <div className={styles.options_container}>

    <TextField variant='outlined' label='area' />

    <Select variant='outlined' label='accom' >
    <MenuItem>NFA</MenuItem>
    <MenuItem>Soft Surfing</MenuItem>
    <MenuItem>ABEN</MenuItem>
    <MenuItem>Private Rented</MenuItem>
    <MenuItem>Housing Assoc</MenuItem>
    </Select>


    <TextField variant='outlined' label='Type of sex work' />
    <TextField variant='outlined' label='Nationality' />
    <TextField variant='outlined' label='Ethnicity' />
    </div>


</div>




          
       
            <div className={styles.container}>
                <h2>Consumables</h2>
                <div className={styles.options_container}>

                <Button variant='contained'>Option 1</Button>
                <Button variant='contained'>Option 2</Button>
                <Button variant='contained'>Option 3</Button>
                <Button variant='contained'>Option 4</Button>
                <Button variant='contained'>Option 5</Button>
                <Button variant='contained'>Option 6</Button>
                </div>

            </div>


            <div className={styles.container}>
         <h2> Observations</h2>
        <TextField variant='outlined' fullWidth>THIS WILL BE TEXT AREA</TextField>
    </div>

            <div className={styles.container}>
                <h2>Intervention Codes</h2>
                <div className={styles.radioContainer}>
                <RadioGroup row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />              
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                <FormControlLabel value="6" control={<Radio />} label="6" />
                <FormControlLabel value="7" control={<Radio />} label="7" />
                <FormControlLabel value="8" control={<Radio />} label="8" />
                <FormControlLabel value="9" control={<Radio />} label="9" />
                <FormControlLabel value="10" control={<Radio />} label="10" />

                </RadioGroup>
                </div>
            </div>
          </form>
      </div>
  );
}
