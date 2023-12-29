import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const InputForTextComponent = ({nameInput, form, changed, setForm}) => {
  

  
  return (
    <Box
    component="form"
    sx={{width: '20vw', minWidth: 200, margin: '0 auto',
      '& .MuiTextField-root': { m: 1 , },
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
        id="standard-multiline-static"
        label="Mensaje"
        multiline
        rows={4}
        name={nameInput}
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
