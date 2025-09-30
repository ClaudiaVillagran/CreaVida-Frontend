import { useEffect, useState } from "react";
import { ModalDonate } from "../modal/ModalDonate";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NearEventsHeader } from "./NearEventsHeader";
import { ButtonModalParticipate } from "../modal/ButtonModalParticipate";
import { SliderResponsive } from "../../carrousel/SliderResponsive";

import '../../../assets/css/nearEvents.css'
export const NearEvents = ({ nearEvents}) => {
  const [modalOpenParticipe, setModalOpenParticipe] = useState(false);
  const [modalOpenDonate, setModalOpenDonate] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  console.log("nearevents", nearEvents)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const participar = (eventId) => {
    setModalOpenParticipe(true);
    setSelectedEventId(eventId);
    console.log(modalOpenParticipe)
  };

  const donar = () => {
    setModalOpenDonate(true);
  };

  

  return (
    <div className="container__article-near">
      {modalOpenParticipe && (
        <ButtonModalParticipate selectedEventId={selectedEventId}
          setModalOpenParticipe={setModalOpenParticipe} modalOpenParticipe={modalOpenParticipe}
        />

      )}
      {modalOpenDonate && (
        <ModalDonate setModalOpenDonate={setModalOpenDonate} />
      )}
      {/* <NearEventsHeader/> */}
      <div className="container-event">
        {nearEvents.length > 0 ?
          <>
            <SliderResponsive  nearEvents={nearEvents} donar={donar} participar={participar}/>
          </>
         
          :
          <h2>No existen eventos cercanos</h2>}

      </div>

    </div>
  )
}
