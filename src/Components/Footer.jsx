import linkedin from "../Images/LinkedIn-Symbole.png";
import github from "../Images/github.png";
import email from "../Images/Gmail_Logo_256px.png";
import phone from "../Images/phone-icon.png"

function Footer() {
  return (
    <>
      <div id="containerFooter" className="h-96 text-white">

        <h1 className="font-bold text-xl flex justify-center pt-12 pb-6">Let's Connect There</h1>
        <div className="flex space-x-4 flex justify-center py-6">
        <div>
          <div className="w-72 h-22 bg-gray-600 py-2 px-4 flex space-x-2 rounded-xl">
            <div>
              <span className="font-bold">LinkedIn</span>
              <p>Professional network profile</p>
            </div>

            <img className="h-6 relative top-4" src={linkedin} alt="LINKEDIN" />
          </div>
        </div>

        <div>
          <div className="w-72 h-22 bg-gray-600 py-2 px-4 flex space-x-2 rounded-xl">
            <div>
              <span className="font-bold">GitHub</span>
              <p>Github where I share my code</p>
            </div>

            <img className="h-6 relative rounded-full top-4 left-2" src={github} alt="github" />
          </div>
        </div>

        <div>
          <div className="w-72 h-22 bg-gray-600 py-2 px-4 flex space-x-2 rounded-xl">
            <div>
              <span className="font-bold">Email</span>
              <p>islemothmani159@gmail.com</p>
            </div>

            <img className="h-6 relative top-4" src={email} alt="LINKEDIN" />
          </div>
        </div>
        </div>
        <div className="flex justify-center pb-6">
          <div className="w-72 h-22 bg-gray-600 py-2 px-4 flex space-x-28 rounded-xl">
            <div>
              <span className="font-bold">Phone Number</span>
              <p>56789282</p>
            </div>

            <img className="h-6 relative top-4" src={phone} alt="LINKEDIN" />
          </div>
        </div>
        <hr className="text-gray-600 w-2/3 relative left-56"></hr>
        <p className="flex justify-center text-gray-500">
          &copy; 2023 Islem Othmani. All rights reserved.
        </p>
        
      </div>
    </>
  );
}

export default Footer;
