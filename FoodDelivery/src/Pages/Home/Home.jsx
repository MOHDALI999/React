import { lazy, Suspense } from "react";
// import { BrowseMenu, Contact, Fastfood, Offer } from "./component/index"

const BrowseMenu = lazy(() => import("./component/BrowseMenu"));
const Contact = lazy(() => import("./component/Contact"));
const Fastfood = lazy(() => import("./component/Fastfood"));
const Offer = lazy(() => import("./component/Offer"));
const Testimonial = lazy(() => import("./component/Testimonial"));
const Blog = lazy(() => import("./component/Blog"));

export default function Home() {
  return (
    <div>
      <div className="w-auto h-auto relative">
        <img
          src="./Image/bg.jpg"
          alt="Background"
          fetchPriority="high"
          className="w-full  h-full lg:object-cover max-sm:inline max-sm:object-cover max-sm:object-top max-sm:h-100 lg:inline hidden"
        />
        <div className="flex flex-col gap-7 p-10 max-sm:pt-10 max-sm:pb-10 max-sm:p-5 text-start lg:absolute top-15 lg:text-center lg:top-1/5 lg:left-[28.2%] max-sm:absolute max-sm:top-0 ">
          <span className="lg:text-8xl md:text-8xl text-6xl font-playfair text-brown-custom max-sm:text-5xl">
            Best food for
            <br />
            your taste
          </span>
          <h5 className="lg:text-center font-dmsans lg:text-xl md:text-xl text-base text-brown-custom">
            Discover delectable cuisine and unforgettable moments
            <span className="hidden lg:inline">
              <br />
            </span>
            in our welcoming, culinary haven.
          </h5>
          <div className="w-full space-x-3 max-sm:space-x-1">
            <button className="redbutton">
              Book A Table
            </button>
            <button className="transparentbutton">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
      {/* Browse Menu page */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <BrowseMenu />
      </Suspense>

      {/* contact us page */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Contact />
      </Suspense>
      {/* Offer page */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Offer />
      </Suspense>
      {/* Fastfood page */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Fastfood />
      </Suspense>
      {/* Testimonial page */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Testimonial />
      </Suspense>
      {/* Blog page */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Blog />
      </Suspense>

    </div>
  );
}
