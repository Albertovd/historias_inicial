import React from "react";

const UsersComponent: React.FC<{
  name: string;
  phone: string;
  email: string;
  paymentStatus: string;
}> = ({ name, phone, email, paymentStatus }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md md:max-w-lg">
      <div className="md:flex">
        <div
          className={`p-1 md:shrink-0 ${paymentStatus === "Pagado" ? "bg-green-500" : "bg-red-600"}`}
        >
          <div className="flex size-4 items-center justify-center rounded-full "></div>
        </div>
        <div className="flex w-full flex-col justify-between p-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{name}</h1>
            <p className="mt-2 text-gray-600">Teléfono: {phone}</p>
            <p className="mt-2 text-gray-600">Email: {email}</p>
            <div className="mt-4">
              <span className="text-gray-600">Estado de pago: </span>
              <span
                className={`rounded-full px-2 py-1  ${paymentStatus === "No pagado" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}
              >
                {paymentStatus}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="flex items-center rounded-lg bg-gray-300 p-2 text-gray-700 hover:bg-gray-400">
              <span className="mr-1 text-xs">Bloquear</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
