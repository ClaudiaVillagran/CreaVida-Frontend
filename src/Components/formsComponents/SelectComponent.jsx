
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

export const SelectComponent = ({ nameInput, form, changed, setForm }) => {
    const [age, setAge] = useState('');
    const [ageArray, setAgeArray] = useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
        changed(event);
        setForm((prevForm) => ({ ...prevForm, [nameInput]: event.target.value }));

    };

    useEffect(() => {
        agesIteration()
    }, [])



    const agesIteration = () => {

        let newArray = [{label:'milenials', value:1}];
        for (let index = 0; index < 10; index++) {
            newArray = [
                ...newArray,
                {
                    label: `${index * 10}-${index * 10 + 9}`,
                    value: (index + 1) * 10
                },
            ];
        }
        setAgeArray(newArray);
        console.log('a',ageArray);

    }
    return (
        <Box sx={{
            width: '57ch',
            '& .MuiInputBase-input': {
                fontSize: '16px',
            },
            '& .MuiInputLabel-root': {
                fontSize: '16px',
            },
        }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="success">Rango etario</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    color="success"
                    name='age'
                >

                    {ageArray.map((age, index) => (
                        <MenuItem value={age.value} key={index} >
                            {age.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
