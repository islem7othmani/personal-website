import Home from './Home'
import Testimonial from './Testimonial';
import Footer from './Footer';
import Contact from './Contact'
import Projects from './Projects';
import Achievment from './Acheivment';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Stages from './Stages';

function Homepage() {
    return(
        <>
        <Home/>
<AboutMe/>

<Stages/>
<Projects/>
<Achievment/>
<Testimonial/>

<Contact/>
 
 <Footer/>
        </>
    )
}
export default Homepage