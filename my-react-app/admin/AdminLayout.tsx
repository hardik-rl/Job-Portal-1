import "../assets/css/portal.css";

import { Outlet } from "react-router-dom";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";

const AdminLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Sidebar />
    </div>
  );
};

export default AdminLayout;
