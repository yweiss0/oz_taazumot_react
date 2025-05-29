import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const Thanks = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();
  const { direction } = useLanguage();

  const imageIds = [
    
    "1TMPxXCb8HYXTI3Q5gCazjAuekqEZg7de",
    "1tk1s-DytsksGYqbm3iybLEWWea8ksnqB",
    "1wZ_jRcL4z7tIBX6YexTnYsmq3YFJ9s3q",
    "13uBoko7zksbwXUHNBsj6cIl8EotnqQLx",
    "1HOvQBUcajJeNi0cfP5wW0N8QmRSp38Kp",
    "1_AJVxfKXCfpvOuyDmSkCup62BIRVGTHM",
    "11mixVPLfhTKfrTI7rt5BmNk7DOIlvjVm",
    "1k7STZAPxEqPAq-fPGDssqC3e1zm0JE5r",
    "1QWtl-3TAmJTsTBpIVb9TXnCqVhW6Bm-H",
  ];

  const thanksImages = imageIds.map((id, idx) => ({ id, alt: `תמונה ${idx + 1}` }));

  const openModal = (imageId: string) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <PageHeader 
        title={t('thanks.pageHeader.title')} 
        subtitle={t('thanks.pageHeader.subtitle')}
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {thanksImages.map((image, i) => (
            <div 
              key={i} 
              className="aspect-square overflow-hidden rounded-lg bg-farm-earth-pale cursor-pointer relative group"
              onClick={() => openModal(image.id)}
            >
              <iframe
                src={`https://drive.google.com/file/d/${image.id}/preview?usp=sharing`}
                title={image.alt}
                className="w-full h-full border-0 absolute inset-0"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                <p className="text-white text-lg font-semibold">{t('gallery.clickToEnlarge')}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`prose prose-lg max-w-none ${direction === 'rtl' ? 'text-right' : 'text-left'} mb-12`}>
          <h2 className="text-2xl font-bold text-farm-green mb-4">{t('thanks.support.title')}</h2>
          <p>
            {t('thanks.support.content')}
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-auto"
          onClick={closeModal}
        >
          <div 
            className="relative mx-auto my-auto w-full max-w-4xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>
            <iframe 
              src={`https://drive.google.com/file/d/${selectedImage}/preview?usp=sharing`}
              className="w-full h-full border-0 bg-white rounded-lg"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thanks; 