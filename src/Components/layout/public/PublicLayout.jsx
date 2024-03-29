import { Navigate, Outlet } from "react-router-dom"
import { Header } from "./Header"
import useAuth from "../../../Hooks/useAuth"
import { Footer } from "./Footer";

export const PublicLayout = () => {

  const { auth } = useAuth();
  return (
    <>
    
      {/* layout */}
      <Header/>

      {/* contenido principal */}
      <section className="layout__content">
        {!auth._id ?
          <Outlet />
          :
          <Navigate to="/admin" />
        }
      </section>
      <Footer />
    </>
  )
}
