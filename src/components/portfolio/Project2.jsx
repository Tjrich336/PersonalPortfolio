import React from 'react';
import EmployeeData from "../../assets/EmployeeData.png";

const Project2 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Vitamin Tracker</h3>
        <img src={EmployeeData} alt="" className="project__img" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">

                <div>
                    <h3 className="project__name">Description:</h3>
                    <span className="project__description">
                      A FullStack Application for a user to track their vitamin/supplement usage.
                    </span>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Project2;