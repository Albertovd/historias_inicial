import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import "../assets/styles.css";
import imageLeft from "../assets/img/salvavidas.png";
import Bg from "../components/Background";
export function Resetpw() {
  return (
    <>
      <div className=" h-screen">
        <Bg />
        <img src={imageLeft} alt="Left Background" className="absolute" />
        <div className="z-10 grid h-full place-items-center">
          <Card className="z-20 w-auto">
            <div className="flex flex-col p-10">
              <div className="flex">
                <Link to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"
                    alt="login"
                    className="h-10 w-20"
                  />
                </Link>
                <div className="ml-24">
                  <h1 className="text-2xl">Recuperar contraseña</h1>
                </div>
              </div>
              <hr className="mt-3" />
              <form className="mt-5">
                <div className="mb-4">
                  <span className="text-sm">
                    Ingresa tu correo electrónico y te enviaremos un enlace para
                    recuperar tu contraseña.
                  </span>
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
                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-blue-900 p-2 text-white hover:bg-blue-800"
                >
                  Recuperar contraseña
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Resetpw;
