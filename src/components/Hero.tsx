import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
  quote?: string;
  supportText?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  buttonText,
  buttonLink,
  quote,
  supportText,
}) => {
  const { isRTL } = useLanguage();
  
  // Images for carousel
  const carouselImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb', // Original image
    '/background.jpeg',
    '/background2.jpeg',
    '/background3.jpeg',
    '/background4.jpeg',
    '/background5.jpeg',
    '/background6.jpeg',
    '/background7.jpeg',
    '/background8.jpeg',
    '/background9.jpeg',
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to render quote with citation in smaller text
  const renderQuote = () => {
    if (!quote) return null;
    
    // Check if the quote contains a citation (assumes citation follows a period)
    const parts = quote.split('.');
    if (parts.length > 1) {
      const mainText = parts[0] + '.';
      const citation = parts[1].trim();
      
      return (
        <p className="text-xl md:text-2xl text-white max-w-2xl mb-2 animate-fade-in font-semibold" 
           style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
          {mainText}{' '}
          <span className="text-sm md:text-base" 
                style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
            {citation}
          </span>
        </p>
      );
    }
    
    // If no citation format detected, render normally
    return <p className="text-xl md:text-2xl text-white max-w-2xl mb-2 animate-fade-in font-semibold" 
              style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
      {quote}
    </p>;
  };

  // Function to render title with second part in smaller text
  const renderTitle = () => {
    // Check if the title contains a dash (-) to split the title
    if (title.includes('-')) {
      const parts = title.split('-');
      const mainTitle = parts[0].trim();
      const secondaryTitle = parts.slice(1).join('-').trim();
      
      return (
        <h1 className="hero-title text-white" 
            style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
          {mainTitle}{' '}
          <span className="text-xl md:text-2xl" 
                style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
            - {secondaryTitle}
          </span>
        </h1>
      );
    }
    
    // If no dash found, render normally
    return <h1 className="hero-title text-white" 
               style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
      {title}
    </h1>;
  };

  // Set up automatic image rotation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="hero-section relative overflow-hidden">
      {/* Carousel images - now full width */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentImageIndex === index ? '1' : '0',
              zIndex: 1
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay to ensure text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-farm-green/40 to-transparent z-2"></div> */}
      
      <div className="hero-content relative z-10">
        {renderTitle()}
        {subtitle && <p className="hero-subtitle text-white" 
                         style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
          {subtitle}
        </p>}
        
        {quote && renderQuote()}
        
        {supportText && (
          <p className="text-lg md:text-xl text-white max-w-2xl mb-6 animate-fade-in" 
             style={{ textShadow: '0px 0px 1px #000, 0px 0px 2px #000' }}>
            {supportText}
          </p>
        )}
        
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <Button className="bg-farm-green hover:bg-farm-green-light text-white">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
