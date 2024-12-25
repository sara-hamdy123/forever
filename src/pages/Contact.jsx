import Title from "../components/Title"
import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-20">
        <img src={assets.contact_img} alt=""  className="w-full md:max-w-[480px]"/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 ">Our Store</p>
          <p className="text-gray-500"> Mansoura ,Elkurdi <br />elm3z bllah street</p>
          <p className="text-gray-500"> Tel:(+19892200387) <br /> Email: store.com</p>
          <p className="text-gray-600 font-semibold text-xl">Careers at forever</p>
          <p className="text-gray-500">Read Moreabou team and job oppening</p>
          <button className= "border border-black  px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Exploer Job</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
