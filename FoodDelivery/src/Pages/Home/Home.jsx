import { CakeSlice, Coffee, GlassWater, Soup } from "lucide-react";
import Contact from "./component/Contact";

function Home() {
  const details = [
  {
    icon: <Coffee size={60} color="#474747" />,
    name: "Breakfast",
    para: "A warm and refreshing breakfast gives energy, balance, and confidence to begin your day with clarity.",
  },
  {
    icon: <Soup size={60} color="#474747" />,
    name: "Main Dishes",
    para: "Our main dishes combine fresh ingredients, rich flavors, and skilled cooking to create meals worth enjoying fully.",
  },
  {
    icon: <GlassWater size={60} color="#474747" />,
    name: "Drinks",
    para: "Every drink is crafted to refresh your senses, enhance your meal, and brighten moments with natural flavors.",
  },
  {
    icon: <CakeSlice size={60} color="#474747" />,
    name: "Desserts",
    para: "Our desserts offer sweet satisfaction through careful preparation, balanced taste, and a delightful finishing touch always.",
  },
];


  return (
    <div>
      <div className="w-auto h-auto relative">
              <img
                src="./bg.jpg"
                alt="Background"
                fetchPriority="high"
                className="w-full  h-full lg:object-fill lg:inline hidden"
              />
              <div className="flex flex-col gap-7 p-10 text-start lg:absolute top-15 lg:text-center lg:top-1/5 lg:left-[28.2%] ">
                <span className="lg:text-8xl md:text-8xl text-6xl font-playfair text-brown-custom max-sm:text-5xl">
                  Best food for
                  <br />
                  your taste
                </span>
                <h5 className="lg:text-center font-dmsans lg:text-xl md:text-xl text-base text-brown-custom">
                  Discover delectable cuisine and unforgettable moments
                  <br />
                  in our welcoming, culinary haven.
                </h5>
                <div className="w-full space-x-3 max-sm:space-x-1">
                  <button className=" w-auto font-dmsans text-sm font-semibold rounded-full p-3 px-6 bg-red-custom text-white cursor-pointer hover:bg-[#8B2A33]">
                    Book A Table
                  </button>
                  <button className="w-auto font-dmsans text-sm font-semibold border rounded-full p-3 px-6 cursor-pointer hover:bg-[#eff0ec]">
                    Explore Menu
                  </button>
                </div>
              </div>
      </div>
      <div className="h-auto bg-white flex flex-col gap-10 p-10 pt-20 max-sm:p-0 max-md:gap-0">
        <h3 className="text-5xl text-center mb-5 max-md:mb-0 max-md:mt-10 max-sm:text-4xl">Browse Our Menu</h3>
        <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
          {details.map((detail, index) => (
            <div
              key={index}
              className="p-8 border-2 border-[#DBDFD0] rounded-xl text-center flex flex-col justify-center align-middle items-center-safe gap-5 hover:bg-[#DBDFD0] hover:shadow-lg transition-shadow duration-300">
              <div className="w-fit rounded-full bg-[#F3F3F0] p-5">
                {detail.icon}
              </div>
              <h5 className="text-brown-custom font-dmsans text-2xl font-bold tracking-[-1.5px]">
                {detail.name}
              </h5>
              <p className="h-full text-text-brown-custom font-dmsans">
                {detail.para}
              </p>
              <button className="text-red-custom font-dmsans font-bold leading-6 cursor-pointer hover:text-[#8B2A33]">
                Explore Menu
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* contact us page */}
        <Contact />
        
    </div>
  );
}

export default Home;
