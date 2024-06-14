import { Button } from "flowbite-react";

export function Hero() {
  return (
    <div>
      <div className="container mx-auto mb-16 p-16">
        <div className="flex flex-col">
          <h1 className="mt-10 text-center text-5xl font-bold leading-normal">
            Inspira, educa, concientiza: Tu plataforma <br /> para historias que
            inspiran
          </h1>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            color="success"
            className=""
            style={{ backgroundColor: "rgba(0, 147, 121, 1)" }}
          >
            Ver precios
          </Button>
        </div>
      </div>
    </div>
  );
}
