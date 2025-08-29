import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, TrendingUp, Users, DollarSign, Shield } from "lucide-react";
import customerAnalyticsImg from "@/assets/customer-analytics.jpg";
import churnAnalysisImg from "@/assets/churn-analysis.jpg";
import engagementInsightsImg from "@/assets/engagement-insights.jpg";
import creditRiskImg from "@/assets/credit-risk.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Customer Analytics in Python",
      description: "Developed a comprehensive model using STP Framework to segment customers based on purchase behavior and Deep Learning in Python for powerful predictions about future client behavior.",
      image: customerAnalyticsImg,
      icon: Users,
      color: "text-accent",
      tags: ["Python", "Deep Learning", "STP Framework", "Customer Segmentation"],
      metrics: ["85% Prediction Accuracy", "12 Customer Segments", "30% Revenue Increase"],
      links: {
        medium: "https://medium.com/@krabinaya13/unlocking-growth-the-power-of-customer-analytics-with-the-stp-framework-8e12f1679d81",
        github: "https://github.com/krabinaya13/Customer-Analytics-in-Python"
      }
    },
    {
      title: "Customer Churn Analysis",
      description: "Performed churn analysis of a SaaS business and uncovered insights necessary for understanding consumer base and boosting revenue for subscription-based models.",
      image: churnAnalysisImg, 
      icon: TrendingUp,
      color: "text-success",
      tags: ["Churn Analysis", "SaaS", "Tableau", "Data Visualization"],
      metrics: ["25% Churn Reduction", "15 Key Insights", "Real-time Dashboard"],
      links: {
        medium: "https://medium.com/@krabinaya13/the-science-of-retention-analyzing-customer-churn-rate-in-online-education-cbb5702953e8",
        github: "https://github.com/krabinaya13/Portfolio/tree/main/code/Customer%20churn%20-%20raw%20data",
        tableau: "https://public.tableau.com/app/profile/abinaya.k.r/vizzes"
      }
    },
    {
      title: "Customer Engagement Insights",
      description: "Conducted comprehensive customer engagement analysis ensuring users experience the best of the product or service, critical for company success and retention.",
      image: engagementInsightsImg,
      icon: TrendingUp,
      color: "text-warning", 
      tags: ["Engagement Analysis", "SQL", "Tableau", "E-learning"],
      metrics: ["40% Engagement Boost", "8 Engagement Metrics", "Interactive Visualizations"],
      links: {
        medium: "https://medium.com/@krabinaya13/engaging-learners-strategies-to-keep-students-motivated-and-retained-4399ec909a36",
        github: "https://github.com/krabinaya13/customer-engagement-analysis-with-sql-and-tableau",
        tableau: "https://public.tableau.com/app/profile/abinaya.k.r/viz/CustomerEngagementanalysisforE-learningSubscriptionModel/EngagementMonth"
      }
    },
    {
      title: "Credit Risk Modeling & Default Prediction",
      description: "Built a comprehensive credit risk model using scorecards, LGD, EAD, and Expected Loss calculations to support strategic lending decisions for financial institutions.",
      image: creditRiskImg,
      icon: Shield,
      color: "text-accent",
      tags: ["Risk Modeling", "Credit Scoring", "LGD", "EAD", "Financial Analytics"],
      metrics: ["92% Risk Accuracy", "5 Risk Categories", "Real-time Scoring"],
      links: {
        medium: "https://medium.com/@krabinaya13/demystifying-credit-risk-modelling-a-deep-dive-into-scorecards-lgd-and-ead-models-for-loan-76dcd45a0024",
        github: "https://github.com/krabinaya13/Credit-Risk-Model"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Data-Driven <span className="text-accent">Project Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every dataset tells a story. Let's dive into mine and discover how I bring data to life!
          </p>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="card-professional overflow-hidden group hover:glow-effect animate-fade-in transition-smooth">
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>

                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-smooth ${project.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover-scale"
                          asChild
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.medium && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover-scale"
                          asChild
                        >
                          <a href={project.links.medium} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.tableau && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover-scale"
                          asChild
                        >
                          <a href={project.links.tableau} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="px-6 pb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Results</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                        <span className="text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="px-6 pb-6 pt-2 border-t border-border">
                  <div className="flex gap-2">
                    {project.links.medium && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.links.medium} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />
                          Read Article
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-professional p-8 max-w-2xl mx-auto gradient-accent">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-blue-100 mb-6">
              Explore more of my projects and insights on my professional profiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="https://github.com/krabinaya13" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All Projects
                </a>
              </Button>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://medium.com/@krabinaya13" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5 mr-2" />
                  Read My Articles
                </a>
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Projects;