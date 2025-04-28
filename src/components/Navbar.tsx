
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { text: 'ראשי', path: '/' },
  { text: 'פוסט טראומה בעיה לאומית', path: '/national-problem' },
  { text: 'תרפיה בטבע', path: '/nature-therapy' },
  { text: 'גלריה', path: '/gallery' },
  { text: 'בואו לעזור   ', path: '/help' },
  { text: 'העמותה', path: '/organization' },
  { text: 'צור קשר', path: '/contact' },
  { text: 'רוצים לתרום', path: '/donate' }
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-farm-earth-pale sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Please upload your logo and replace the path below */}
              <img 
                src="/logo.jpeg" 
                alt="עֹז וְתַעֲצֻמוֹת"
                className="h-12 w-auto rounded-full"
              />
              <h1 className="text-farm-green text-lg font-bold mr-3">חוות עז ותעצומות</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-farm-green hover:text-farm-green-light hover:underline transition-colors text-sm font-medium"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-farm-green" />
              ) : (
                <Menu className="h-6 w-6 text-farm-green" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-farm-earth-pale">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-farm-green hover:bg-farm-green-pale hover:text-farm-green rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
