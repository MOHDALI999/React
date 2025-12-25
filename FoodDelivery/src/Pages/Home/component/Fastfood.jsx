import { fastfood } from "../../../assets/assets";

export default function Fastfood() {
  return (
    <div className="w-full p-10 pt-20 pb-20 lg:flex max-md:flex-col gap-5 lg:gap-15">
      <div className="lg:w-150 grid grid-cols-[0.4fr_0.4fr_0.4fr_0.4fr_0.4fr_0.4fr_0.4fr]  gap-3 lg:gap-4">
        {/* Left big image */}
        <div className="col-span-3 lg:col-span-4 max-sm:col-span-4">
          <img
            src="/foodimg.jpg"
            alt=""
            className="w-full h-full max-md:h-full lg:h-[85%] object-cover rounded-xl"
          />
        </div>

        {/* Right stacked images */}
        <div className="lg:mt-4  col-span-3 lg:col-span-3 grid grid-rows-[0.2fr_0.2fr] lg:grid-rows-2 gap-4 max-sm:col-span-3">
          <img
            src="/foodimg.jpg"
            alt=""
            className="w-full h-80 object-cover rounded-xl"
          />
          <div className="col-span-1 lg:col-span-1">
            <img
              src="/foodimg.jpg"
              alt=""
              className="w-full h-65 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-45 max-lg:mt-10 max-sm:mt-10 flex flex-col gap-5  items-start font-dmsans lg:flex-1 max-sm:p-0 ">
        <h2 className="font-playfair text-4xl lg:text-5xl max-sm:text-3xlfont-medium leading-12">
          Fastest Food
          <span className="hidden lg:inline">
            <br />
          </span>
          Delivery in City
        </h2>
        <p className="font-light text-sm lg:mb-2">
          Our visual designer lets you quickly and of drag a down your way to
          customapps for both keep desktop.
        </p>

        {fastfood.map((detail, index) => (
          <div
            key={index}
            className="grid grid-cols-[40px_auto] gap-3 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-red-800 rounded-full">
              {detail.icon}
            </span>
            <span className="font-medium">{detail.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
