import UsersComponent from "./UserCards";
import { cardsUsersData } from "./data/UsersData";

export function Users() {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-4xl">Gestión de usuarios</h1>
      </div>
      <div className="mt-5">
        <div className="relative w-56">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full rounded-e-lg border border-gray-300  bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500"
            placeholder="Buscar usuarios"
            required
          />
          <button
            type="submit"
            className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="size-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Buscar</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center">
      <div className="mt-12 grid w-full place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardsUsersData.map((card, index) => (
          <div key={index} className="size-full">
            <UsersComponent {...card} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Users;
