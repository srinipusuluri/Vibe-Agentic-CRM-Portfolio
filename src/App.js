import React, { useState } from 'react';
import './App.css';
import ProjectsCarousel from './ProjectsCarousel';
import AIUseCasesCarousel from './AIUseCasesCarousel';
import CPQProjectsCarousel from './CPQProjectsCarousel';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const platforms = [
    { name: 'Google', url: 'https://www.google.com/search?q=' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=' },
    { name: 'GitHub', url: 'https://github.com/search?q=' },
    { name: 'ArXiv', url: 'https://arxiv.org/search/?query=' },
    { name: 'LinkedIn Jobs', url: 'https://www.linkedin.com/jobs/search/?keywords=' },
    { name: 'Twitter', url: 'https://twitter.com/search?q=' },
    { name: 'Reddit', url: 'https://www.reddit.com/search/?q=' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/search?q=' },
    { name: 'Hugging Face', url: 'https://huggingface.co/search?q=' },
    { name: 'Medium', url: 'https://medium.com/search?q=' },
    { name: 'Quora', url: 'https://www.quora.com/search?q=' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/search?q=' },
    { name: 'Coursera', url: 'https://www.coursera.org/search?query=' },
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/w/index.php?search=' },
    { name: 'Semantic Scholar', url: 'https://www.semanticscholar.org/search?q=' },
  ];

  const handleSearch = () => {
    const searchLinks = platforms.map(platform => ({
      ...platform,
      link: platform.url + encodeURIComponent(query),
    }));
    setResults(searchLinks);
  };

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'projects', label: 'SFDC Projects' },
    { id: 'cpq-projects', label: 'CPQ Projects' },
    { id: 'ai-usecases', label: 'AI Use Cases' },
    { id: 'community-trainings', label: 'Community Trainings' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <h1>Welcome to Vibe Agentic CRM</h1>
            <p>The future of CRM will be agentic—powered by intelligent AI agents that act proactively, not reactively. Instead of static dashboards and manual workflows, agentic CRMs will anticipate customer needs, suggest next best actions, and even execute routine tasks like scheduling, follow-ups, and personalized outreach. These systems will learn from every interaction, adapting tone, channel, and content to each customer's unique journey. Human teams stay in control, focusing on strategy and high-value relationships, while the CRM continuously handles repetitive work in the background. This evolution makes customer engagement more predictive, personalized, and frictionless than ever before.</p>
            <h2>🌟 Tagline</h2>
            <p>Agentic CRM: Anticipate, Automate, and Elevate Every Customer Experience.</p>
            <h2>🔑 Three Pillars</h2>
            <ul>
              <li><strong>Predictive Engagement</strong> – AI agents forecast needs and deliver timely, relevant outreach.</li>
              <li><strong>Seamless Automation</strong> – Routine tasks, follow-ups, and scheduling handled in the background.</li>
              <li><strong>Human + AI Synergy</strong> – Teams focus on strategy while the CRM ensures flawless execution.</li>
            </ul>
            <p>Join the conversation: <a href="https://www.linkedin.com/groups/14784524/" target="_blank" rel="noopener noreferrer">Agentic CRM LinkedIn Group</a></p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Type your search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            {results.length > 0 && (
              <div className="results-container">
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="search-link"
                  >
                    Search on {result.name}
                  </a>
                ))}
              </div>
            )}
          </>
        );
      case 'about':
        return (
          <div className="about-content">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQH3ARFIe5-gLw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689609808020?e=1762387200&v=beta&t=sn3JwM1hjdd1gGA5mS1jj-nxgEARy_BzZQ5B2TRNKeE" alt="Srini Pusuluri" style={{width: '200px', height: '200px', borderRadius: '50%', margin: '20px'}} />
            <h1>About Me</h1>
            <p>Hi, I'm Srini Pusuluri, a Senior Salesforce CRM CX - AI Architect with extensive experience in AI/ML, n8n, AWS, GCP, LLM, CRM, CPQ, and more.</p>
            <p>I specialize in AI-driven CRM transformations, building predictive and generative AI systems, and architecting complex projects within secure, scalable frameworks.</p>
            <ul>
              <li>Hands-on LLM evaluation, data annotation, model fine-tuning</li>
              <li>CRM AI transformations for sales and service clouds</li>
              <li>AI agents for payments, KYC, sentiment analysis, etc.</li>
              <li><a href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=NjSJyc1Q6VOSkk9Dhxo3I6kTgKYqtJITYImSnF8SA3GhDe/U18mdvXqX2YIHIb4p" target="_blank" rel="noopener noreferrer">20+ Salesforce certifications, AI and trainer</a></li>
            </ul>
          </div>
        );
      case 'portfolio':
        return (
          <div className="portfolio-content">
            <h1>Portfolio</h1>
            <p>Explore my work in AI, Salesforce, and CRM integrations.</p>
            <a href="https://github.com/srinipusuluri" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            <br />
            <a href="https://www.linkedin.com/in/pusulurisrinivasa" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <br />
            <a href="https://www.linkedin.com/in/pusulurisrinivasa/details/publications/" target="_blank" rel="noopener noreferrer">Publications</a>
          </div>
        );
      case 'chat':
        return (
          <div className="chat-content">
            <h1>Free LLM Chat</h1>
            <p>Use the chat widget in the bottom right corner for AI conversations.</p>
          </div>
        );
      case 'projects':
        return (
          <div className="projects-content">
            <h1>Srini Pusuluri SFDC Projects</h1>
            <ProjectsCarousel />
          </div>
        );
      case 'cpq-projects':
        return (
          <div className="cpq-projects-content">
            <CPQProjectsCarousel />
          </div>
        );
      case 'ai-usecases':
        return (
          <div className="ai-usecases-content">
            <AIUseCasesCarousel />
          </div>
        );
      case 'community-trainings':
        return (
          <div className="community-trainings-content">
            <h1>Community Trainings</h1>
            <h2>Salesforce Areas:</h2>
            <ul>
              <li>Dev (Developer)</li>
              <li>Admin (Administrator)</li>
              <li>CPQ (Configure Price Quote)</li>
              <li>Architect (Salesforce Architect)</li>
            </ul>
            <h2>AI Areas:</h2>
            <ul>
              <li>AI (Artificial Intelligence)</li>
              <li>ML (Machine Learning)</li>
              <li>LLM (Large Language Models)</li>
              <li>GenAI (Generative AI)</li>
              <li>Finetuning</li>
              <li>RAG (Retrieval-Augmented Generation)</li>
            </ul>
          </div>
        );
      case 'contact':
        return (
          <div className="contact-content">
            <h1>Contact</h1>
            <p>Email: psrao.new@gmail.com</p>
            <p>Education: M Tech IIT Kharagpur, Gen AI PG in Purdue</p>
            <p><a href="https://www.linkedin.com/in/pusulurisrinivasa/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p>Purdue University Alumni</p>
            <p>Frisco, Texas, United States</p>
            <p>7,339 followers on LinkedIn | 500+ connections</p>
            <p>15yrs IT experience with 12yrs in CRM/SFDC and 2yrs in AI</p>
          </div>
        );
      default:
        return <h1>Welcome</h1>;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <nav className="nav-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="app-main">
        {renderContent()}
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-main">
            <h3>SRINI Pusuluri (Sr Salesforce CRM CX - AI is all we need)</h3>
            <p>AI/CRM Architect (exp in AI/ML/n8n/aws/gcp/llm/CRM/CPQ, multi model voice ai advanced rag, Security, Integration, Agentforce, 20 sfdc and 5 ai certs - ai, salesforce trainer - DF speaker - github.com/srinipusuluri)</p>
            <p>BILL - Purdue University - Frisco, Texas, United States</p>
            <p>Contact: <a href="https://www.linkedin.com/in/pusulurisrinivasa/details/publications/" target="_blank" rel="noopener noreferrer">LinkedIn Publications</a></p>
            <p>About:</p>
            <ul>
              <li>Hands-on LLM eval, data annotation, model fine tuning and promoting expert</li>
              <li>Focus on crm fintech specific but have good grasp on other areas too</li>
              <li>Domain and task ai/ml workflows builder</li>
              <li>Experienced crm AI transformations of sales and service cloud crm architecture</li>
              <li>Building AI/CRM roadmap, do POC devrev, Agentforce n8n and deploy in web and mobiles in help.bill.com</li>
              <li>AI strategy building, team trainings and offshore coordinations</li>
              <li>Migrations, mergers acquisitions and multi org merger expert</li>
              <li>Provide hands-on and Architect solutions for BILL projects.</li>
              <li>Build predictive, generative and agentic ai systems</li>
              <li>Build AI agents for status checks, payments, kyc and many more</li>
              <li>Develop Gen AI Agentforce CRM solutions like sentiment analysis, text summarization, classification, chat call analytics, anomaly detection</li>
              <li>Architected complex high volume AI and CRM projects within Security, Data, Integration, Multi Channel, Multi Language, Multi Device, Dev&Devops frameworks</li>
              <li>Recently rolled out Einstein AIBots, Chats, portals, CTI, Omni Channel</li>
              <li>Delivered more than 40 projects successfully with companies of 10M to 1B revenues</li>
              <li>AI SFDC Architect, CPQ, and Advanced Dev PD2 (20+ Certified) with strong knowledge of the AI digital transformation of all sales/service/marketing/finance</li>
              <li>15yrs of IT with 2 yrs in AI 12Yrs CRM/SFDC - Building teams, solutions, Strategies, Governance, Innovations, Optimization, Performance.</li>
              <li>Expert in integrations, data cleaning, IT governance & management, Steelbrick CPQ, Conga CLM, Revpro RevRec, Gainsight CSM renewals, Communities, Lightning Planning & Migration, D&B, data.com, Release and Sandbox planning, Complex integrations & surveys, LeanData/Fullcircle/Refrenaceedge Marketing tools, Dell Boomi/Talend API;</li>
              <li>I know how to run IT ops using Salesforce.com echo system, and ERP systems in SaaS/Cloud, Open Source, Subscription, Contracts, Renewals, CSM Product development business models, with tons of coding, integrations, vendor products evaluate and deal huge data</li>
              <li>Provide end to end solution in salesforce.com large orgs in setting up CRM and non CRM in B2B and B2C space in new orgs, migrating legacy orgs, tuning and improving adoption rate, data quality of existing orgs in sales, service, force.com .</li>
              <li>Designed secure, scalable, performance, maintainable systems</li>
              <li>Rank Vendor tools and software tools RFP, vendor team offshore coordination</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
