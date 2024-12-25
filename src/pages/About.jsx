import Title from "../components/Title"
import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt voluptates magnam quod excepturi distinctio, ipsum, nihil maxime perferendis fugiat ratione eius? Quo quas, velit ut aperiam eum esse ipsa?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores unde laborum? Sed consectetur facere quas, non delectus voluptate perferendis vel, inventore voluptatum aliquam, autem tempore dolorum nihil excepturi laborum.</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro beatae dolor quasi quaerat iure reprehenderit perspiciatis excepturi amet ratione quae inventore, explicabo tenetur, velit accusamus odio molestias fuga pariatur!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col ga-5">
          <b>Quality Asuurancy</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint corrupti pariatur blanditiis, laborum, cupiditate possimus minus quis quibusdam est alias reiciendis, deleniti dolores mollitia corporis vel nisi odio aspernatur.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col ga-5">
          <b>Converience</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint corrupti pariatur blanditiis, laborum, cupiditate possimus minus quis quibusdam est alias reiciendis, deleniti dolores mollitia corporis vel nisi odio aspernatur.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col ga-5">
          <b>Execptional customer Service</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint corrupti pariatur blanditiis, laborum, cupiditate possimus minus quis quibusdam est alias reiciendis, deleniti dolores mollitia corporis vel nisi odio aspernatur.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
