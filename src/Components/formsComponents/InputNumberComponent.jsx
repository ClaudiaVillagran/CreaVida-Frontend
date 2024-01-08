import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const InputNumberComponent = ({ nameLabel, nameType, nameInput, form, changed, setForm }) => {

    const [phoneNumber, setPhoneNumber] = useState('');


    const handlePhoneNumberChange = (event) => {
        const inputValue = event.target.value;

        const regex = /^[0-9+]*$/;

        if (regex.test(inputValue) || inputValue === '') {
            setPhoneNumber(inputValue);
        }
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;

        // Realiza conversiones de tipo si es necesario
        const updatedValue =parseFloat(value) ;

        changed(event);
        setForm((prevForm) => ({ ...prevForm, [nameInput]: updatedValue }));
    };

    return (
        <Box
            component="form"
            sx={{
                width: '20vw', minWidth: 200, margin: '0 auto',
                '& > :not(style)': { m: 1 },
                '& .MuiInputBase-input': {
                    fontSize: '16px',
                },
                '& .MuiInputLabel-root': {
                    fontSize: '16px',
                },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                sx={{ width:'100%'}}
                label={nameLabel === 'Monto a donar' ? `${nameLabel} (CLP $)` : nameLabel}
                variant="standard"
                type={nameType}
                color="success"
                value={phoneNumber}
                onChange={(e) => {
                        handlePhoneNumberChange(e);
                        handleFieldChange(e);
                    }}
                name={nameInput}
                
            />
        </Box>
    )
}
