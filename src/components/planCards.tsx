import React from "react";

const PriceComponent: React.FC<{
  title: string;
  price: string;
  link: string;
  icon: JSX.Element;
}> = ({ title, price, link, icon }) => {
  return (
    <div className=" mb-32 flex size-80 flex-col justify-between rounded-lg bg-white p-4 shadow-xl transition-shadow duration-300 hover:shadow-2xl ">
      <div className="flex grow flex-col">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <h1 className="text-lg">${price}</h1>
        <div className="mb-4 flex justify-center">
          <span className="rounded-lg  p-6">{icon}</span>
        </div>
        <a
          href={link}
          className=" self-center rounded-lg bg-green-300 p-2 text-green-500 decoration-emerald-500 transition-colors duration-300 hover:text-green-700 "
        >
          Suscribirse
        </a>
      </div>
    </div>
  );
};

export default PriceComponent;
