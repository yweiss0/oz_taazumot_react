import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
  return (
    <div className="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          opacity: '0.3' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-farm-green/20 to-transparent" />
      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        
        {quote && (
          <p className="text-xl md:text-2xl text-farm-green max-w-2xl mb-2 animate-fade-in font-semibold">
            {quote}
          </p>
        )}
        
        {supportText && (
          <p className="text-lg md:text-xl text-farm-green max-w-2xl mb-6 animate-fade-in">
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
