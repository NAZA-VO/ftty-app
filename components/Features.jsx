// components/Features.jsx
'use client';
import { useEffect, useRef } from 'react';
import { 
  FaShieldAlt, 
  FaBolt, 
  FaHandshake, 
  FaUserLock, 
  FaExchangeAlt, 
  FaChartLine 
} from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, delay }) => {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="card-gradient rounded-xl p-6 md:p-8 transition duration-700 opacity-0 translate-y-10"
    >
      <div className="mb-6 text-ftty-orange text-4xl">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      description: "All transactions are secured by blockchain technology, ensuring safety and transparency for all users."
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      description: "Experience near-instant transactions with our optimized blockchain integration."
    },
    {
      icon: <FaHandshake />,
      title: "Zero Commissions",
      description: "Trade without any hidden fees. We charge 0% commission on all transactions."
    },
    {
      icon: <FaUserLock />,
      title: "Self-Custody",
      description: "Keep full control of your assets with our self-custody solution. Your keys, your assets."
    },
    {
      icon: <FaExchangeAlt />,
      title: "Cross-Game Trading",
      description: "Trade assets between supported games, opening new possibilities for gamers."
    },
    {
      icon: <FaChartLine />,
      title: "Asset Value Growth",
      description: "Watch your gaming assets potentially grow in value over time in the FTTY ecosystem."
    }
  ];

  return (
    <section id="features" className="section-spacing">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 transition duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <span className="text-ftty-orange font-medium">Why Choose FTTY</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Revolutionizing Gaming Assets</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            FTTY token provides a seamless way to buy, sell, and trade in-game assets with 
            security, speed, and zero commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;