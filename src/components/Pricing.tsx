
import PriceComponent from "./planCards";
import { pricesData } from "../data/PricesData";

export function Prices() {
  return (
    <div className="mt-10 text-center">
      <div className="container flex flex-col ">
        <h1 className="text-4xl font-semibold">
          Mensual o anual: Tú decides.
        </h1>
      </div>
      <p className="mt-3 text-gray-400">Decide cuando y cómo suscribirte.</p>
      <p className="mt-1 text-sm text-gray-300">(Las características son las mismas en ambos planes, solo cambia el tiempo de la suscripción.)</p>

      <div className="flex justify-center">
        <div className="mt-12 grid w-full max-w-4xl place-items-center sm:gap-36 md:grid-cols-1 md:gap-0 lg:grid-cols-2 lg:gap-1">
          {pricesData.map((card, index) => (
            <PriceComponent key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
