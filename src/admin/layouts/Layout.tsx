
import { Outlet } from "react-router-dom";
import MySidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <MySidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
