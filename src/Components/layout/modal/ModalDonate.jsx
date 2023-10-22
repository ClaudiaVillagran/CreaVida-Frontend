
export const ModalDonate = ({setModalOpenDonate}) => {

    
  const closeModal = () => {
    setModalOpenDonate(false);
  };
  return (
    <div className="modal">
          <div className="participation-box">
            <span className="modal__close " onClick={closeModal}>&times;</span>

            <h6 className="donate-h6">Gracias por querer ser parte</h6>
            <p className="method_donation"><i>Selecciona el método para donar</i></p>
            <div className="options-donate">
              <button className="button-donate">Transferencia</button>
              <button className="button-donate">WebPay</button>
              <button className="button-donate">PayPal</button>
            </div>

          </div>
        </div>
  )
}
