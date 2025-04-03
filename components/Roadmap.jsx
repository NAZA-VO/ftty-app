// components/Roadmap.jsx
'use client';
import { useEffect, useRef } from 'react';

const RoadmapItem = ({ quarter, title, description, isActive, delay }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={`card-gradient rounded-xl p-6 transition duration-700 opacity-0 translate-y-10 border-l-4 ${isActive ? 'border-ftty-orange' : 'border-gray-600'}`}
    >
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${isActive ? 'bg-ftty-orange text-white' : 'bg-ftty-purple-light text-gray-300'}`}>
        {quarter}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
      <ul className="text-gray-300 space-y-2">
        {description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-ftty-orange mr-2">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Roadmap = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Development Phase",
      description: [
        "Team formation and project planning",
        "Technical architecture development",
        "Smart contract development begins",
        "Initial community building"
      ],
      isActive: true
    },
    {
      quarter: "Q3 2025",
      title: "Private Testing",
      description: [
        "Alpha version launch for private testing",
        "Security audits of smart contracts",
        "Partnership discussions with game developers",
        "Community expansion and ambassador program"
      ],
      isActive: false
    },
    {
      quarter: "Q4 2025",
      title: "Token Launch & Beta",
      description: [
        "FTTY token launch and IDO",
        "Public beta platform release",
        "Initial game integrations (10+ games)",
        "Marketing campaign kickoff"
      ],
      isActive: false
    },
    {
      quarter: "Q1 2026",
      title: "Full Launch & Expansion",
      description: [
        "Official platform launch",
        "Mobile application release",
        "100+ game integrations",
        "Expansion of ecosystem features"
      ],
      isActive: false
    }
  ];

  return (
    <section id="roadmap" className="section-spacing relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-ftty-orange opacity-5 blur-3xl"></div>
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 transition duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <span className="text-ftty-orange font-medium">Our Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">FTTY Roadmap</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're on a mission to revolutionize gaming asset transactions. 
            Here's our plan to make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              quarter={item.quarter}
              title={item.title}
              description={item.description}
              isActive={item.isActive}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our roadmap is dynamic and will evolve based on community feedback and market conditions.
            Join our community to stay updated on our progress.
          </p>
          <a 
            href="#community" 
            className="inline-block mt-8 bg-transparent hover:bg-ftty-purple-light text-ftty-orange border border-ftty-orange px-8 py-3 rounded-full text-lg font-medium transition-all hover:border-ftty-orange-light"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;