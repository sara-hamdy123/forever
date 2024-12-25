import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"
const Collection = () => {
const { products,search,showsearch }=useContext(ShopContext);
const [showfilter,setshowfilter]=useState(false);
const [filterproducts,setfilterproducts]=useState([]);
const [category,setcategory]=useState([]);
const [subCategory,setsubCategory]=useState([]);
const [sorttype,setsorttype]=useState("relavent");
const togglecatgory=(e)=>{
if(category.includes(e.target.value)){
setcategory(prev=>prev.filter((item)=>item !== e.target.value))
}
else{
setcategory(prev=>[...prev,e.target.value])
}
}
const togglesubcatgory=(e)=>{
    if(subCategory.includes(e.target.value)){
        setsubCategory(prev=>prev.filter((item)=>item !== e.target.value))
    }
    else{
        setsubCategory(prev=>[...prev,e.target.value])
    }
    }
    const apllyfilter=()=>{
    let productscopy=products.slice();
    if(showsearch &&search){
    productscopy=productscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
    productscopy=productscopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length > 0){
        productscopy=productscopy.filter(item=>subCategory.includes(item.subCategory))
    }
        setfilterproducts(productscopy);
    }
    const sortproducts=()=>{
    let filterproductcopy=filterproducts.slice();
    switch (sorttype) {
        case "low-high":
            setfilterproducts(filterproductcopy.sort((a,b)=>(a.price-b.price)));
            break;
        case "high-low":
            setfilterproducts(filterproductcopy.sort((a,b)=>(b.price-a.price)));
            break;
        default:
            apllyfilter();
            break;
    }
    }
useEffect(()=>{
    apllyfilter();
    },[subCategory,category,search,showsearch])
    
    useEffect(()=>{
    sortproducts();
    },[sorttype])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
      <p onClick={()=>setshowfilter(!showfilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
      <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showfilter?"rotate-90":""}`} />
      </p>
      
      {/* cat filter */}
      <div className={`border border-gray-300 ol-5 py-3 mt-6 ${showfilter? "":"hidden"} sm:block`}>
      <p className="mb-3 text-sm font-medium">CATEGEORIES</p>
      <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
      <p className="flex gap-2">
        <input type="checkbox"  className="w-3" value={"Men"} onChange={togglecatgory}/> Men
      </p>
      <p className="flex gap-2">
        <input type="checkbox"  className="w-3" value={"Women"} onChange={togglecatgory}/> Women
      </p>
      <p className="flex gap-2">
        <input type="checkbox"  className="w-3" value={"Kids"} onChange={togglecatgory}/> Kids
      </p>
      </div>
      </div>
      {/* subcat filter */}
      <div className={`border border-gray-300 ol-5 py-3 my-5 ${showfilter? "":"hidden"} sm:block`}>
      <p className="mb-3 text-sm font-medium">TYPE</p>
      <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
      <p className="flex gap-2">
        <input type="checkbox"  className="w-3" value={"Topwear"} onChange={togglesubcatgory}/> Topwear
      </p>
      <p className="flex gap-2">
        <input type="checkbox"  className="w-3" value={"Bottomwear"} onChange={togglesubcatgory}/> Bottomwear
      </p>
      <p className="flex gap-2">
        <input type="checkbox"  className="w-3" value={"Winterwear"} onChange={togglesubcatgory}/> Winterwear
      </p>
      </div>
      </div>
      </div>
      {/* rigth side */}
      <div className="flex-1">
       <div className="flex justify-between text-base sm:text-2xl mb-4">
         <Title text1={"ALL"} text2={"COLLECTIONS"}/>
         {/* product sort */}
         <select onChange={(e)=>setsorttype(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
         <option value="relavent">Sort By : Relavent</option>
         <option value="low-high">Sort By : Low To High</option>
         <option value="high-low">Sort By : High To Low</option>
         </select>
       </div>
       {/* map products */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
         {
         filterproducts.map((item,index)=>(
         <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
         ))
         }
       </div>
      </div>
    </div>
  )
}

export default Collection
