import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fouita from "../Images/fouita.png";
import sapious from "../Images/sapious.png";
import poste from '../Images/posteT.jpg'
function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mb-12 bg-white flex justify-center" id="testimonialId">
        <Slider {...settings} className="bg-white  w-2/3 rounded-2xl mt-12">
          <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <div class="max-w-screen-md mx-auto">
                <svg
                  class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">
                    "Excelent work, she has truly impressed us with her
                    outstanding work and seamless integration into our team.
                    From day one, she exhibited a remarkable understanding of the
                    concept of A/B testing and its significance in driving
                    data-informed decisions."
                  </p>
                </div>
                <div class="flex items-center justify-center mt-6 space-x-3">
                  <img
                    class="w-12 rounded-full bg-gray-200 p-1"
                    src={fouita}
                    alt="profile picture"
                  />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-gray-900 dark:text-white">
                      Fouita
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <div class="max-w-screen-md mx-auto">
                <svg
                  class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">
                    "She is an extraordinary individual whose unwavering
                    motivation sets her apart. Her drive and determination are
                    unmatched, and it is truly inspiring to witness her
                    unwavering commitment to achieving excellence in everything
                    she undertakes."
                  </p>
                </div>
                <div class="flex items-center justify-center mt-6 space-x-3">
                  <img
                    class="w-12 rounded-full bg-gray-200 p-1"
                    src={sapious}
                    alt="profile picture"
                  />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-gray-900 dark:text-white">
                      Sapious
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <div class="max-w-screen-md mx-auto">
                <svg
                  class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">
                    "She is a fast learner employee, she has a remarkable ability to absorb information swiftly.
                     She can efficiently process and understand complex ideas,
                     often needing minimal explanation or instruction to grasp new concepts."
                  </p>
                </div>
                <div class="flex items-center justify-center mt-6 space-x-3">
                  <img
                    class="w-12 rounded-full bg-gray-200 p-1"
                    src={poste}
                    alt="profile picture"
                  />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-gray-900 dark:text-white">
                      Post office director
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
