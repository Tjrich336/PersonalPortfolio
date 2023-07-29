import React from 'react';
import EmployeeData from "../../assets/DataBlock.jpeg";

const Project1 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Employee Database</h3>
        <img src={EmployeeData} alt="" className="project__img-data" />

        <div className="project__box">
            <div className="project__group">
                <div className="project__data">
                <div>
                    <h3 className="project__name">Backend (mySQL)</h3>
                    <span className="project__description">
                    MySQL database that manages employee demographic and personal information, enabling streamlined administrative processes.
                    </span>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Project1;