import React from 'react';

const ProfOzVideo: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-farm-green mb-8">
        פרופ עוז גוטרמן: צמיחה מ PTSD
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            src="https://drive.google.com/file/d/1tKClqdv2ig8dJfsRcr_GzfXXol2rs0Nk/preview"
            className="w-full h-full"
            allow="autoplay"
            allowFullScreen
            title="פרופ עוז גוטרמן: צמיחה מ PTSD"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProfOzVideo; 