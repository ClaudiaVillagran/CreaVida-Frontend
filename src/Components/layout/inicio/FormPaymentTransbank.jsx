// FormPaymentTransbank.jsx
import axios from 'axios';
import { useState } from 'react';
import { useForm } from '../../../Hooks/useForm';
import { InputMoneyComponent } from '../../formsComponents/InputMoneyComponent'; // 👈 nuevo
import { Global } from "../../../Helpers/Global";
import '../../../assets/css/formPaymentTransbank.css';

export const FormPaymentTransbank = ({ closeModal }) => {
  const [transactionData, setTransactionData] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const { form, changed, setForm } = useForm({ amount: '' }); // "12500" (string dígitos)

  const handleInitTransaction = async () => {
    setErr('');

    const digits = form?.amount ?? "";            // ej: "12500"
    const amount = digits === "" ? NaN : Number(digits);

    if (!Number.isFinite(amount) || amount <= 0) {
      setErr('Ingresa un monto válido mayor que 0.');
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`${Global.url}payment/start-payment`, { amount });
      setTransactionData(data || {});
    } catch (error) {
      console.error('Error al iniciar la transacción:', error);
      setErr('No pudimos iniciar la transacción. Intenta nuevamente en unos segundos.');
    } finally {
      setLoading(false);
    }
  };

  const hasTx = !!(transactionData.url && transactionData.token);

  return (
    <>
      <span className="modal__close" onClick={closeModal}>&times;</span>

      {!hasTx && (
        <div className="webpay container__payment">
          <h1>Tu contribución hace la diferencia.</h1>

          <InputMoneyComponent
            nameLabel="Monto a donar (CLP)"
            nameInput="amount"
            form={form}
            changed={changed}
            setForm={setForm}
            placeholder="(CLP)"
            required
            minDigits={1}
          />

          {err && <div className="wp-error">{err}</div>}

          <button
            className={`button-donar ${loading ? 'is-loading' : ''}`}
            onClick={handleInitTransaction}
            disabled={loading}
          >
            {loading ? 'Procesando…' : 'Donar'}
          </button>

          <p className="wp-note">Serás redirigido a Webpay para completar el pago.</p>
        </div>
      )}

      {hasTx && (
        <div className="webpay-next">
          <form method="post" action={transactionData.url} style={{ width: '100%' }}>
            <input type="hidden" name="token_ws" value={transactionData.token} />
            <input type="submit" className="buttonWebpay" value="Ir a Webpay" />
          </form>
          <p className="wp-note">Si no eres redirigido, presiona el botón nuevamente.</p>
        </div>
      )}
    </>
  );
};
