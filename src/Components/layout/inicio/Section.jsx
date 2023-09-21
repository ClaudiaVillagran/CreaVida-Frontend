import { SobreNosotros } from "./SobreNosotros"
import { SomosIcfa } from "../SomosIcfa/SomosIcfa"
import { NearEventsInicio } from "./NearEventsInicio"


export const Section = () => {
  return (
    <>
      <SomosIcfa />
      <SobreNosotros/>

      <NearEventsInicio/>
    </>
  )
}
