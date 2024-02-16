import "../assets/css/portal.css";

import { Outlet } from "react-router-dom";
// import Footer from "./shared/Footer";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";

const AdminLayout = () => {
  return (
    <div className="app">
      <Outlet />
      <Header />
      <Sidebar />
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;
