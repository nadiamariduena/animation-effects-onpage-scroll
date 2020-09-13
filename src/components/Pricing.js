import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
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
      <h1>hello pricing</h1>
      <div className="boxes1"></div>
      <div className="boxes2"></div>
      <div className="boxes3"></div>
      <div className="boxes4"></div>
      <div className="boxes5"></div>
    </React.Fragment>
  );
};

export default Pricing;
