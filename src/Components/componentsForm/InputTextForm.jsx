import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export const InputTextForm = ({nameInput, form, changed, setForm}) => {
    const blue = {
        100: '#60AD26',
        200: '#acdb88',
        400: '#60AD26',
        500: '#60AD26',
        600: '#acdb88',
        900: '#60AD26',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 40px;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
        resize: none; // Esta línea evita que el Textarea sea redimensionable

        &:hover {
          border-color: ${blue[400]};
        }

        &:focus {
          outline: 0;
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }

        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );

    return (
        <Textarea aria-label="empty textarea"
                  placeholder="Dejanos un mensaje"
                  name={nameInput}
                  onChange={(e) => {
                    changed(e);
                    setForm((prevForm) => ({ ...prevForm, [nameInput]: e.target.value }));
                  }}
        />
    );
};
