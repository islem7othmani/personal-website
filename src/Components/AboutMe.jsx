
//import { FaYoutube } from 'react-icons/fa';
import space3d from '../Images/space3d.jpg'

function AboutMe() {
    return(
        <>
   

<div class="container my-24 mx-auto md:px-6">
 
  <section class="mb-32">
  
    <div class="container mx-auto text-center lg:text-left xl:px-32">
      <div class="flex grid items-center lg:grid-cols-2">
        <div class="mb-12 lg:mb-0">
          <div
            class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 class="mb-8 text-3xl font-bold text-indigo-950">About Me</h2>

            <p class="mb-0 text-neutral-500 dark:text-neutral-300">
            to introduce myself as a web developer and content on Youtube and Wattpad.
         I am genuinely passionate about crafting exceptional online experiences through the power of code. With a strong foundation in web development languages such as HTML, CSS, JavaScript, React js, Node js ..., I have honed my skills in building intuitive, user-friendly,
         and visually appealing websites.
         And I am passionate about creating engaging and entertaining content that resonates with my audience. With a love for storytelling and a knack for creativity, I strive to deliver videos that inform, inspire, and entertain. 
         I have a Bachlor degree on computing management Business Intelligence and I was top of the class for 3 years.
         I also love writing novels on different online plateform but i had success on Wattpad and they accepted me as 
         a Wattpad Content creator.
            </p>
          </div>
        </div>

        <div>
          <img src={space3d}
            class="w-full  rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
        </div>
      </div>
    </div>

  </section>

</div>
        </>
    )
}
export default AboutMe