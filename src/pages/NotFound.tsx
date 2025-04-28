
import React from 'react';
import { useLocation } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-farm-green-pale">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-farm-green">404</h1>
        <p className="text-2xl text-farm-earth mb-8">הדף המבוקש לא נמצא</p>
        <p className="mb-8 text-farm-green">
          הנתיב <span dir="ltr" className="font-mono">{location.pathname}</span> אינו קיים באתר
        </p>
        <Link to="/">
          <Button className="bg-farm-green hover:bg-farm-green-light text-white">
            חזרה לדף הבית
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
