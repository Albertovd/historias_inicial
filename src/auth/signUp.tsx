import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import "../assets/styles.css";
import imageLeft from "../assets/img/image copy 2.png";
import imageRight from "../assets/img/image copy 3.png";

export function SignUp() {
  return (
    <>
      <div className="login-page">
        <div className="triangle"></div>
        <img src={imageLeft} alt="Left Background" className="image-left" />
        <img src={imageRight} alt="Right Background" className="image-right" />
        
        <div className="grid h-screen place-items-center">
          <Card className="login-container">
            <div className="flex flex-col p-10">
              <div className="flex ">
                <Link to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"
                  alt="login"
                  className="h-10 w-20"
                />
                </Link>
                
                <div className="ml-24">
                  <h1 className="text-2xl">Registrarme</h1>
                </div>
              </div>
              <hr className="mt-3" />
              <form className="mt-5">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500"
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Apellidos
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500"
                        placeholder="Apellidos"
                    />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white placeholder:text-slate-400
                    invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none
                    focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    disabled:border-slate-200 disabled:bg-slate-50
                    disabled:text-slate-500 disabled:shadow-none"
                    placeholder="ejemplo@cuenta.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mb-2 mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-sky-500 focus:ring-sky-500"
                    placeholder="*********"
                  />
                  
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Fecha de nacimiento
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500"
                        placeholder="Fecha de nacimiento"
                    />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-blue-900 p-2 text-white hover:bg-blue-800"
                >
                  Registrar
                </button>
                <div className="mt-8">
                  <span className="text-sm">
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                      to="/login"
                      className="text-emerald-700 hover:underline"
                    >
                        Inicia sesión
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SignUp;
