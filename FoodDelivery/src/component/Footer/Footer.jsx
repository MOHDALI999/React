import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  const icons = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ color: "#ffffff" }}
          size="13"
        />
      ),
      link: "https://x.com/",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFacebookF}
          style={{ color: "#ffffff" }}
          size="13"
        />
      ),
      link: "https://www.facebook.com/",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: "#ffffff" }}
          size="lg"
        />
      ),
      link: "https://www.instagram.com/",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#ffffff" }}
          size="lg"
        />
      ),
      link: "https://github.com/",
    },
  ];

  const citys = [
    {
      name: "Bangalore",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Pune",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Chennai",
    },
  ];
  const images = [
    {
      foodimage: "./Panner.jpg",
    },
    {
      foodimage: "./Panner.jpg",
    },
    {
      foodimage: "./Panner.jpg",
    },
    {
      foodimage: "./Panner.jpg",
    },
  ];
  return (
    <>
      <footer className="w-full min-h-full  bg-[#474747]">
        <div className="flex p-20 justify-around">
          {/* Left Part */}
          <div className="w-auto flex flex-col gap-5">
            <Link to={"/"}>
              <div className="flex items-center gap-2">
                <img
                  src="./japanese-food.svg"
                  alt="Bistro Bliss"
                  className="min-w-[56px] min-h-[55px]"
                />
                <span className="text-white font-playfair font-semibold text-3xl">
                  Bistro Bliss
                </span>
              </div>
            </Link>
            <span className="font-dmsans max-w-80 text-[#ADB29E]">
              In this new era of food and technology, we look toward the future
              with confidence, passion, and pride in serving better meals.
            </span>
            <div className="flex gap-3">
              {icons.map((items) => (
                <span className="w-10 h-10 flex justify-center items-center bg-red-800 rounded-full">
                  <Link to={items.link}>{items.icon}</Link>
                </span>
              ))}
            </div>
          </div>
          {/* Middle Part */}
          <div className="flex gap-15">
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
                {citys.map((city) => (
                  <div className="flex">{city.name}</div>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Part */}
          <div className="flex flex-col gap-10">
            <span className="text-base font-bold text-white font-dmsans">Follow Us On Instagram</span>
            <div className="w-auto h-auto grid grid-cols-2 gap-3">
                {images.map((items,index)=>(  
                    <img key={index} src={items.foodimage} className="w-40 h-40 object-cover rounded-2xl"/>       
                ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
