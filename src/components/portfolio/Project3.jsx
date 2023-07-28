import React from 'react';
import EmployeeData from "../../assets/EmployeeData.png";

const Project3 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Retail Store</h3>
        <img src={EmployeeData} alt="" className="project__img" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">

                <div>
                    <h3 className="project__name">Backend (Java)</h3>
                    <span className="project__description">
                    Retail Store that allows the user to simulate a onliine shopping experience through a backend application, acting as both a UI (User) and a OI (Owner) Interface.
                    </span>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Project3;