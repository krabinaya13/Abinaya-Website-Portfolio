import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-accent animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-lg border-2 border-primary-glow animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border-2 border-accent animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wider uppercase">Data Analyst</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Abinaya K R
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Transforming Data into 
                <span className="text-accent font-semibold"> Actionable Insights</span>
              </p>
            </div>
            
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Where curiosity meets technology to create meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 transition-bounce hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 transition-smooth"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 items-center lg:justify-start justify-center pt-4">
              <a 
                href="https://www.linkedin.com/in/abinaya-k-r-a852641b2/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-accent transition-smooth hover-scale"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/krabinaya13" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-accent transition-smooth hover-scale"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:krabinaya13@gmail.com"
                className="text-blue-200 hover:text-accent transition-smooth hover-scale"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 glow-effect rounded-full opacity-60"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-professional">
                <img 
                  src="/lovable-uploads/513dc4e0-4e19-45c7-9fbd-9f8e10b063a7.png"
                  alt="Abinaya K R - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-200" />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;