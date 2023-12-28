
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectComponent = ({ nameInput, form, changed, setForm }) => {
    const [age, setAge] = React.useState('');
    const [ageArray, setAgeArray] = React.useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
        changed(event);
        setForm((prevForm) => ({ ...prevForm, [nameInput]: event.target.value }));

    };

    React.useEffect(() => {
        agesIteration()
    }, [])



    const agesIteration = () => {

        let newArray = [{ label: 'milenials', value: 1 }];
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
        console.log('a', ageArray);

    }
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">Generación</InputLabel>
                <Select native defaultValue="" name='age' id="grouped-native-select" label="Grouping" value={age}  onChange={handleChange}>
                    <option aria-label="None" value="" />
                    <optgroup label="1946-1964">
                        <option value={80}>Baby Bommers</option>
                    </optgroup>
                    <optgroup label="1965-1980">
                        <option value={60}>Generación X</option>
                    </optgroup>
                    <optgroup label="1981-1996">
                        <option value={40}>Milenials Y</option>
                    </optgroup>
                    <optgroup label="1997-2012">
                        <option value={20}>Centenials Z</option>
                    </optgroup>
                    <optgroup label="2013-2025">
                        <option value={0}>Generación Alfa T</option>
                    </optgroup>
                </Select>
            </FormControl>
            
        </div>
    )
}
