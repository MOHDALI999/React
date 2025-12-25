import foodImg from  "/foodimg.jpg"
import { contactdetails } from "../../../assets/assets"; 

function Contact() {

  return (
    <div className="w-full p-10 pt-20 pb-20 lg:flex lg:flex-wrap gap-20 lg:gap-10">
      <div className="lg:w-[35rem] relative max-sm:p-5 mb-20 max-sm:mb-50">
        <img
          src={foodImg}
          alt="Healthy food served at our restaurant"
          loading="eager"
          decoding="async"
          className="w-[80vw] h-120 lg:max-w-[42vw] lg:max-h-[90vh] max-sm:max-w-[15rem] max-sm:h-[18rem]  max-sm:rotate-12 object-cover object-center rounded-2xl"
        />
        <div className="w-fit h-fit top-70 right-0 absolute lg:top-72 lg:left-55 rounded-xl lg:min-h-[15rem] lg:w-[22rem] max-sm:w-68 max-sm:rotate-12 max-sm:top-60 bg-[#474747] text-white p-7 align-start">
          <h4 className="font-dmsans text-bold text-2xl mb-10 max-sm:text-xl max-sm:mb-5">
            Come and visit us
          </h4>
          <div className="flex flex-col gap-5 items-start max-sm:gap-4">
            {contactdetails.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 justify-center font-dmsans max-sm:text-base max-sm:gap-2">
                <span>{item.icon}</span>
                {item.detail}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-[30vw] flex flex-col gap-4 justify-center items-start font-dmsans lg:flex-1 max-sm:p-0 ">
        <h2 className="font-playfair text-4xl lg:text-5xl font-medium leading-12">We provide healthy food for your family.</h2>
        <p className="font-medium text-base">
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>
        <p className="text-base">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        <button className="font-dmsans text-sm font-semibold border rounded-full p-3 px-6 cursor-pointer hover:bg-[#eff0ec]">
          More About Us
        </button>
      </div>
    </div>
  );
}

export default Contact;
  