import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const Help = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div dir={direction} className="py-8 max-w-4xl mx-auto px-4 text-center items-center">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">{t('help.title')}</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p className="mb-6">
          {t('help.intro.paragraph1')}
        </p>
        <p className="mb-6">
          {t('help.intro.paragraph2')}
        </p>
        <blockquote className="pr-4 italic my-8">
          {t('help.intro.quote')}
        </blockquote>
      </div>
      {/* <p className='text-blue-500 text-2xl mb-4 font-bold'>אנחנו מזמינים אתכם לתרום – חממות, ציוד חקלאי, ציוד השקיה, שתילים, פרחים, סככות, גנרטור, ריהוט גן, דשא סינטטי, אמנות ופיסול סביבתי, שתילי תבלין, מצללות, ספסלי קקל, כסאות , שולחנות,  – כל תרומה מחזקת את הלוחמים שלנו</p> */}
      <div className="prose prose-lg mb-8 bg-farm-green-pale p-8 rounded-lg text-center text-2xl font-bold">
        {t('help.donationCallout')}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">{t('help.volunteering.title')}</h2>
          <ul className={`list-disc list-inside space-y-3 text-gray-700 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            {(t('help.volunteering.items', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">{t('help.expertise.title')}</h2>
          <ul className={`list-disc list-inside space-y-3 text-gray-700 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            {(t('help.expertise.items', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>


      <div className="bg-green-50 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">{t('help.contactCta.title')}</h2>
        <p className="text-gray-700 mb-6">
          {t('help.contactCta.content')}
        </p>
        <Link to="/contact" className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
          {t('help.contactCta.button')}
        </Link>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-auto"
          onClick={closeModal}
        >
          <div 
            className="relative mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src={selectedImage} 
                alt="הגדלת תמונה" 
                className="max-w-full max-h-[85vh] object-contain mx-auto"
                style={{ maxWidth: '90vw' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
