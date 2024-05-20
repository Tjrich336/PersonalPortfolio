import React from 'react';
import EmployeeData from "../../assets/OnlineShop.png";

const Project3 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Fiscalful</h3>
        <img src={EmployeeData} alt="" className="project__img" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">

                <div>
                    <h3 className="project__name">Full-Stack (React + PLAID API)</h3>
                    <span className="project__description">
                    Responsive website that allows users to link their bank account and create a personal budget plan and chat with an AI assistant.
                    </span>
                </div>

                </div>
            </div>
        </div>
        <a href="https://github.com/Tjrich336/Fiscalful" className="button-learnMore">
               Learn More
        </a>
    </div>
  )
}

export default Project3;