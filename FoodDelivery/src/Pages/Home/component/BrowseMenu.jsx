import { menus } from "../../../assets/assets";
export default function BrowseMenu() {
    return (
        <div className="h-auto bg-white flex flex-col gap-10 p-10 pt-20 pb-20 max-sm:pt-10 max-sm:pb-10 max-sm:p-5 max-md:gap-10">
            <h3 className="text-5xl font-medium text-center max-sm:text-4xl">
                Browse Our Menu
            </h3>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {menus.map((detail, index) => (
                    <div
                        key={index}
                        className="p-8 border-2 border-[#DBDFD0] rounded-xl text-center flex flex-col justify-center align-middle items-center-safe gap-5 hover:bg-[#eff0ec] hover:shadow-lg transition-shadow duration-300">
                        <span className="w-fit rounded-full bg-[#e7e7d8] p-5">
                            {detail.icon}
                        </span>
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
    )
}

