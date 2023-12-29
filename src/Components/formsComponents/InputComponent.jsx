import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const InputComponent = ({ nameLabel, nameInput, form, changed, setForm }) => {

    return (
        <Box
            component="form"
            sx={{
                width: '20vw', minWidth: 200, margin: '0 auto', 
                '& > :not(style)': { m: 1,  },
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
            <TextField id="standard-basic"
                sx={{ width:'100%'}}
                name={nameInput} label={nameLabel}
                variant="standard"
                color="success"
                onChange={(e) => {
                    changed(e);
                    setForm((prevForm) => ({ ...prevForm, [nameInput]: e.target.value }));
                }}
            />
        </Box>
    )
}
