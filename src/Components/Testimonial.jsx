import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import banner from "../Images/banner.jpg";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import project from "../Images/project.png";
import exp from "../Images/exp.png";
import certificat from "../Images/certificat.png";
import fouita from "../Images/fouita.png";
import sapious from "../Images/sapious.png";
import poste from "../Images/posteT.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Testimonial() {
  /*const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < 5) {
        setCurrentNumber(currentNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [currentNumber]);

*/
  const [CounterOn, setConterOn] = useState(false);
  const [CounterOn1, setConterOn1] = useState(false);
  const [CounterOn2, setConterOn2] = useState(false);

  return (
    <>
      <div className="h-56 relative">
        <div className="w-full z-0">
          <img
            src={banner}
            alt=""
            className="absolute inset-0 h-56 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="flex justify-around items-center relative z-50 text-white top-16 font-semibold">
          <div className="space-y-2">
            <p className="text-5xl flex justify-center "><i class="fas fa-folder"></i></p>
            
            <p className="text-4xl flex justify-center">
              <ScrollTrigger
                onEnter={() => setConterOn(true)}
                onExit={() => setConterOn(false)}
              >
                {CounterOn && (
                  <CountUp start={0} end={6} duration={2} delay={0} />
                  
                )}
              </ScrollTrigger>
              <span className=" pl-2">Projects</span>
            </p>
          </div>
          <div>
          <p className="text-5xl flex justify-center"><i class="fas fa-briefcase"></i></p> 
          <p className="text-4xl flex justify-center"> 
            <ScrollTrigger
              onEnter={() => setConterOn1(true)}
              onExit={() => setConterOn1(false)}
            >
              {CounterOn1 && (
                <CountUp start={0} end={4} duration={2} delay={0} />
              )}
            </ScrollTrigger>
            <span className="pl-2">Experiences</span>
            </p> 

          </div>
          <div>
            <p className="text-5xl flex justify-center"><i class="fas fa-graduation-cap"></i></p>
            <p className="text-4xl flex justify-center">
            <ScrollTrigger
              onEnter={() => setConterOn2(true)}
              onExit={() => setConterOn2(false)}
            >
              {CounterOn2 && (
                <CountUp start={0} end={2} duration={2} delay={0} />
              )}
            </ScrollTrigger>
            <span className="pl-2">Certifications</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
