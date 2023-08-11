import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class="uil uil-trophy about__icon"></i>

                <h3 className="about__title2">Experience</h3>
                <span className="about__subtitle">B.S Computer Science</span>
            </div>

            <div className="about__box">
            <i class="uil uil-briefcase-alt about__icon"></i>

                <h3 className="about__title2">Completed</h3>
                <span className="about__subtitle">5+ Projects</span>
            </div>

            <div className="about__box">
            <i class="uil uil-envelope-question about__icon"></i>

                <h3 className="about__title2">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info;