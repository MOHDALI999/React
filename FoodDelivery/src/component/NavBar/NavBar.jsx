import { Link, NavLink } from "react-router-dom";

import { Menu } from "lucide-react";
function NavBar() {
  return (
    <>
      <header>
        <nav className="w-full min-h-20 lg:min-h-25 flex justify-between lg:justify-around items-center bg-[#F9F9F7]  pl-10 pr-10 lg:pl-0 lg:pr-0 sticky top-0">
          
            <div className="flex justify-center items-center gap-1.5 lg:gap-3">
              <img
                src="./logo.svg"
                alt="Bistro Bliss"
                className="w-10 h-10"
              />
              <span className="text-2xl font-semibold font-playfair italic text-gray-custom lg:text-4xl lg:inline">
                Bistro Bliss
              </span>
            </div>

          <ul className="hidden lg:flex gap-2 lg:gap-5 font-dmsans font-medium justify-center items-center md:text-base">
            <li>
              <NavLink to="/" className={({isActive})=>`p-2 pl-5 pr-5 ${isActive ?  "rounded-full bg-[#DBDFD0]" : " bg-none "}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="about" className={({isActive})=>`p-2 pl-5 pr-5 ${isActive ? " rounded-full bg-[#DBDFD0]" : " bg-none "}`}>About</NavLink>
            </li>
            <li>
              <NavLink to="menu" className={({isActive})=>`p-2 pl-5 pr-5 ${isActive ? " rounded-full bg-[#DBDFD0]" : " bg-none "}`}>Menu</NavLink>
            </li>
            <li>
              <NavLink to="pages" className={({isActive})=>`p-2 pl-5 pr-5 ${isActive ? " rounded-full bg-[#DBDFD0] " : " bg-none "}`}>Pages</NavLink>
            </li>
            <li>
              <NavLink to="contact" className={({isActive})=>`p-2 pl-5 pr-5 ${isActive ? " rounded-full bg-[#DBDFD0]":"bg-none"}`}>Contact</NavLink>
            </li>
          </ul>
          
            <button className="hidden w-auto font-dmsans text-sm font-semibold border-1 rounded-full p-3 px-6 lg:inline cursor-pointer hover:bg-[#eff0ec]">
              Book  A  Table
            </button>
            <button className="inline lg:hidden">
              <Menu />
            </button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
