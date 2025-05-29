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
    // { text: t('navbar.home'), path: '/' },
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
        {/* Top row with logo and language switcher */}
        <div className="relative h-16 flex items-center">
          {/* Mobile menu button - position changes based on language */}
          <div className={`md:hidden absolute ${isRTL ? 'left-0' : 'right-0'}`}>
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
          
          {/* Logo, title, and language switcher with fixed positioning */}
          <div className="absolute right-0 flex items-center w-[220px] md:w-[350px]" style={{ height: '48px', position: 'relative' }}>
            {isRTL ? (
              <>
                {/* Hebrew (RTL): Button - Text - Logo (right to left) */}
                {/* Language button - leftmost in RTL */}
                <div style={{ position: 'absolute', left: '0px', top: '50%', transform: 'translateY(-50%)' }}>
                  <LanguageSwitcher />
                </div>
                
                {/* Title - middle in RTL */}
                <Link to="/" className="absolute left-[70px] md:left-[130px] top-1/2 -translate-y-1/2 flex items-center">
                  <h1 className="text-farm-green text-lg font-bold" dir="rtl">
                    {t('footer.farm')}
                  </h1>
                </Link>
                
                {/* Logo - rightmost in RTL */}
                <div style={{ position: 'absolute', right: '0px', top: '50%', transform: 'translateY(-50%)' }}>
                  <img 
                    src="/logo.jpeg" 
                    alt="עֹז וְתַעֲצֻמוֹת"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {/* English (LTR): Logo - Text - Button (left to right) */}
                {/* Logo - leftmost in LTR */}
                <div style={{ position: 'absolute', left: '0px', top: '50%', transform: 'translateY(-50%)' }}>
                  <img 
                    src="/logo.jpeg" 
                    alt="עֹז וְתַעֲצֻמוֹת"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                
                {/* Title - close to logo */}
                <Link to="/" className="absolute left-[55px] md:left-[70px] top-1/2 -translate-y-1/2 flex items-center">
                  <h1 className="text-farm-green text-lg font-bold" dir="ltr">
                    {t('footer.farm')}
                  </h1>
                </Link>
                
                {/* Language button - rightmost in LTR */}
                <div style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)' }}>
                  <LanguageSwitcher />
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Desktop navigation row */}
        <div className="hidden md:block border-t border-farm-earth-pale">
          <div className="flex justify-center items-center py-3">
            <div className="flex items-center gap-6">
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
