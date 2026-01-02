import { testimonial } from "../../../assets/assets"

function Testimonial() {

    return (
        <div className="w-auto h-auto p-10 pt-20 pb-20max-sm:pt-10 max-sm:pb-10 max-sm:p-5  bg-white font-dmsans flex flex-col gap-12">
            <h1 className="text-5xl text-center font-playfair font-medium max-sm:text-4xl">
                What Our Customers Say
            </h1>
            <div className=" grid grid-flow-col auto-cols-[100%] md:auto-cols-[48%] lg:auto-cols-[32%] gap-5 overflow-x-auto scroll-smooth no-scrollbar">
                {
                    testimonial.map((detail, index) => (
                            <div key={index} className="bg-[#f3f3ea] p-6 rounded-xl text-start flex flex-col justify-start items-start gap-5">
                                <h5 className="text-red-custom font-dmsans text-2xl font-bold tracking-[-1.3px]">
                                    {detail.title}
                                </h5>
                                <p className="h-full text-start font-dmsans">
                                    {detail.details}
                                </p>
                                <div className="w-full h-0.5 bg-[#e1e1d3]"></div>
                                <div className="flex justify-center items-start gap-5">
                                    <img src={detail.profileimg} className="w-14 h-14 rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-base">{detail.name}</span>
                                        <span className="text-base">{detail.place}</span>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Testimonial;
