import {offers} from "../../../assets/assets"

function Offer() {

  return (
    <div className="w-full h-full p-10 pt-20 pb-20 max-sm:pt-10 max-sm:pb-10 max-sm:p-5 flex flex-col gap-15 bg-white">
        <h1 className="text-5xl max-sm:text-4xl font-playfair">We also offer unique <span className="max-sm:hidden"><br /></span>services for your events</h1>
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-10 lg:gap-10">
            {
                offers.map((offer,index)=>(
                    <div key={index} className="flex flex-col gap-2 font-dmsans">
                        <img src={offer.offerImage} className="w-full h-70 mb-2 object-cover rounded-xl"/>
                        <h3 className="text-lg font-semibold">{offer.title}</h3>
                        <p className="text-sm">{offer.details}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Offer
