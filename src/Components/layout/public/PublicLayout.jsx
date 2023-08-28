import { Navigate, Outlet } from "react-router-dom"
import { Header } from "./Header"
import useAuth from "../../../Hooks/useAuth"

export const PublicLayout = () => {
  const { auth } = useAuth();
  console.log(auth)
  return (
    <>
      {/* layout */}
      <Header />

      {/* contenido principal */}
      <section className="layout__content">
        {!auth._id ?
          <Outlet />
          :
          <Navigate to="/admin" />
        }
      </section>
      {/* <footer className="content_footer">
        <p className="copyright">&copy; 2023 Claudia Villagrán Leiva. Todos los derechos reservados.</p>
      </footer> */}
    </>
  )
}
