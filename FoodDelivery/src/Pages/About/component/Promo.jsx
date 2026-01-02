import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { promo } from "../../../assets/assets";

function Promo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handelPlay = () => {
    videoRef.current.play();
    setIsPlaying(false);
  };
  const handelPause = () => {
    videoRef.current.pause();
    setIsPlaying(true);
  };
  return (
    <div className="w-auto h-auto">
      <div className="relative">
        <video
          className="w-full h-140 object-cover"
          autoPlay={true}
          muted
          loop
          playsInline
          ref={videoRef}>
          <source
            src="/Videos/Promo1.mp4"
            type="video/mp4"
            title="Promo Videos"></source>
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          onClick={isPlaying ? handelPlay : handelPause}
          className="absolute inset-0 m-auto flex flex-col justify-center items-center gap-5">
          <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
            <span>
              {isPlaying ? <Play color="#AD343E" /> : <Pause color="#AD343E" />}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl max-sm:text-3xl font-playfair text-white ml-7">
            Feel the authentic &
            <span>
              <br />
            </span>
            original taste from us
          </h1>
        </div>
      </div>
      <div className="bg-white grid grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 lg:gap-13 lg:p-15 p-10 gap-5 ">
      {
        promo.map((promo,index) => (
          <div key={index} className="flex justify-center items-start gap-5 font-dmsans">
            <img src={promo.icon} className="w-12 h-12 object-contain flex justify-start items-start" />
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-semibold text-xl mb-2">{promo.title}</h1>
              <span className="text-sm">{promo.details}</span>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Promo;
