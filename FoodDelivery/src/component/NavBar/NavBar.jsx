import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Drawer } from "antd";

function NavBar() {
  const routes = [
    {
      path: "/",
      tabname: "Home",
    },
    {
      path: "about",
      tabname: "About",
    },
    {
      path: "menu",
      tabname: "Menu",
    },
    {
      path: "pages",
      tabname: "Pages",
    },
    {
      path: "contact",
      tabname: "Contact",
    },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleTabClick = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <header>
        <nav className="w-full min-h-20 lg:min-h-25 flex justify-between lg:justify-around items-center bg-[#F9F9F7]  pl-10 pr-10 lg:pl-0 lg:pr-0 sticky top-0">
          <div className="flex justify-center items-center gap-1.5 lg:gap-3">
            <img src="./logo.svg" alt="Bistro Bliss" className="w-10 h-10" />
            <span className="text-2xl font-semibold font-playfair italic text-gray-custom lg:text-4xl lg:inline">
              Bistro Bliss
            </span>
          </div>

          <ul className="hidden lg:flex gap-2 lg:gap-5 font-dmsans font-medium justify-center items-center md:text-base">
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `p-2 pl-5 pr-5 ${
                      isActive ? " rounded-full bg-[#DBDFD0]" : "bg-none"
                    }`
                  }>
                  {route.tabname}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="hidden w-auto font-dmsans text-sm font-semibold border-1 rounded-full p-3 px-6 lg:inline cursor-pointer hover:bg-[#eff0ec]">
            Book A Table
          </button>
          <button
            className="inline lg:hidden"
            onClick={() => setDrawerOpen(true)}>
            <Menu />
          </button>
        </nav>
      </header>
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closable={{ placement: "end" }}
        width={250}
        className="font-dmsans text-xl">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                onClick={handleTabClick}
                style={({ isActive }) => ({
                  width: "100%",
                  display: "flex",
                  padding: "10px",
                  borderRadius: "10px",
                  color: isActive ? "#AD343E" : "black",
                  backgroundColor: isActive ? "#DBDFD0" : "",
                })}>
                {route.tabname}
              </NavLink>
            ))}
      </Drawer>
    </>
  );
}

export default NavBar;
