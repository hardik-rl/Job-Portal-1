import "../assets/css/portal.css";

import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Sidebar from "./shared/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  );
};

export default AdminLayout;