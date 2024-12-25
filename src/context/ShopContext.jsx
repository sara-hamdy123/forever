import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
 export const ShopContext=createContext();
        const ShopContextProvider=(props)=>{
        const currency="$";
        const delivery_fee=10;
        const [search,setsearch]=useState("");
        const [showsearch,setshowsearch]=useState(false)
        const [cartitem,setcartitem]=useState({})
        const navigate=useNavigate();
        const addtocart=async(itemId,productSize)=>{
        if(!productSize){
        toast.error("SelectProduct Size")
        return;
        }
        let cartdata=structuredClone(cartitem);
        if(cartdata[itemId]){
        if(cartdata[itemId][productSize]){
        cartdata[itemId][productSize]++;
        }
        else{
        cartdata[itemId][productSize]=1;
        }
        } 
        else{
        cartdata[itemId]={};
        cartdata[itemId][productSize]=1;
        }
        setcartitem(cartdata);
        }
        const getcartcount=()=>{
        let totalcount=0;
        for(const items in cartitem){
        for( const item in cartitem[items]){
        try{
        if(cartitem[items][item] >0){
        totalcount+=cartitem[items][item]
        }
        }
        catch(error){
            console.log(`error! ${error} `);
        }
        }
        }
        return totalcount;
        }
        const updatequantity=async(itemId,size,quantity)=>{
        let cartdata=structuredClone(cartitem)
        cartdata[itemId][size]=quantity;
        setcartitem(cartdata)
        }
        const getcartamount=()=>{
        let totalamunt=0;
        for(const items in cartitem){
        let iteminfo=products.find((product)=>product._id===items)
        for(const item in cartitem[items]){
        try{
        if(cartitem[items][item]>0){
        totalamunt+=iteminfo.price * cartitem[items][item]
        }
        }
        catch(error){
            console.log(`error! ${error} `);
        }
        }
        }
        return totalamunt;
        }
    const value={
    products,currency,delivery_fee,search,setsearch,showsearch,setshowsearch,addtocart,cartitem,getcartcount,updatequantity,
    
    getcartamount,navigate}
    return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider;