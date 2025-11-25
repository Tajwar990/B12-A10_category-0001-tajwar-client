import React from "react";
import NavigationBar from "../NavigationBar";

import { Outlet } from "react-router";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavigationBar></NavigationBar>
        <div className="mt-4">
          <Outlet></Outlet>
        </div>
        <div className="pt-10">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
