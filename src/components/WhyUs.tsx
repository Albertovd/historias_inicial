import CardComponent from "./cards";
import { cardsData } from "../data/cardsData";

export function Nosotros() {
  return (
    <div className="mt-10 text-center">
      <div className="container flex flex-col ">
        <h1 className="text-4xl font-semibold underline decoration-emerald-500 decoration-wavy">
          ¿Por qué nosotros?
        </h1>
      </div>
      <p className="mt-3 text-gray-400">Descubre por qué somos los mejores.</p>
      <div className="flex justify-center">
        <div className="mt-12 grid w-full max-w-4xl place-items-center sm:gap-36 md:grid-cols-1 md:gap-0 lg:grid-cols-3 lg:gap-64">
          {cardsData.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
