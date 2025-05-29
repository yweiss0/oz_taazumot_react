import React from 'react';
import PageHeader from '@/components/PageHeader';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const ChenBarin: React.FC = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  return (
    <div className="min-h-screen bg-farm-earth-pale py-12">
      <PageHeader title={t('chenBarin.articleTitle')} />
      
      <div className="page-container">
        <div className={`bg-white rounded-lg shadow-md p-6 my-8 mx-auto ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="mb-6">
            <a 
              href="https://emek.mynet.co.il/local_news/article/hjbbgl3ry#google_vignette" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-farm-green hover:underline font-medium"
            >
              {t('chenBarin.publishedIn')}
            </a>
          </div>
          
          <h2 className="text-xl text-farm-green font-semibold mb-6">
            {t('chenBarin.subtitle')}
          </h2>
          
          <p className="mb-6">
            {t('chenBarin.sections.intro')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/r1CKzzn0F/r1CKzzn0F_0_0_630_340_0_large.jpg" 
              alt="החווה 'עוז ותעצומות'" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <p className="mb-6">
            {t('chenBarin.sections.about')}
          </p>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.dreamComeTrue.title')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.dreamComeTrue.content1')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/BkAr7U2RK/BkAr7U2RK_0_0_2976_1984_0_large.jpg" 
              alt="החווה 'עוז ותעצומות'" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <p className="mb-6">
            {t('chenBarin.sections.dreamComeTrue.content2')}
          </p>
          
          <p className="mb-6">
            {t('chenBarin.sections.dreamComeTrue.content3')}
          </p>
          
          <p className="mb-6">
            {t('chenBarin.sections.dreamComeTrue.content4')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/BylCHXLnCK/BylCHXLnCK_0_0_2976_1984_0_large.jpg" 
              alt="החווה 'עוז ותעצומות'" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <p className="mb-6">
            {t('chenBarin.sections.location')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/SJXCSmLn0Y/SJXCSmLn0Y_0_0_2976_1984_0_large.jpg" 
              alt="החווה 'עוז ותעצומות'" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <p className="mb-6">
            {t('chenBarin.sections.whenSpeaking')}
          </p>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.enjoyingQuiet.title')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.enjoyingQuiet.content1')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/Hy4AH7U2At/Hy4AH7U2At_0_0_2976_1984_0_large.jpg" 
              alt="חן ברין" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <p className="mb-6">
            {t('chenBarin.sections.enjoyingQuiet.content2')}
          </p>
          
          <p className="mb-6">
            {t('chenBarin.sections.enjoyingQuiet.content3')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/B1xbXLhAY/B1xbXLhAY_0_0_2976_1984_0_large.jpg" 
              alt="החווה 'עוז ותעצומות'" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.alreadyArriving.title')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.alreadyArriving.content')}
          </p>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.awareness.title')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.awareness.content')}
          </p>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.expectingChange.title')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.expectingChange.content1')}
          </p>
          
          <div className="mb-6">
            <img 
              src="https://pic1.yitweb.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver/mynet/crop_images/2022/02/05/HyfCrm83CY/HyfCrm83CY_0_0_2976_1984_0_large.jpg" 
              alt="החווה 'עוז ותעצומות'" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.expectingChange.content2')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.expectingChange.content3')}
          </p>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.expectingChange.content4')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.expectingChange.content5')}
          </p>
          
          <h3 className="text-lg text-farm-green font-semibold mb-4">
            {t('chenBarin.sections.expectingChange.content6')}
          </h3>
          
          <p className="mb-6">
            {t('chenBarin.sections.expectingChange.content7')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChenBarin; 