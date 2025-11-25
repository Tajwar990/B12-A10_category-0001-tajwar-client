import { Outlet } from "react-router";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";
import { Toaster } from "react-hot-toast";

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
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
