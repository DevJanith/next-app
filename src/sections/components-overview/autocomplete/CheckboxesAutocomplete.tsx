import { SyntheticEvent, useState } from 'react';

// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

// project import
import MainCard from 'components/MainCard';
import data from 'data/movies';

interface Option {
  key: number;
  label: string;
  year: number;
}

// ==============================|| AUTOCOMPLETE - CHECKBOXES ||============================== //

export default function CheckboxesAutocomplete() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (event: SyntheticEvent, newValue: Option[]) => {
    setSelectedOptions(newValue);
  };

  return (
    <MainCard title="Checkboxes">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={data}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        value={selectedOptions}
        onChange={handleChange}
        // @ts-ignore
        renderOption={({ key, ...props }, option, { selected }) => (
          <li key={key} {...props}>
            <Checkbox sx={{ mr: 1 }} checked={selected} />
            {option.label}
          </li>
        )}
        renderInput={(params) => <TextField {...params} placeholder="Checkboxes" />}
        sx={{
          '& .MuiOutlinedInput-root': {
            p: 1
          },
          '& .MuiAutocomplete-tag': {
            bgcolor: 'primary.lighter',
            border: '1px solid',
            borderColor: 'primary.light',
            '& .MuiSvgIcon-root': {
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark'
              }
            }
          }
        }}
      />
    </MainCard>
  );
}
