import React from 'react';
import Navbar from './Navbar';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-farm-green text-white py-8 mt-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">עֹז וְתַעֲצֻמוֹת</h3>
            <p className="text-farm-green-pale">חווה חקלאית לשיקום הלומי קרב</p>
          </div>
          
          <div className="text-right">
          
            <div className="flex items-center justify-end mb-2">
              <span className="ml-1 direction-ltr text-left" dir="ltr">+972 52-443-4350</span>
              <Phone className="h-5 w-5 ml-2" />
            </div>
            <div className="flex items-center justify-end mb-2">
              <span className="ml-2 direction-ltr text-left" dir="ltr">oz0524434350@gmail.com</span>
              <Mail className="h-5 w-5 ml-2" />
            </div>
            <a 
              href="https://www.google.com/maps/place/%D7%97%D7%95%D7%95%D7%AA+%D7%A2%D7%96+%D7%95%D7%AA%D7%A2%D7%A6%D7%95%D7%9E%D7%95%D7%AA%E2%80%AD/@32.689192,35.5438874,17z/data=!3m1!4b1!4m6!3m5!1s0x151c41fee1361d9f:0xa5200dd945e4dddc!8m2!3d32.6891875!4d35.5413125!16s%2Fg%2F11ty4wtwnm?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-end hover:text-farm-green-pale transition-colors mb-2"
            >
              <span className="ml-2">חוות עז ותעצומות</span>
              <MapPin className="h-5 w-5 ml-2" />
            </a>
            <a 
              href="https://www.facebook.com/OZ.TAAZUMOT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-end hover:text-farm-green-pale transition-colors"
            >
              <span className="ml-2">עז ותעצומות בפייסבוק</span>
              <Facebook className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-farm-green-light text-center text-sm">
          <p>© {new Date().getFullYear()} עֹז וְתַעֲצֻמוֹת. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
