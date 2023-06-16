import abtest from "../Images/abtesting.png";
// import { GoCodescan } from "react-icons/go";
import abtestvid from '../Images/abtestvid.mp4'
import chart1 from '../Images/chart1.png';
import filter2 from '../Images/filter2.png'
function ABtest() {
  return (
    <>
      <div className="md:mx-auto md:container px-4 relative bottom-20">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color relative left-12">
                  <h1 className="text-2xl lg:text-2xl md:leading-snug tracking-tighter f-f-l font-poppins font-bold">
                    What is A/B testing ?
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    A/B testing, also known as split testing, is a method used
                    in marketing and product development to compare two or more
                    variations of a web page, advertisement, or user experience
                    to determine which one performs better. It is a statistical
                    hypothesis testing technique that helps make data-driven
                    decisions and optimize outcomes.
                  </h2>
                  <div className="">
                    <h1 className="font-bold text-xl pb-2">
                      Benefits of the project
                    </h1>
                    <div className="block">
                      <div className="flex space-x-4">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <h2>Using the trackers</h2>
                      </div>
                      <div className="flex space-x-4">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <h2>Data Vizulasation</h2>
                      </div>
                      <div className="flex space-x-4">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <h2>Statistics</h2>
                      </div>
                    </div>
                    <button class="relative top-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      <span>github link</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>


              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 relative right-2 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src={abtest}
                  alt
                />
              </div>
            </div>
          </div>
        </div>



        <video class="w-full relative top-16 shadow-xl" autoplay controls>
  <source className="" src={abtestvid} type="video/mp4"/>
  Your browser does not support the video tag.
</video>


        <div className="pb-32 pt-16 relative top-28">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                    Easily manage sales through our invoicing system
                  </h1>
                  <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                    Here at Globex we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                      Lets Get Started
                    </h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <div>
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src={chart1}
                  alt
                />
                </div>
            
                
              </div>
            </div>
          </div>
        </div>


<div className="flex">
    <div>
    <h1 className="text-2xl lg:text-2xl tracking-tighter md:leading-snug f-f-l font-black">
                    Easily manage sales through our invoicing system
                  </h1>
                  <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r py-8 w-2/3">
                    Here at Globex we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </h2>
    </div>
    <div className="relative right-36 w-3/4 h-2/3">
        <img src={filter2} alt="" />
    </div>
</div>

        
      </div>
    </>
  );
}

export default ABtest;
