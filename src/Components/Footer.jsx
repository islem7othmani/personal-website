import linkedin from "../Images/LinkedIn-Symbole.png";
import github from "../Images/github.png";
import email from "../Images/Gmail_Logo_256px.png";
import phone from "../Images/phone-icon.png";

function Footer() {
  return (
    <>
      <div id="contact" className=" h-auto text-white bg-black w-auto">

        <h1 className=" font-bold text-xl flex justify-center pt-12 pb-6">Let's Connect There</h1>
        
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-6 mx-12">
          <div>
            <div className="w-auto h-22 bg-gray-600 py-2 px-2 flex justify-between text-sm rounded-xl">
              <div>
                <span className="font-bold">LinkedIn</span>
                <p>Professional network profile</p>
              </div>
              <img className="h-6 w-8 rounded-full relative top-2" src={linkedin} alt="LinkedIn" />
            </div>
          </div>

          <div>
            <div className="w-auto h-22 bg-gray-600 py-2 px-2 flex justify-between text-sm rounded-xl">
              <div>
                <span className="font-bold">GitHub</span>
                <p>Github where I share my code</p>
              </div>
              <img className="h-6 w-8 rounded-full relative top-2" src={github} alt="GitHub" />
            </div>
          </div>

          <div>
            <div className="w-auto h-22 bg-gray-600 py-2 px-2 flex justify-between text-sm rounded-xl">
              <div>
                <span className="font-bold">Email</span>
                <p>islemothmani159@gmail.com</p>
              </div>
              <img className="h-6 w-6 rounded-full relative top-2" src={email} alt="Email" />
            </div>
          </div>

          <div>
            <div className="w-auto h-22 bg-gray-600 py-2 px-2 flex justify-between text-sm rounded-xl">
              <div>
                <span className="font-bold">Phone Number</span>
                <p>56212806</p>
              </div>
              <img className="h-6 w-8 rounded-full relative top-2" src={phone} alt="Phone" />
            </div>
          </div>
        </div>

        <hr className="text-gray-600 w-2/3 mx-auto"></hr>
      </div>
    </>
  );
}

export default Footer;
