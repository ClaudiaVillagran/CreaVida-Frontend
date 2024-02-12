import { useState } from "react";
import { FormPaymentTransbank } from '../inicio/FormPaymentTransbank'

export const ModalDonate = ({ setModalOpenDonate }) => {

  const [selectedMethod, setSelectedMethod] = useState(null);

  const closeModal = () => {
    setModalOpenDonate(false);
  };


  return (
    <div className="modal">
      <div className="participation-box">

        {selectedMethod ? (
          // Si se ha seleccionado un método, mostrar el contenido específico
          selectedMethod === "Transferencia" ? (

            <div className="transfer-data">

              <span className="modal__close" onClick={closeModal}>
                &times;
              </span>
              <p>Nombre de la cuenta: Fundación CreaVida</p>
              <p>Tipo de cuenta: Cta. Chequera electrónica</p>
              <p>RUT: 65.142.876-9</p>
              <p>Nombre del banco: BancoEstado</p>
              <p>Número de cuenta: 545-7-039973-2</p>
              <p>Correo: fcreavidaicfa@gmail.com</p>
              {/* Agrega más detalles según tus necesidades */}
            </div>
          ) : (
            <FormPaymentTransbank closeModal={closeModal} />
          )
        ) : (
          // Si no se ha seleccionado un método, mostrar el contenido original
          <>

            <span className="modal__close" onClick={closeModal}>
              &times;
            </span>
            <h6 className="donate-h6">Gracias por querer ser parte</h6>
            <p className="method_donation">
              <i>Selecciona el método para donar</i>
            </p>
            <div className="options-donate">
              <button
                className="button-donate"
                onClick={() => setSelectedMethod("Transferencia")}
              >
                Transferencia
              </button>
              <button
                className="button-donate"
                onClick={() => setSelectedMethod("WebPay")}
              >
                WebPay
              </button>
              {/* <button className="button-donate">PayPal</button> */}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
