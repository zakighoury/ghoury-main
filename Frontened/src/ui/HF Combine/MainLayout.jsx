import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
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
