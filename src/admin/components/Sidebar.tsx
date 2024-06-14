import { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiPhotograph,
  HiArchive,
  HiChevronLeft,
  HiChevronRight,
  HiLogout,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export function MySidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("w-64");

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setSidebarWidth(isCollapsed ? "w-16" : "w-40");
  }, [isCollapsed]);

  return (
    <div className="flex h-screen">
      {/* Botón de colapsar/expandir */}
      <button
        onClick={handleToggleSidebar}
        className="fixed z-50 ms-1 rounded-full p-2 hover:bg-gray-100"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          left: isCollapsed ? "4rem" : "10rem",
        }}
      >
        {isCollapsed ? (
          <HiChevronRight size={20} />
        ) : (
          <HiChevronLeft size={20} />
        )}
      </button>

      {/* Sidebar */}
      <Sidebar
        aria-label="Default sidebar example"
        className={` fixed left-0 top-0 z-40 h-full bg-white shadow-lg duration-200 ${sidebarWidth}`}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-1 flex-col items-start justify-center">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  as={Link}
                  to="/admin/users"
                  icon={HiUser}
                  className={`flex items-center justify-center ${isCollapsed ? "justify-center" : "justify-start"}`}
                >
                  {!isCollapsed && "Usuarios"}
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/admin/historias"
                  icon={HiPhotograph}
                  className={`flex items-center justify-center ${isCollapsed ? "justify-center" : "justify-start"}`}
                >
                  {!isCollapsed && "Historias"}
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/admin/archive"
                  icon={HiArchive}
                  className={`flex items-center justify-center ${isCollapsed ? "justify-center" : "justify-start"}`}
                >
                  {!isCollapsed && "Archivo"}
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
          <div className="">
            <button className="flex w-full justify-center rounded-lg bg-emerald-400 p-2 hover:bg-emerald-500">
              <HiLogout size={16} className="mt-0.5"/>
              {!isCollapsed && <span className="ml-1 text-sm">Cerrar sesión</span>}
            </button>
          </div>
        </div>
      </Sidebar>

      {/* Contenido principal */}
      <div
        className={`flex-1 p-6 transition-all ${
          isCollapsed ? "ml-14" : "ml-36"
        }`}
      >
        {/* Contenido de la página */}
      </div>
    </div>
  );
}

export default MySidebar;
