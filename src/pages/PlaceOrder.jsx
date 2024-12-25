import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

const PlaceOrder = () => {
const [method,detmethod]=useState("cod");
const {navigate}=useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 rt-5 sm:pt-14 min-h-[80vh] border-t">
    {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELEVIERY"} text2={"INFORMATION"}  />
          </div>
          <div className="flex gap-3">
             <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
             <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
          </div>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
          <div className="flex gap-3">
             <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
             <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
          </div>
          <div className="flex gap-3">
             <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
             <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
          </div>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone Number" />
      </div>
      {/* text rigth side */}
      <div className="mt-8">
         <div className="mt-8 min-w-80">
           <CartTotal/>
         </div>
         <div className="mt-12">
           <Title text1={"PAYMENT"} text2={"METHOD"}/>
           {/* payment method selection */}
           <div className="flex gap-3 flex-col lg:flex-row">
             <div onClick={()=>detmethod("strip")} className="flex items-center ga--3 border p-2 px-4 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method==="strip" ? "bg-green-400" :""} `}></p>
                <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
             </div>
             <div onClick={()=>detmethod("razorapy")} className="flex items-center ga--3 border p-2 px-4 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full  ${method==="razorapy" ? "bg-green-400" :""}`}></p>
                <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
             </div>
             <div onClick={()=>detmethod("cod")} className="flex items-center ga--3 border p-2 px-4 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method==="cod" ? "bg-green-400" :""} `}></p>
                <p className="text-gray-500 text-sm font-medium mx-4">Cash On Delivery</p>
             </div>
           </div>
           <div className="w-full text-end mt-8">
             <button onClick={()=>navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
           </div>
         </div>
      </div>
    </div>
  )
}

export default PlaceOrder
