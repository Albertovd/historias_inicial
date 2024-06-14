import React from "react";

const CardComponent: React.FC<{
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
}> = ({ title, description, icon, link }) => {
  return (
    <div className=" mb-32 flex size-80 flex-col justify-between rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg ">
      <div className="flex grow flex-col">
        <div className="mb-4 flex justify-center">
          <span className="rounded-lg bg-green-100 p-4">{icon}</span>
        </div>
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="grow">{description}</p>
        <a
          href={link}
          className="self-center text-green-500 decoration-emerald-500 transition-colors duration-300 hover:text-green-700 hover:underline "
        >
          Empezar →
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
