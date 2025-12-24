import React from "react";

interface Concept {
  icon: string;
  title: string;
  bgClass: string;
  titleClass: string;
  borderClass: string;
  dotColor: string;
  items: string[];
}

const CoreConceptsGrid: React.FC = () => {
  const concepts: Concept[] = [
    {
      icon: "🔵",
      title: "Statistical Concepts",
      bgClass:
        "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900",
      titleClass: "text-blue-700 dark:text-blue-300",
      borderClass: "border-blue-300 dark:border-blue-600",
      dotColor: '#3b82f6',
      dotColorDark: '#60a5fa',
      items: [
        "Hypothesis Testing & A/B Testing",
        "Regression Analysis (Linear, Logistic, Multiple)",
        "Time Series Forecasting & Analysis",
        "Probability Distributions & Sampling",
        "Confidence Intervals & P-values",
        "ANOVA & Statistical Inference",
      ],
    },
    {
      icon: "🟣",
      title: "Machine Learning",
      bgClass:
        "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900",
      titleClass: "text-amber-700 dark:text-amber-300",
      borderClass: "border-amber-300 dark:border-amber-600",
      dotColor: '#f97316',        // Orange
      dotColorDark: '#fb923c',
      items: [
        "Supervised Learning (Regression & Classification)",
        "Unsupervised Learning (Clustering, Dimensionality Reduction)",
        "Model Evaluation & Validation Techniques",
        "Hyperparameter Tuning & Grid Search",
        "Feature Engineering & Selection",
        "Ensemble Methods & Deep Learning Basics",
      ],
    },
    {
      icon: "🟢",
      title: "Business Intelligence",
      bgClass:
        "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900",
      titleClass: "text-emerald-700 dark:text-emerald-300",
      borderClass: "border-emerald-300 dark:border-emerald-600",
      dotColor: '#10b981',         // Green
      dotColorDark: '#34d399',
      items: [
        "KPI Development & Performance Metrics",
        "Customer Segmentation & RFM Analysis",
        "Dashboard Design & Interactive Reporting",
        "Funnel Analysis & Conversion Optimization",
        "Cohort Analysis & Retention Metrics",
        "Competitive & Market Intelligence",
      ],
    },
    {
      icon: "🟠",
      title: "Data Management",
      bgClass:
        "bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-900 dark:to-red-900",
      titleClass: "text-rose-700 dark:text-rose-300",
      borderClass: "border-rose-300 dark:border-rose-600",
      dotColor: '#f43f5e', 
      dotColorDark: '#fb7185',
      items: [
        "Data Architecture & Warehouse Design",
        "ETL Pipelines & Data Integration",
        "Data Quality & Governance Framework",
        "Database Optimization & Query Performance",
        "Data Cleaning & Preprocessing",
        "Big Data Technologies & Distributed Systems",
      ],
    },
    {
      icon: "🟡",
      title: "Analytics Strategy",
      bgClass:
        "bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900 dark:to-purple-900",
      titleClass: "text-violet-700 dark:text-violet-300",
      borderClass: "border-violet-300 dark:border-violet-600",
      dotColor: "#a855f7",
      dotColorDark: "#d8b4fe",
      items: [
        "Analytics Roadmap Development",
        "Stakeholder Management & Communication",
        "Business Problem Framing & Solution Design",
        "ROI Measurement & Impact Assessment",
        "Data-Driven Decision Making",
        "Cross-functional Collaboration",
      ],
    },
    {
      icon: "🟦",
      title: "Industry Applications",
      bgClass:
        "bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900",
      titleClass: "text-indigo-700 dark:text-indigo-300",
      borderClass: "border-indigo-300 dark:border-indigo-600",
      dotColor: '#3b82f6',
      dotColorDark: '#60a5fa',
      items: [
        "Financial Analytics & Risk Modeling",
        "Healthcare Analytics & Patient Segmentation",
        "Retail Analytics & Sales Forecasting",
        "Customer Churn Prediction & Retention",
        "Fraud Detection & Anomaly Analysis",
        "Supply Chain & Operational Analytics",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
            Core Concepts & Methodologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive knowledge across data science domains and business analytics
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden ${concept.bgClass} ${concept.borderClass}`}
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {concept.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold ${concept.titleColor} dark:${concept.titleColorDark} mb-6`}>
                {concept.title}
              </h3>

              {/* List */}
              <ul className="space-y-3">
                {concept.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed pl-6 relative transition-all duration-300 hover:pl-8"
                  >
                    <span
                      className="absolute left-0 text-lg"
                      style={{ color: concept.dotColor }}
                    >
                      ●
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreConceptsGrid;
