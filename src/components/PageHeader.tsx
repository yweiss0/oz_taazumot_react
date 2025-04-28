
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-farm-green-pale py-12 mb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-farm-green mb-2 text-right">{title}</h1>
        {subtitle && <p className="text-farm-earth text-xl text-right">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
