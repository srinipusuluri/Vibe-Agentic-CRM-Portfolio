import React, { useState } from 'react';
import './CPQProjectsCarousel.css';

const cpqProjects = [
  {
    title: 'End-to-End Quote-to-Cash Architecture',
    description: 'Design, Develop & Implemented Salesforce Revenue Cloud CPQ + Billing Order Management CLM (Contract Lifecycle Management) Product & Price Book Governance Multi-Business Process Support (RevTech & FinSys) Key Outcomes: Consolidated fragmented CPQ processes under unified Revenue Cloud architecture Enabled seamless flow from Quote → Contract → Order → Invoice'
  },
  {
    title: 'CPQ Lifecycle Management',
    description: 'Design, Develop & Implemented Product Configuration (bundles, rules, constraint rules) Pricing (price rules, discount schedules, proration) Quoting (guided selling, QLE customizations) Document Generation (dynamic templates, conditional terms) Amendments, Renewals, Re-quotes Key Outcomes: Legacy CPQ customizations refactored for standard CPQ+Billing compatibility Replaced static quote templates with dynamic, legal-driven templates Migrated to newer CPQ data model (quote term libraries, enhanced QLE)'
  },
  {
    title: 'Contract Lifecycle & CLM Automation',
    description: 'Design, Develop & Implemented Contract object utilization Term libraries & clause conditions Integration with DocuSign for e-signature Key Outcomes: Shifted contract management to CLM-integrated workflows Empowered Legal to control contract language via metadata-driven conditions Replaced manual PDF merges with automated DocuSign envelope handling'
  },
  {
    title: 'Order & Revenue Orchestration',
    description: 'Design, Develop & Implemented Order object orchestration Order Product transformation from Quote Lines Billing triggers post-order Usage-based or milestone-based billing rules Key Outcomes: Introduced Billing triggers post-order generation Implemented unified object model between CPQ → Orders → Invoices Enabled NetSuite integration for financial postings'
  },
  {
    title: 'Integration Architecture',
    description: 'Design, Develop & Implemented Dell Boomi for middleware orchestration NetSuite integration (ERP) DocuSign for contracts Key Outcomes: Offloaded heavy transformations to Dell Boomi Reduced Salesforce CPU load by pre-processing in middleware Aligned data flows across RevTech, FinSys, and ERP ecosystems'
  },
  {
    title: 'Automation Refactoring',
    description: 'Design, Develop & Implemented Flows, Apex, Triggers "One Flow per Object per Transaction" governance model Key Outcomes: Replaced Workflow Rules & Process Builders with Flows Improved governor limit resilience Reduced tech debt by consolidating automation layers'
  },
  {
    title: 'Product Catalog & Pricing Governance',
    description: 'Design, Develop & Implemented Product hierarchies Attribute-based configuration Price rules and block pricing Key Outcomes: Rationalized catalog across B2B product lines Standardized pricing with rule-based automation Migrated legacy bundles to CPQ-configured bundles'
  }
];

function CPQProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === cpqProjects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? cpqProjects.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <h2>CPQ Projects</h2>
      <div className="carousel-content">
        {cpqProjects.map((project, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="nav-btn prev">&#8249;</button>
      <button onClick={nextSlide} className="nav-btn next">&#8250;</button>
    </div>
  );
}

export default CPQProjectsCarousel;
