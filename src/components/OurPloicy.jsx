import { assets } from "../assets/assets"

const OurPloicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20ntext-xs sm:text-sm md:text-base text-gray-700 pt-10">
      <div className="">
      <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
      <p className="font-semibold">Easy Exchange Policy</p>
      <p className="text-gray-400"> We Offer Hassle Free Exchange Policy</p>
      </div>
      <div className="">
      <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
      <p className="font-semibold">7 Days Return Policy</p>
      <p className="text-gray-400"> We Provide 7 Days free Return  Policy</p>
      </div>
      <div className="">
      <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
      <p className="font-semibold">Best Customer Support</p>
      <p className="text-gray-400"> We Provide 27/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPloicy
