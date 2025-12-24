import React from 'react';

interface Technology {
  emoji: string;
  name: string;
}

interface TechCategory {
  title: string;
  technologies: Technology[];
}

const TechnologiesShowcase: React.FC = () => {
  const categories: TechCategory[] = [
    {
      title: 'Core Languages & Data Tools',
      technologies: [
        { emoji: '🐍', name: 'Python' },
        { emoji: '📊', name: 'R' },
        { emoji: '🗄️', name: 'SQL' },
        { emoji: '📋', name: 'Excel' },
        { emoji: '📓', name: 'Jupyter' },
        { emoji: '🔧', name: 'Git' },
      ],
    },
    {
      title: 'Visualization & Business Intelligence',
      technologies: [
        { emoji: '📈', name: 'Tableau' },
        { emoji: '⚡', name: 'Power BI' },
        { emoji: '📊', name: 'Matplotlib' },
        { emoji: '🌊', name: 'Seaborn' },
        { emoji: '❄️', name: 'Snowflake' },
      ],
    },
    {
      title: 'Machine Learning & Advanced Analytics',
      technologies: [
        { emoji: '🤖', name: 'Scikit-learn' },
        { emoji: '🐼', name: 'Pandas' },
        { emoji: '🔢', name: 'NumPy' },
        { emoji: '🧠', name: 'TensorFlow' },
        { emoji: '☁️', name: 'GCP' },
        { emoji: '🐘', name: 'Hadoop' },
      ],
    },
  ];

  // Duplicate tech for seamless scrolling
  const TechRow: React.FC<{ technologies: Technology[] }> = ({ technologies }) => {
    const duplicatedTechs = [...technologies, ...technologies];
    
    return (
      <div className="overflow-hidden relative group">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex gap-5 animate-scroll group-hover:pause-animation">
          {duplicatedTechs.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="min-w-max flex flex-col items-center justify-center p-3 h-24 w-24 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                {tech.emoji}
              </div>
              <div className="text-xs font-semibold text-white text-center uppercase tracking-wide">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
            My Technology Stack
          </h2>
          <div className="flex justify-center">
            <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Technologies Container */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl space-y-8 border border-blue-200 dark:border-gray-700">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-sm md:text-base font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest mb-5 pl-3 border-l-4 border-blue-600 dark:border-blue-400">
                {category.title}
              </h3>
              <TechRow technologies={category.technologies} />
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation to global styles or include in component */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologiesShowcase;