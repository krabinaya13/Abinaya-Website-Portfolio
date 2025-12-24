import { Button }  from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import aiImage from "@/assets/abi_ai_pic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-blue-600 dark:border-blue-400 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-lg border-2 border-blue-500 dark:border-blue-300 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border-2 border-blue-600 dark:border-blue-400 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm">
                Data Analyst & Business Intelligence Expert
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Abinaya K R
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 dark:text-blue-100 font-light">
                Transforming Data into 
                <span className="block text-blue-600 dark:text-blue-400 font-semibold mt-2">Actionable Insights</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Where curiosity meets technology to create meaningful impact.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center pt-4">
              <button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>
              
              <button 
                className="px-8 py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-200 border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 items-center lg:justify-start justify-center pt-6">
              <a 
                href="https://www.linkedin.com/in/abinaya-k-r-a852641b2/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/krabinaya13" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:krabinaya13@gmail.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-blue-800/30 dark:from-blue-600/20 dark:to-blue-800/20 rounded-full blur-2xl opacity-70"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600/20 dark:border-blue-400/20">
                <img 
                  src={aiImage}
                  alt="Abinaya K R - Data Analyst"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        
      </div>
    </section>
  );
};
