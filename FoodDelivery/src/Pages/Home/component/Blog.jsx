import { Link } from "react-router-dom";
import { blog } from "../../../assets/assets";
function Blog() {
    return (
        <div className="w-auto h-auto p-10 pt-20 pb-20 flex flex-col gap-10">
              {/* Header */}
            <div className="flex justify-between">
                <h1 className="font-playfair text-4xl">Our Blog & Articles</h1>
                <button className="font-dmsans text-sm font-semibold rounded-full p-3 px-6 bg-red-custom text-white cursor-pointer hover:bg-[#8B2A33]">
                    Read All Articles
                </button>
            </div>
            {/* Main Grid */}
            <div className="grid grid-cols-15 gap-4">
                
                 {/* Featured Blog */}
                <div className="w-auto h-auto bg-white rounded-lg col-span-8 hover:bg-[#eff0ec] hover:border hover:border-black">
                    <Link to={"pages"}>
                    <div>
                        <img src="./burger.png" className="w-full h-auto object-fill object-center rounded-t-lg" />
                    </div>
                    <div className="p-10 flex flex-col gap-3 font-dmsans">
                        <span className="text-sm">January 3, 2023</span>
                        <h2 className="font-medium">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                    </div>
                     </Link>
                </div>
                {/* Right Side Blogs */}
                <div className="col-span-7 grid grid-cols-2 gap-4">
                {
                    blog.map((detail,index) => (
                        <Link to={"pages"}>
                        <div key={index} className="h-full bg-white rounded-lg hover:bg-[#eff0ec] hover:border hover:border-black">
                            <div>
                                <img src="./burger.png" className="w-full h-fit object-cover object-center rounded-t-lg" />
                            </div>
                            <div className="p-7 flex flex-col gap-3 font-dmsans">
                                <span className="text-sm">{detail.date}</span>
                                <span className="font-medium">{detail.title}</span>
                            </div>
                        </div>
                        </Link>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Blog
