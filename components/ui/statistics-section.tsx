'use client'
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Data for olympiads
const olympiads = [
  {
    title: "IBO Olympiad",
    description: "A spring of new opportunities! Our spring internship program introduces young people to the latest advances in digital technologies and opens the door to global opportunities."
  },
  {
    title: "IMO Olympiad",
    description: "The International Mathematics Olympiad challenges brilliant young minds to solve complex mathematical problems and fosters logical thinking skills for future innovators."
  },
  {
    title: "IOI Olympiad",
    description: "The International Olympiad in Informatics develops algorithmic thinking and programming skills among high school students, preparing them for careers in computer science."
  },
  {
    title: "IChO Olympiad",
    description: "The International Chemistry Olympiad inspires students to explore chemical sciences through practical and theoretical challenges in an international competition."
  }
];

// Data for statistics
const statisticsSets = [
  [
    { value: "120+", label: "Olympiads", color: "#0E3150" },
    { value: "5M+", label: "Participants", color: "#0E3150" },
    { value: "12", label: "Regions", color: "#0E3150" },
    { value: "25+", label: "Gold", color: "#0E3150" },
    { value: "50+", label: "Silver", color: "#0E3150" },
    { value: "80+", label: "Bronze", color: "#0E3150" }
  ],
  [
    { value: "45+", label: "Countries", color: "#164B7E" },
    { value: "8M+", label: "Students", color: "#164B7E" },
    { value: "20", label: "Disciplines", color: "#164B7E" },
    { value: "35+", label: "Gold", color: "#164B7E" },
    { value: "70+", label: "Silver", color: "#164B7E" },
    { value: "100+", label: "Bronze", color: "#164B7E" }
  ],
  [
    { value: "75+", label: "Events", color: "#1D6BA3" },
    { value: "10M+", label: "Registrations", color: "#1D6BA3" },
    { value: "30", label: "Partners", color: "#1D6BA3" },
    { value: "40+", label: "Gold", color: "#1D6BA3" },
    { value: "90+", label: "Silver", color: "#1D6BA3" },
    { value: "150+", label: "Bronze", color: "#1D6BA3" }
  ]
];

const OlympiadCarousel = () => {
  const [currentOlympiad, setCurrentOlympiad] = useState(0);
  const [currentStats, setCurrentStats] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto scroll animation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentOlympiad((prev) => (prev + 1) % olympiads.length);
        setCurrentStats((prev) => (prev + 1) % statisticsSets.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Navigation handlers
  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOlympiad((prev) => (prev - 1 + olympiads.length) % olympiads.length);
      setCurrentStats((prev) => (prev - 1 + statisticsSets.length) % statisticsSets.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOlympiad((prev) => (prev + 1) % olympiads.length);
      setCurrentStats((prev) => (prev + 1) % statisticsSets.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-50 p-8 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Statistics Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Statistics</h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            Hendrerit lobortis rhoncus nullam aliquam suspendisse venenatis enim proin. Nam pellentesque integer velit pharetra malesuada.
          </p>
          
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {statisticsSets[currentStats].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-gray-600 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Olympiad Column */}
        <div className="relative">
          <button 
            onClick={handlePrevious}
            className="absolute top-0 right-0 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            aria-label="Previous olympiad"
          >
            <ChevronUp size={40} className="text-gray-500" />
          </button>
          
          <div className={`bg-white p-8 md:p-10 rounded-lg shadow-md relative z-10 transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
            <h3 className="text-2xl font-bold mb-4">{olympiads[currentOlympiad].title}</h3>
            <p className="text-gray-600">
              {olympiads[currentOlympiad].description}
            </p>
            <button className="mt-6 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition-colors">
              Learn More
            </button>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute bottom-0 right-0 translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            aria-label="Next olympiad"
          >
            <ChevronDown size={40} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Navigation indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {olympiads.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full ${currentOlympiad === index ? 'bg-blue-900' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OlympiadCarousel;