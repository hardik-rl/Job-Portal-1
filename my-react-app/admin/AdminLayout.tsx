import "../assets/css/portal.css";

import { Outlet } from "react-router-dom";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";
import { useState } from "react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOnClick = () => {
    setSidebarOpen(!sidebarOpen)
  }
  const handleClose = () => {
    setSidebarOpen(false)
  }
  return (
    <div className="app">
      <Header handleOnClick={handleOnClick}/>
      <Outlet />
      <Sidebar sidebarOpen={sidebarOpen} handleClose={handleClose}/>
    </div>
  );
};

export default AdminLayout;
