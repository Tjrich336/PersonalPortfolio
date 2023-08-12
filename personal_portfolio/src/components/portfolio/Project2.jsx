import React from 'react';
import EmployeeData from "../../assets/HealthTrack.jpeg";

const Project2 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Macro Tracker</h3>
        <img src={EmployeeData} alt="" className="project__img" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">

                <div>
                    <h3 className="project__name">Full-Stack (React + Firebase)</h3>
                    <span className="project__description">
                    Responsive website that utilizes Firebase real-time data syncing to enable users to easily track their macronutrient intake.
                    </span>
                </div>

                </div>
            </div>
        </div>
        <a href="https://trackmymacros.com" className="button-learnMore">
               Learn More
        </a>
    </div>
  )
}

export default Project2;