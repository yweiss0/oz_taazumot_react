import React from 'react';
import Navbar from './Navbar';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

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
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <footer className="bg-farm-green text-white py-8 mt-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-xl font-bold mb-4">{t('footer.farmName')}</h3>
            <p className="text-farm-green-pale">{t('footer.tagline')}</p>
          </div>
          
          <div className="text-center mx-auto border-2 border-red-600 p-4 rounded-lg font-bold bg-red-600 text-white">
            <p className="text-black font-bold text-xl">
              {t('footer.visitWarning')}
            </p>
          </div>
          
          <div className={isRTL ? "text-right" : "text-left"}>
          
            <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} mb-2`}>
              <span className={`${isRTL ? 'ml-1' : 'mr-1'} direction-ltr ${isRTL ? 'text-left' : 'text-right'}`} dir={isRTL ? "ltr" : "rtl"}>
                +972 52-443-4350 {t('footer.farmManager')}
              </span>
              <Phone className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            </div>
            <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} mb-2`}>
              <span className={`${isRTL ? 'ml-1' : 'mr-1'} direction-ltr ${isRTL ? 'text-left' : 'text-right'}`} dir={isRTL ? "ltr" : "rtl"}>
                +972 50-523-2631 {t('footer.association')}
              </span>
              <Phone className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            </div>
            <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} mb-2`}>
              <span className={`${isRTL ? 'ml-2' : 'mr-2'} direction-ltr ${isRTL ? 'text-left' : 'text-right'}`} dir={isRTL ? "ltr" : "rtl"}>
                oz.nefesh@gmail.com
              </span>
              <Mail className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            </div>
            <a 
              href="https://www.google.com/maps/place/%D7%97%D7%95%D7%95%D7%AA+%D7%A2%D7%96+%D7%95%D7%AA%D7%A2%D7%A6%D7%95%D7%9E%D7%95%D7%AA%E2%80%AD/@32.689192,35.5438874,17z/data=!3m1!4b1!4m6!3m5!1s0x151c41fee1361d9f:0xa5200dd945e4dddc!8m2!3d32.6891875!4d35.5413125!16s%2Fg%2F11ty4wtwnm?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} hover:text-farm-green-pale transition-colors mb-2`}
            >
              <span className={isRTL ? 'ml-2' : 'mr-2'}>{t('footer.farm')}</span>
              <MapPin className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            </a>
            <a 
              href="https://waze.com/ul?q=חוות%20עוז%20ותעצומות&navigate=yes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} hover:text-farm-green-pale transition-colors mb-2`}
            >
              <span className={isRTL ? 'ml-2' : 'mr-2'}>{t('footer.wazeDirections')}</span>
              <img src="/waze-icon.png" alt="Waze" className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            </a>
            <a 
              href="https://www.facebook.com/OZ.TAAZUMOT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} hover:text-farm-green-pale transition-colors`}
            >
              <span className={isRTL ? 'ml-2' : 'mr-2'}>{t('footer.facebook')}</span>
              <Facebook className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-farm-green-light text-center text-sm">
          <p>© {new Date().getFullYear()} {t('footer.farmName')}. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
