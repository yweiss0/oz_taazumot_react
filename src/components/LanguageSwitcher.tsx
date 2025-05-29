import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-1 border-farm-green text-farm-green hover:bg-farm-green hover:text-white transition-colors min-w-[60px] sm:min-w-[90px]"
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {language === 'he' ? 'English' : 'עברית'}
      </span>
      <span className="sm:hidden">
        {language === 'he' ? 'en' : 'עב'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher; 