import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  const contactdetails = [
    {
      icon: <Phone size={24} />,
      detail: "8104361006",
    },
    {
      icon: <Mail size={24} />,
      detail: "mohammedali@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      detail: "Dawood aliji chawl room no 8 pathan wadi malad east",
    },
  ];
  return (
    <div className="lg:flex  flex-wrap lg:gap-10 lg:mb-16 ">
      <div className="relative min-w-[50vw] p-16">
        <img
          src="./foodimg.jpg"
          alt="Healthy food served at our restaurant"
          fetchPriority="high"
          style={{ maxWidth: "43vw", maxHeight: "35rem" }}
          className=" object-cover rounded-2xl min-w-full max-md:hidden"
        />
        <div className="lg:absolute  lg:bottom-5 lg:left-60 max-w-[411px] rounded-xl min-h-[321px] bg-[#474747] text-white p-10 align-start">
          <h4 className="font-dmsans text-bold text-2xl mb-10">
            Come and visit us
          </h4>
          <div className="flex flex-col gap-5 items-start">
            {contactdetails.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 justify-center font-dmsans">
                <span>{item.icon}</span>
                {item.detail}
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="max-w-[41vw]  flex flex-col gap-6 justify-center items-start font-dmsans">
            <h2 className="font-playfair text-5xl font-medium leading-16">We provide healthy food for your family.</h2>
            <p className="font-medium text-lg">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>
            <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <button className="w-fit font-dmsans text-sm font-semibold border rounded-full p-3 px-6 cursor-pointer hover:bg-[#eff0ec]">
            More About Us
            </button>
        </div>
    </div>
  );
}

export default Contact;
