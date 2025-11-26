import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function RootLayout() {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <NavBar />
      </div>
      <main className="w-full max-h-auto flex-1">
        <Outlet />
      </main>
      <div className="flex-1">
            <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
