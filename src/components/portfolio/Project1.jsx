import React from 'react';
import EmployeeData from "../../assets/DataBlock.jpeg";
import EmployeeDIMS from "../../assets/Employee DIMS_ Team 16 Presentation.pdf";

const Project1 = () => {
  return (
    <div className="project__content">
        <h3 className="project__title">Employee DIMS </h3>
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
        <a download="" href={EmployeeDIMS} className="button-learnMore">
               Learn More
        </a>
    </div>
  )
}

export default Project1;