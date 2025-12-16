import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function RootLayout() {
  return (   
    <> 
      <div className="w-full h-full">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
