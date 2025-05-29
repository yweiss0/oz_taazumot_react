import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { text: t('navbar.home'), path: '/' },
    { text: t('navbar.nationalProblem'), path: '/national-problem' },
    { text: t('navbar.natureTherapy'), path: '/nature-therapy' },
    { text: t('navbar.chenBarin'), path: '/chen-barin' },
    { text: t('navbar.openInvitation'), path: '/open-invitation' },
    { text: t('navbar.gallery'), path: '/gallery' },
    { text: t('navbar.thanks'), path: '/thanks' },
    { text: t('navbar.helpUs'), path: '/help' },
    { text: t('navbar.contact'), path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-farm-earth-pale sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className={`flex items-center ${isRTL ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Please upload your logo and replace the path below */}
              <img 
                src="/logo.jpeg" 
                alt="עֹז וְתַעֲצֻמוֹת"
                className="h-12 w-auto rounded-full"
              />
              <h1 className={`text-farm-green text-lg font-bold ${isRTL ? 'mr-3' : 'ml-3'}`}>
                {t('footer.farm')}
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <div className={`flex items-center ${isRTL ? 'space-x-4 space-x-reverse ml-4' : 'space-x-4 mr-4'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-farm-green hover:text-farm-green-light hover:underline transition-colors text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
          
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="ml-2"
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
                className={`block px-3 py-2 text-farm-green hover:bg-farm-green-pale hover:text-farm-green rounded-md text-base font-medium ${isRTL ? 'text-right' : 'text-left'}`}
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
