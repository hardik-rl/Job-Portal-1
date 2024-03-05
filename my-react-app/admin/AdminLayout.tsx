import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";
import useStyleLoad from "../src/shared/hooks/useStyleLoad";
import Loader from "./shared/Loader";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { stylesLoaded } = useStyleLoad();

  const handleOnClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  if (!stylesLoaded) {
    return  <div className="py-5 h-screen d-flex justify-content-center align-items-center">
      <Loader />
    </div>
  }

  return (
    <div className="app">
      <Header handleOnClick={handleOnClick} />
      <Outlet />
      <Sidebar sidebarOpen={sidebarOpen} handleClose={handleClose} />
    </div>
  );
};

export default AdminLayout;
