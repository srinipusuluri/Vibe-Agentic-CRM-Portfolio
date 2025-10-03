import React, { useState } from 'react';
import './AIUseCasesCarousel.css';

const useCases = [
  {
    title: 'Marketing & Campaign Optimization',
    description: 'Inputs: Audience data, goals, budgets, channel preferences. GenAI Use: Optimize copy, subject lines, creative assets, campaign calendars. Automate A/B tests, UTM setup, and channel selection. Outputs: Data-driven campaigns, improved ROI, reduced manual effort, and higher engagement.'
  },
  {
    title: 'Advertising & Promotions',
    description: 'Inputs: Ad content, budgets, audience profiles, performance history. GenAI Use: Generate personalized ad copy, predict best placements, suggest formats. Outputs: Higher-performing ads, smarter spend allocation, improved conversion rates.'
  },
  {
    title: 'Lead Generation & Nurturing',
    description: 'Inputs: Lead sources, demographics, engagement patterns. GenAI Use: Generate landing pages, score leads, auto-enrich data, create nurturing workflows. Outputs: Higher-quality leads, efficient qualification, faster sales cycles, cleaner CRM.'
  },
  {
    title: 'Account & Opportunity Management',
    description: 'Inputs: Account details, sales history, opportunity pipeline. GenAI Use: Suggest account strategies, forecast opportunity success, recommend product bundles, trigger stage advancement. Outputs: Stronger account plans, smoother opportunity progression, better win rates.'
  },
  {
    title: 'Quote, Order & Subscription Management',
    description: 'Inputs: Product catalogs, pricing, approvals, billing data. GenAI Use: Auto-generate quotes, approvals, orders, and subscription plans. Predict renewals and fulfillment delays. Outputs: Faster quoting, fewer errors, smooth order-to-cash cycle, optimized renewals.'
  },
  {
    title: 'Asset, Warranty & Entitlement Management',
    description: 'Inputs: Asset lifecycle data, warranties, entitlements, contracts. GenAI Use: Predict maintenance needs, auto-generate entitlements, track warranties, recommend upgrades. Outputs: Proactive lifecycle management, improved compliance, better upsell and renewal opportunities.'
  },
  {
    title: 'Case & Support Management',
    description: 'Inputs: Tickets, call logs, SLAs, agent skills. GenAI Use: Auto-categorize cases, assign to best-fit agents, monitor SLA, suggest solutions, track escalations. Outputs: Faster case resolution, better prioritization, consistent support quality, higher satisfaction.'
  },
  {
    title: 'Customer Experience & Retention',
    description: 'Inputs: Customer profiles, interaction history, purchase data. GenAI Use: Predict churn, personalize onboarding, generate recommendations, collect/analyze feedback. Outputs: Improved retention, tailored experiences, higher cross-sell/upsell, stronger loyalty.'
  },
  {
    title: 'Analytics, Sentiment & Journey Insights',
    description: 'Inputs: Browsing data, transcripts, support history, surveys. GenAI Use: Real-time sentiment analysis, frustration prediction, journey mapping, CLV prediction. Outputs: Deeper customer insights, proactive engagement, more effective retention strategies.'
  },
  {
    title: 'Operations, Automation & Optimization',
    description: 'Inputs: Contracts, payments, inventory, scheduling data. GenAI Use: Automate billing follow-ups, predict inventory demand, streamline workflows, optimize discounts. Outputs: Lower costs, fewer delays, higher efficiency, better financial and operational outcome.'
  }
];

function AIUseCasesCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === useCases.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? useCases.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <h2>AI Use Cases</h2>
      <div className="carousel-content">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="nav-btn prev">
&#8249;</button>
      <button onClick={nextSlide} className="nav-btn next">&#8250;</button>
    </div>
  );
}

export default AIUseCasesCarousel;
