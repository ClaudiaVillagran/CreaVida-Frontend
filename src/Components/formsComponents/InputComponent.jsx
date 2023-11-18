import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const InputComponent = ({ nameLabel, nameInput,  form, changed, setForm }) => {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '55ch' },
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
