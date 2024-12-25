import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
const CartTotal = () => {
const {currency,delivery_fee,getcartamount}=useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
       <Title text1={"CART"} text2={"TOTALS"}/> 
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
         <div className="flex justify-between">
            <p>SubTotal</p>
            <p>{currency}{getcartamount()}.00</p>
         </div>
         <hr />
         <div className="flex justify-between">
          <p>Shipping Free</p>
          <p>{currency}{delivery_fee}.00</p>
         </div>
         <hr />
         <div className="flex justify-between">
          <p>Total</p>
          <p>{currency}{getcartamount()===0?0:getcartamount()+delivery_fee}.00</p>
         </div>
      </div>
    </div>
  )
}

export default CartTotal
