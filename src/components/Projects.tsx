import abTestingImage from "@/assets/ab-testing-background.jpeg";
import housePricePredictionImg from "@/assets/housePricePrediction.jpg";
import customerAnalyticsImg from "@/assets/Customer-analytics.png";
import churnAnalysisImg from "@/assets/Churn Analysis.png";
import engagementInsightsImg from "@/assets/Engagement.png";
import creditRiskImg from "@/assets/Credit Risk.png";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Github,
  FileText,
  ExternalLink,
  BarChart3,
} from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Analytics in Python",
      description:
        "Built a customer segmentation and prediction system using STP framework and deep learning to drive strategic growth decisions.",
      image: customerAnalyticsImg,
      technologies: ["Python", "Deep Learning", "STP", "Segmentation"],
      metrics: [
        { label: "Accuracy", value: "85%" },
        { label: "Segments", value: "12" },
        { label: "Revenue Lift", value: "30%" },
      ],
      links: {
        medium:
          "https://medium.com/@krabinaya13/unlocking-growth-the-power-of-customer-analytics-with-the-stp-framework-8e12f1679d81",
        github:
          "https://github.com/krabinaya13/Customer-Analytics-in-Python",
      },
    },
    {
      title: "Credit Risk Modeling & Default Prediction",
      description:
        "Developed credit scorecards using LGD, EAD, and Expected Loss modeling to support data-driven lending decisions.",
      image: creditRiskImg,
      technologies: ["Risk Modeling", "LGD", "EAD", "Scorecards"],
      metrics: [
        { label: "Model Accuracy", value: "92%" },
        { label: "Risk Buckets", value: "5" },
        { label: "Scoring", value: "Real-time" },
      ],
      links: {
        medium:
          "https://medium.com/@krabinaya13/demystifying-credit-risk-modelling-a-deep-dive-into-scorecards-lgd-and-ead-models-for-loan-76dcd45a0024",
        github: "https://github.com/krabinaya13/Credit-Risk-Model",
      },
    },
    {
      title: "A/B Testing – E-commerce Personalization",
      description:
        "End-to-end A/B testing framework showing 64.9% relative conversion improvement with statistical significance.",
      image: abTestingImage,
      technologies: ["A/B Testing", "Statistics", "Python", "Email Marketing"],
      metrics: [
        { label: "Conversion Lift", value: "23.4%" },
        { label: "Revenue Lift", value: "18.7%" },
        { label: "Improvement", value: "64.9%" },
      ],
      links: {
        medium:
          "https://medium.com/@krabinaya13/a-b-testing-the-data-driven-way-to-make-better-decisions-74be0dfacbf1",
        github:
          "https://colab.research.google.com/drive/1qPnpiQeDqHKF-AHT3yaarkirOgPDeL3G",
        document:
          "https://docs.google.com/document/d/1VBZf7VlSTvOJBwS9S1N7_pum9l6y1HsZpUkMbbbS2NQ",
      },
    },
    {
      title: "Customer Engagement Insights",
      description:
        "Analyzed user engagement patterns using SQL and Tableau to improve retention and learning outcomes.",
      image: engagementInsightsImg,
      technologies: ["SQL", "Tableau", "Engagement"],
      metrics: [
        { label: "Engagement Boost", value: "40%" },
        { label: "Metrics Tracked", value: "8" },
        { label: "Dashboards", value: "Interactive" },
      ],
      links: {
        medium:
          "https://medium.com/@krabinaya13/engaging-learners-strategies-to-keep-students-motivated-and-retained-4399ec909a36",
        github:
          "https://github.com/krabinaya13/customer-engagement-analysis-with-sql-and-tableau",
        tableau:
          "https://public.tableau.com/app/profile/abinaya.k.r/viz/CustomerEngagementanalysisforE-learningSubscriptionModel/EngagementMonth",
      },
    },
    {
      title: "Customer Churn Analysis",
      description:
        "Identified churn drivers in a SaaS business and built dashboards to support retention strategies.",
      image: churnAnalysisImg,
      technologies: ["Churn", "SaaS", "Tableau"],
      metrics: [
        { label: "Churn Reduction", value: "25%" },
        { label: "Insights", value: "15+" },
        { label: "Dashboard", value: "Live" },
      ],
      links: {
        medium:
          "https://medium.com/@krabinaya13/the-science-of-retention-analyzing-customer-churn-rate-in-online-education-cbb5702953e8",
        github:
          "https://github.com/krabinaya13/Portfolio/tree/main/code/Customer%20churn%20-%20raw%20data",
      },
    },
    {
      title: "House Price Prediction (Streamlit App)",
      description:
        "End-to-end ML app predicting house prices using Gradient Boosting with full deployment.",
      image: housePricePredictionImg,
      technologies: [
        "Gradient Boosting",
        "Feature Engineering",
        "Streamlit",
      ],
      metrics: [
        { label: "R² Score", value: "0.89" },
        { label: "RMSE", value: "Optimized" },
        { label: "Deployment", value: "Live" },
      ],
      links: {
        medium:
          "https://medium.com/@krabinaya13/how-machine-learning-predicted-house-prices-better-than-i-expected-and-what-it-means-for-business-81242199380e",
        github:
          "https://github.com/krabinaya13/house-price-prediction-app",
        app:
          "https://house-price-prediction-app-gb.streamlit.app/",
      },
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto space-y-2 text-sm">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-muted-foreground">
                        {m.label}:
                      </span>
                      <span className="font-medium">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t flex flex-wrap gap-2">
                {project.links.medium && (
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.links.medium} target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      Article
                    </a>
                  </Button>
                )}

                {project.links.github && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}

                {project.links.tableau && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.links.tableau} target="_blank" rel="noreferrer">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Tableau
                    </a>
                  </Button>
                )}

                {project.links.app && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.links.app} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      App
                    </a>
                  </Button>
                )}

                {project.links.document && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.links.document} target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      Doc
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
