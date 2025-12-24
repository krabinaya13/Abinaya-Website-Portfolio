// src/pages/index.tsx or src/App.tsx

import Navigation from "@/components/Navigation";
import { Hero } from "@/components/Hero"; 
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechnologiesShowcase from "@/components/TechnologiesShowcase";
import CoreConceptsGrid from "@/components/CoreConceptsGrid"
import LearningCTA from "@/components/LearningCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="technologies">
          <TechnologiesShowcase />
        </section>

        <section id="core-concepts">
          <CoreConceptsGrid />
        </section>
        
        <section id="learning-cta">
          <LearningCTA />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;

import React from "react";
