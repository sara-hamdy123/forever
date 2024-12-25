import { useState } from "react"

const Login = () => {
const [currentstate,setcurrentstate]=useState("Sign Up");
const onsubmithandler=async(e)=>{
e.preventDefault();
}
  return (
    <form className="flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" onSubmit={onsubmithandler}>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl ">{currentstate}</p>
        <hr  className="border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
     {currentstate ==="Login" ?"" :<input type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-800" required />} 
      <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-800" required />
      <input type="password" placeholder="password" className="w-full px-3 py-2 border border-gray-800" required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
      <p className="cursor-pointer text-blue-500 ">Forgot Your Password?</p>
      {
      currentstate==="Login"
      ?
      <p className="cursor-pointer" onClick={()=>setcurrentstate("Sign Up")}>Create Account</p>
      :
      <p className="cursor-pointer" onClick={()=>setcurrentstate("Login")}>Login Here</p>
      }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentstate==="Login" ?"Sign In":"Sign Up"}</button>
    </form>
  )
}

export default Login
