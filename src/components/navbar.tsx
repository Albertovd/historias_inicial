import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
export function NavbarPrincipal() {
  return (
    <Navbar className="bg-transparent">
      <Navbar.Brand href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"
          alt="Logo de la UTEZ"
          className="mr-3 h-6 sm:h-9"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href="/admin" className="me-8 mt-2 text-emerald-600">
          Contacto
        </a>
        <Link to="/register">
        <Button
          pill
          className="me-4 text-emerald-600"
          style={{ backgroundColor: "#e5f4f2" }}
        >
          Registrarse
        </Button>
        </Link>
        <Link to="/login">
          <Button pill style={{ backgroundColor: "rgba(0, 147, 121, 1)" }}>
            Iniciar sesión
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
