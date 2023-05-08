import React from 'react';
import EmployeeData from "../../assets/EmployeeData.png";

const Project1 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Employee Database</h3>
        <img src={EmployeeData} alt="" className="project__img" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">
                <div>
                    <h3 className="project__name">Description:</h3>
                    <span className="project__description">
                      A MySQL database that tracks employee personal and demographic information.
                    </span>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Project1;