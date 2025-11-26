import { Link, NavLink } from "react-router-dom";
import "../../input.css";
function NavBar() {
  return (
    <>
      <header>
        <nav className="w-full min-h-25 flex justify-around items-center bg-[#F9F9F7]">
          <Link to={"/"}>
            <div className="flex justify-center items-center gap-3">
              <img
                src="./logo.svg"
                alt="Bistro Bliss"
                className="w-fit h-fit"
              />
              <span className="text-4xl font-semibold font-playfair italic text-gray-custom">
                Bistro Bliss
              </span>
            </div>
          </Link>
          <ul className="flex gap-5 font-dmsans font-medium justify-center items-center">
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
          
            <button className="w-auto font-dmsans font-semibold border-2 rounded-full p-2 px-10">
              Book  A  Table
            </button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
