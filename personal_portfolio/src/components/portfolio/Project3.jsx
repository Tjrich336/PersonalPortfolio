import React from 'react';
import EmployeeData from "../../assets/OnlineShop.png";

const Project3 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Online Retail Store</h3>
        <img src={EmployeeData} alt="" className="project__img" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">

                <div>
                    <h3 className="project__name">Backend (Java)</h3>
                    <span className="project__description">
                    Application that allows users to simulate onliine shopping, acting as both a UI (User) and a OI (Owner) interface.
                    </span>
                </div>

                </div>
            </div>
        </div>
        <a href="https://github.com/Tjrich336/RetailStore" className="button-learnMore">
               Learn More
        </a>
    </div>
  )
}

export default Project3;