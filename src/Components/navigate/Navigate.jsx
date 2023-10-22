import { NavLink } from "react-router-dom"

export const Navigate = ({url, element, style, text}) => {
    const elemento = document.getElementById(element);
    
    console.log(elemento);
  return (
    <NavLink to={url}  >
        <button className={style}>{!text ? "hola" : text}</button>
    </NavLink>
  )
}
