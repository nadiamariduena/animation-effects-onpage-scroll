import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Content = () => {
  /*

                -----------------------------------
                    WHAT THE INITIALIZATION DOES?
                -----------------------------------

                    Basically it gives GLOBAL animation to eny single one of the things
                    you want animate, so lets say i have a grid of 4 BOXES and i want them all,
                    to have an animation length of 2 seconds, i would basically put inside of 
                    here a duration  Aos.init({duration: 2000});  and now every single animation
                    when it s about to be trigger, it s going to take 2 seconds to complete
    
    
    */
  // ------  INITIALIZE AOS  -------

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // ------  INITIALIZE AOS  -------
  return (
    <React.Fragment>
      <div className="boxContainer">
        <h1>EXAMPLES</h1>
        <div className="boxes">1</div>
        <div className="boxes">2</div>

        <div data-aos="fade-down" className="boxes">
          fade-down
        </div>

        <div data-aos="fade-up" className="boxes">
          fade-up
        </div>
        <div data-aos="fade-right" className="boxes">
          fade-right
        </div>
        <div data-aos="fade-left" className="boxes">
          fade-left
        </div>
        <div data-aos="flip-right" className="boxes">
          flip-right
        </div>
        <div data-aos="fade-down-right" className="boxes">
          fade-down-right
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
