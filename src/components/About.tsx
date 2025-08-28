import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Python", "R", "SQL", "Tableau", "Power BI", 
    "Machine Learning", "Statistical Analysis", "Data Visualization",
    "Customer Analytics", "Risk Modeling", "Churn Analysis", "User Experience"
  ];

  const achievements = [
    {
      number: "4+",
      label: "Major Projects",
      description: "Complex analytics solutions"
    },
    {
      number: "10+",
      label: "Technologies",
      description: "Data science tools mastered"
    },
    {
      number: "3+",
      label: "Years",
      description: "Experience in data analysis"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate About <span className="text-accent">Data Stories</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a data enthusiast with a passion for transforming raw data into actionable insights. 
              My expertise spans across multiple domains including customer analytics, risk assessment, 
              and predictive modeling.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With proficiency in <strong className="text-accent">SQL, Python, R</strong>, and visualization 
              tools like <strong className="text-accent">Tableau and Power BI</strong>, I help businesses 
              make informed decisions. My goal is to bridge the gap between data and decision-making, 
              enabling businesses to thrive.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in developing comprehensive analytics solutions, from customer segmentation 
              using advanced frameworks to building sophisticated risk models for financial institutions.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover-scale cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Cards */}
          <div className="grid grid-cols-1 gap-6 stagger-animation">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-professional p-6 text-center group hover:glow-effect transition-bounce">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-bounce">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>

        {/* Mission Statement */}
        <Card className="card-professional p-8 text-center gradient-accent">
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            "Every dataset tells a story. My mission is to uncover these stories and 
            transform them into strategic insights that drive business success."
          </blockquote>
          <cite className="text-blue-100 text-lg mt-4 block">— Abinaya K R</cite>
        </Card>

      </div>
    </section>
  );
};

export default About;