import React from 'react';
import "./portfolio.css";
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Notable Projects</span>

        <div className="portfolio__container container grid">
            <Project1 />
            <Project2 />
            <Project3 />
        </div>
    </section>
  )
}

export default Portfolio;