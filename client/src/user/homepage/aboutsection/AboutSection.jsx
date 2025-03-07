import '../HomePage.css';
import marineImage from '../../../assets/marine2.jpg'; 
import ServiceSection from '../servicesection/ServiceSection';
import FeatureSection from '../experiencesection/ExperienceSection';
import fish1 from "../../../assets/image/fish1.gif";
import fish2 from "../../../assets/image/fish2.gif";
import fish3 from "../../../assets/image/fish3.webp";
import fish4 from "../../../assets/image/fish4.webp";

const About = () => {
  return (
    <div className="same-bg">
      <img src={fish1} alt="fish" className='fish' />
      <img src={fish2} alt="fish" className='fish' />
      <img src={fish3} alt="fish" className='fish' />
      <img src={fish4} alt="fish" className='fish' />
      <img src={fish2} alt="fish" className='fish' />
      <img src={fish1} alt="fish" className='fish' />
      <img src={fish3} alt="fish" className='fish' />
      <img src={fish4} alt="fish" className='fish' />
      <img src={fish1} alt="fish" className='fish' />
      <img src={fish1} alt="fish" className='fish' />
      <img src={fish2} alt="fish" className='fish' />
      <img src={fish1} alt="fish" className='fish' />
      <img src={fish1} alt="fish" className='fish' />
      <img src={fish2} alt="fish" className='fish' />
      <img src={fish1} alt="fish" className='fish' />
      <section id="about" className="about-section">
     
     <div className="about-container">
     <h2 className="about-title">About Us</h2>
       <div className="about-content-wrapper">
         <div className="about-content">
       
           <p>
             We started our career as shipyard workers in Singapore in 2004. Initially, we were part of the fabrication department in the Shipyard, specializing in piping and steel work. Over time, we developed our skills step by step and were promoted to roles such as Supervisor, Skilled Fitter, and Welder.
           </p>
           <p>
             Our experience extends to anchorage jobs and Riding Crew roles, seawater pipe repairs, ballast pipe work, and all types of piping work. We also handle deck outfitting jobs and hull plate renewal.
           </p>
           <p>
             Our core strengths are teamwork, pre-planning, timely job completion, mutual respect, and continuous skill development.
           </p>
         </div>
         <div className="about-image">
           <img src={marineImage} alt="Marine Ship Service" />
         </div>
       </div>
     </div>
   </section>
   <ServiceSection/>
   <FeatureSection/>
    </div>
  );
};

export default About;
