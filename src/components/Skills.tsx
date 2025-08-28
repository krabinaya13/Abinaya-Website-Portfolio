import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Database, 
  Brain, 
  TrendingUp,
  PieChart,
  Code,
  Calculator,
  Target
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-accent",
      skills: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "text-success",
      skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn"]
    },
    {
      title: "Analytics Tools",
      icon: Database,
      color: "text-warning",
      skills: ["Google Analytics", "Zoho Analytics", "Looker", "Excel", "Jupyter"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "text-accent",
      skills: ["Scikit-learn", "Deep Learning", "Predictive Modeling", "Classification", "Regression"]
    },
    {
      title: "Statistical Analysis",
      icon: Calculator,
      color: "text-success",
      skills: ["Hypothesis Testing", "A/B Testing", "Correlation Analysis", "Time Series", "ANOVA"]
    },
    {
      title: "Business Intelligence",
      icon: TrendingUp,
      color: "text-warning",
      skills: ["KPI Development", "Dashboard Design", "ETL Processes", "Data Mining", "Reporting"]
    },
    {
      title: "Specialized Areas",
      icon: Target,
      color: "text-accent",
      skills: ["Customer Analytics", "Churn Analysis", "Risk Modeling", "Credit Scoring", "Segmentation"]
    },
    {
      title: "Data Management",
      icon: PieChart,
      color: "text-success",
      skills: ["Data Cleaning", "Data Transformation", "Database Design", "API Integration", "Cloud Platforms"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">Technical Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-accent">Technology Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into strategic business value
          </p>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-professional p-6 group hover:glow-effect">
                <div className="space-y-4">
                  
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-smooth ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="mr-2 mb-2 hover-scale cursor-default text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                </div>
              </Card>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <Card className="card-professional p-6">
              <div className="text-accent text-2xl font-bold mb-2">Expert</div>
              <div className="text-sm text-muted-foreground mb-4">
                Python, SQL, Tableau, Customer Analytics
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="gradient-success h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </Card>

            <Card className="card-professional p-6">
              <div className="text-accent text-2xl font-bold mb-2">Advanced</div>
              <div className="text-sm text-muted-foreground mb-4">
                R, Power BI, Machine Learning, Statistical Analysis
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="gradient-accent h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </Card>

            <Card className="card-professional p-6">
              <div className="text-accent text-2xl font-bold mb-2">Proficient</div>
              <div className="text-sm text-muted-foreground mb-4">
                JavaScript, Cloud Platforms, API Integration
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="gradient-primary h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;