import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import { ButtonModalSocio } from '../modal/ButtonModalSocio';
import { ModalDonate } from '../modal/ModalDonate';

export const OptionsMember = () => {
    const [modalOpenDonate, setModalOpenDonate] = useState(false);
    const [modalOpenSocio, setModalOpenSocio] = useState(false);

    const donar = () => {
        setModalOpenDonate(true);
    };
    const serSocio = () => {
        setModalOpenSocio(true);
    }

    return (

        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(50%, 300px), 1fr))',
                gap: 2,
            }}
        >
               {modalOpenDonate && (
                <ModalDonate setModalOpenDonate={setModalOpenDonate} />
            )}
            {modalOpenSocio && (
                <ButtonModalSocio
                    setModalOpenSocio={setModalOpenSocio} modalOpenSocio={modalOpenSocio}
                />

            )}
            <Card
                size="lg"
                variant="solid"
                color="neutral"
                invertedColors
                sx={{ bgcolor: 'neutral.900', display: 'flex', flexDirection: 'column' }}
            >
                <Chip size="sm" variant="outlined" sx={{ fontSize: '10px', color: '#60AD26' }}>
                    SER PARTE DE LA COMUNIDAD
                </Chip>
                <Typography level="h2" sx={{ fontSize: '40px', color: '#fff' }} >Ser socio</Typography>
                <Divider inset="none" />
                <p className='p__form-socio'>
                Al ser socio generarás un compromiso continuo y a largo plazo con nosotros, realizando aportes regulares, mensuales, trimestral o anual.
                </p>
                <Divider inset="none" />
                <CardActions  sx={{ marginTop: 'auto' }}>

                    <Button variant="outlined"
                        endDecorator={<KeyboardArrowRight />}
                        sx={{
                            fontSize: '15px', color: '#000', backgroundColor: '#60AD26', '&:hover': {
                                color: '#60AD26'
                            }
                        }}
                        onClick={serSocio}
                    >Inscribirse
                    </Button>
                </CardActions>
            </Card>
            <Card size="lg" variant="outlined" sx={{ display: 'flex', flexDirection: 'column' }}> 
                <Chip size="sm" variant="outlined" color="neutral" sx={{ fontSize: '10px', color: '#60AD26' }}>
                    APORTE
                </Chip>
                <Typography level="h2" sx={{ fontSize: '40px' }}>Donar</Typography>
                <Divider inset="none" />
                <p className='p__form-participate'>
                Contribuciones únicas o esporádicas de dinero. No implican necesariamente un compromiso a largo plazo.
                </p>
                <Divider inset="none" />
                <CardActions  sx={{ marginTop: 'auto' }}>

                    <Button variant="outlined"
                        endDecorator={<KeyboardArrowRight />}
                        sx={{
                            fontSize: '15px', color: '#60AD26', borderColor: '#60AD26',
                            '&:hover': {
                                bgcolor: '#c3f0a0',
                                color: '#000'
                            }
                        }}
                        onClick={donar}
                    >Inscribirse
                    </Button>
                </CardActions>
            </Card>

        </Box>
    )
}
