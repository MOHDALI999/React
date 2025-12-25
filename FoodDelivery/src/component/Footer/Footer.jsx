import { Link } from "react-router-dom";
import {socialicons,citys,images} from "../../assets/assets"

function Footer() {
  
  return (
    <>
      <footer className="bg-[#474747] flex md:justify-around gap-10 flex-wrap p-5 md:p-10 lg:p-20 sm:justify-start">
        {/* Left Part */}
        <div className="w-auto flex flex-col gap-5">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <img
                src="./japanese-food.svg"
                alt="Bistro Bliss"
                className="w-14 h-14"
              />
              <span className="text-white font-playfair italic font-semibold text-3xl">
                Bistro Bliss
              </span>
            </div>
          </Link>
          <span className="font-dmsans max-w-80 text-[#ADB29E]">
            In this new era of food and technology, we look toward the future
            with confidence, passion, and pride in serving better meals.
          </span>
          <div className="flex gap-3">
            {socialicons.map((items,index) =>(
              <span key={index} className="w-10 h-10 flex justify-center items-center bg-red-800 rounded-full">
                <Link to={items.link}>{items.icon}</Link>
              </span>
            ))}
          </div>
        </div>
        {/* Middle Part */}
        <div className="flex gap-10 lg:gap-15 justify-between">
          <div className="text-white font-dmsans text-sm flex flex-col gap-3.5">
            <span className="font-bold text-base">Pages</span>
            <ul className="space-y-2 text-[#DBDFD0] text-base">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"about"}>About</Link>
              </li>
              <li>
                <Link to={"menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"contact"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"delivery"}>Delivery</Link>
              </li>
            </ul>
          </div>
          <div className="text-white font-dmsans text-sm flex flex-col gap-3.5">
            <span className="font-bold text-base">Available in:</span>
            <ul className="space-y-2 text-[#DBDFD0] text-base">
              {citys.map((city,index) => (
                <li key={index} className="flex">{city.name}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Part */}
        <div className="min-w-60 lg:flex flex-col gap-3.5 max-md:hidden max-sm:hidden max-lg:hidden">
          <span className="text-base font-bold text-white font-dmsans">
            Follow Us On Instagram
          </span>
          <div className="grid grid-cols-2 gap-2 lg:gap-3">
            {images.map((items, index) => (
              <img
                key={index}
                src={items.foodimage}
                className="w-40 h-30 object-cover rounded-2xl md:w-full"
              />
            ))}
          </div>
        </div> 
      </footer>
    </>
  );
}

export default Footer;
