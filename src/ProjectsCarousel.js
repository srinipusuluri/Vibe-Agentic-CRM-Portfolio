import React, { useState } from 'react';
import './ProjectsCarousel.css';

const projects = [
  {
    title: 'Tech Debt Cleanup/Org Tuneup Architectural Planning',
    description: 'A comprehensive review of your Salesforce org to identify and eliminate technical debt, improving system performance and maintainability. Focus on cleaning unused objects, fields, and workflows.'
  },
  {
    title: 'SFDC LEX Migration Adoption',
    description: 'Transitioning from Salesforce Classic to Lightning Experience (LEX) requires a clear adoption strategy. Begin with a readiness assessment.'
  },
  {
    title: 'SFDC Sales Cloud CPQ Performance Tuning',
    description: 'Enhance Salesforce CPQ performance by optimizing key configurations and processes. Analyze product catalog structure.'
  },
  {
    title: 'SFDC Sales Cloud Lightning Migration',
    description: 'Migrating to Salesforce Lightning involves a detailed plan for seamless transition. Begin with a readiness check.'
  },
  {
    title: 'SFDC CPQ Reengineering Subscriptions & Contracts',
    description: 'Reengineer subscription and contract processes to improve CPQ efficiency. Automate contract renewals.'
  },
  {
    title: 'SFDC Integration Impartner Partner Portal',
    description: 'Integrate Impartner Partner Portal with Salesforce to streamline partner relationship management.'
  },
  {
    title: 'SFDC Integration Docebo Learning Portal Integration',
    description: 'Integrate Docebo Learning Portal with Salesforce to enhance training and learning management.'
  },
  {
    title: 'SFDC CPQ Subscription Cloud Provisioning',
    description: 'Streamline subscription provisioning by integrating Salesforce CPQ with cloud provisioning systems.'
  },
  {
    title: 'SFDC Customer Community Migration',
    description: 'Plan and execute the migration of your Customer Community to Salesforce Experience Cloud.'
  },
  {
    title: 'SFDC Qualtrics Survey Implementation',
    description: 'Integrate Qualtrics with Salesforce to capture customer feedback. Sync survey responses.'
  }
];

function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="nav-btn prev">‹</button>
      <div className="carousel-content">
        {projects.map((project, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="nav-btn next">›</button>
    </div>
  );
}

export default ProjectsCarousel;
