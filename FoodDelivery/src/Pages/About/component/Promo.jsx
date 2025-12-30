import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

function Promo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handelPlay = () => {
        videoRef.current.play();
        setIsPlaying(false);
    }
    const handelPause = () => {
        videoRef.current.pause();
        setIsPlaying(true)
    }
    return (
        <div className="w-auto h-auto relative">
            <video
                className="w-full h-140 object-cover"
                autoPlay={true}
                muted
                loop
                playsInline
                ref={videoRef}
            >
                <source
                    src="/Videos/Promo1.mp4"
                    type="video/mp4"
                    title="Promo Videos"
                ></source>
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="w-20 h-20 absolute bg-white top-1/3 left-[47%] rounded-full flex justify-center items-center">
                {isPlaying ? <span> <Play color="#AD343E" onClick={handelPlay} /> </span> : <span><Pause color="#AD343E" onClick={handelPause} /></span>}
            </div>

            <div className="absolute top-[53%] left-1/3"><h1 className="text-5xl font-playfair text-white">Feel the authentic &<span><br /></span> original taste from us</h1> </div>
        </div>
    )
}

export default Promo;
