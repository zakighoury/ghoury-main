import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom/dist";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
