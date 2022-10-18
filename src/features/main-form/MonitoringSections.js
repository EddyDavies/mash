import { TextField, Select, MenuItem } from "@mui/material";
import styles from "./Form.module.css";
import Autocomplete from '@mui/material/Autocomplete';
import CountrySelect from "./components/CountrySelect";

export function MonitoringSection() {

  const HousingItems = [
    { label: 'NFA' },
    { label: 'Soft Surfing' },
    { label: 'ABEN' },
    { label: 'Private Rented' },
    { label: 'Housing Association' }
  ];
  const SexWorkItems = [
    { label: 'Webcam modeling and pornographic modelling' },
    { label: 'Stripper' },
    { label: 'Naked butler' },
    { label: 'Pole dancing' },
    { label: 'Phone sex operators' },
    { label: 'Go-go dancing' },
    { label: 'Erotic dancing' },
    { label: 'Neo-burlesque' },
    { label: 'Twerking' },
    { label: 'Striptease/Table dance' },
    { label: 'Erotic massage' },
    { label: 'Grinding' },
    { label: 'Lap dancing' },
    { label: 'Pornographic film acting' },
    { label: 'Peepshow performers' },
    { label: 'Escort services/Girlfriend experience/Sugar baby' },
    { label: 'Sexual surrogates' },
    { label: 'Street prostitution' },
    { label: 'Indoor prostitution' },
  ];
  const GenderItems = [
    { label: 'Female' },
    { label: 'Male' },
    { label: 'Transgender Female' },
    { label: 'Transgender Male' },
    { label: 'Non-Binary' },
    { label: 'Prefer not to state' },
    { label: 'Other' },
  ];
  const EthnicityItems = [
    { label: 'Asian or Asian British' },
    { label: 'Indian' },
    { label: 'Pakistani' },
    { label: 'Bangladeshi' },
    { label: 'Chinese' },
    { label: 'Any other Asian background' },
    { label: 'Black, Black British, Caribbean or African' },
    { label: 'Caribbean' },
    { label: 'African' },
    { label: 'Any other Black, Black British, or Caribbean background' },
    { label: 'Mixed or multiple ethnic groups' },
    { label: 'White and Black Caribbean' },
    { label: 'White and Black African' },
    { label: 'White and Asian' },
    { label: 'Any other Mixed or multiple ethnic background' },
    { label: 'White' },
    { label: 'English, Welsh, Scottish, Northern Irish or British' },
    { label: 'Irish' },
    { label: 'Gypsy or Irish Traveller' },
    { label: 'Roma' },
    { label: 'Any other White background' },
    { label: 'Other ethnic group' },
    { label: 'Arab' },
    { label: 'Any other ethnic group' },
  ];
  const MancAreas = [
    { label: 'Bolton' },
    { label: 'Bury' },
    { label: 'Oldham' },
    { label: 'Rochdale' },
    { label: 'Stockport' },
    { label: 'Tameside' },
    { label: 'Trafford' },
    { label: 'Wigan' },
    { label: 'Manchester' },
    { label: 'Salford' },
  ];
  
  return (
    <div className={styles.container}>
      <h2>Monitoring Form</h2>
      <div className={styles.options_container}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={HousingItems}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={"Housing Status"} />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={SexWorkItems}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={"Type of Sex Work"} />}
        />
        <Autocomplete
           disablePortal
           id="combo-box-demo"
           options={GenderItems}
           sx={{ width: 300 }}
           renderInput={(params) => <TextField {...params} label={"Gender"} />}
        />
        <Autocomplete
           disablePortal
           id="combo-box-demo"
           options={EthnicityItems}
           sx={{ width: 300 }}
           renderInput={(params) => <TextField {...params} label={"Ethnicity"} />}
        />
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={MancAreas}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={"Manchester Area"} />}
        />
        <CountrySelect />
      </div>
    </div>
  );
}
export default MonitoringSection;
