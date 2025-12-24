import React from 'react';

const LearningCTA: React.FC = () => {
  const handleExploreProjects = () => {
    // Scroll to projects section or navigate to projects page
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Main CTA Box - Blue Background */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-900 dark:via-blue-800 dark:to-blue-950 rounded-3xl p-12 md:p-16 shadow-2xl">
          
          {/* Icon */}
          <div className="text-6xl text-center mb-6 animate-bounce">
            🚀
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Continuous Learning Journey
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-blue-100 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm committed to staying at the forefront of data science and analytics. Always exploring new methodologies, tools, and frameworks to deliver enhanced business value and actionable insights.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-8">
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl">📚</div>
              <p className="text-white/90 text-sm text-center font-medium">Always Learning</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl">🔧</div>
              <p className="text-white/90 text-sm text-center font-medium">Building Solutions</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl">📊</div>
              <p className="text-white/90 text-sm text-center font-medium">Delivering Impact</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleExploreProjects}
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore My Projects</span>
              <span>→</span>
            </button>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full border-2 border-white/50 hover:border-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            ✨ Let's build something great together ✨
          </p>
        </div>

      </div>
    </section>
  );
};

export default LearningCTA;