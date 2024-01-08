import axios from 'axios';
import { useState } from 'react';
import { useForm } from '../../../Hooks/useForm';
import { InputNumberComponent } from '../../formsComponents/InputNumberComponent';

export const FormPaymentTransbank = ({ closeModal }) => {
    const [transactionData, setTransactionData] = useState({});
    const { form, changed, setForm } = useForm({});

    const handleInitTransaction = async () => {
        try {

            console.log(form.amount);

            let amount = form.amount
            // Llama al servidor para iniciar la transacción y obtén la URL y el token
            const response = await axios.post('http://localhost:3000/api/payment/start-payment', { amount: amount });
            const data = response.data;
            console.log(data);
            // Actualiza el estado con los datos de la transacción
            setTransactionData(data);

        } catch (error) {
            console.error('Error al iniciar la transacción:', error);
        }
    };


    return (
        <>

            <span className="modal__close " onClick={closeModal}>&times;</span>
            {
                !transactionData.url && !transactionData.token && (
                    <div className="webpay container__payment">
                        <h1>Tu contribución hace la diferencia.</h1>
                        <InputNumberComponent nameLabel='Monto a donar' nameInput='amount' form={form} changed={changed} setForm={setForm} />
                        <button className='button-donar' onClick={handleInitTransaction}>Donar</button>
                    </div>)
            }


            {/* Muestra el formulario solo si se ha obtenido la URL y el token */}
            {transactionData.url && transactionData.token && (
                <form method="post" action={transactionData.url}>
                    <input type="hidden" name="token_ws" value={transactionData.token} />
                    <input type="submit" className='button-participar buttonWebpay' value="Ir a donar a webpay" />
                </form>
            )}
        </>
    )
}
