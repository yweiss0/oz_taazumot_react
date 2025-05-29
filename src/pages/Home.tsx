import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { HandshakeIcon, BookOpenIcon, UsersIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const Home = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div>
      <Hero
        title={t('home.hero.title')}
        subtitle=""
        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        quote={t('home.hero.quote')}
        supportText={t('home.hero.supportText')}
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <Card className="card">
            <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'} mb-4`}>
                <HandshakeIcon className="w-10 h-10 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-green">{t('home.cards.rehabilitation.title')}</h3>
              <p className="text-gray-700">
                {t('home.cards.rehabilitation.content')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'} mb-4`}>
                <BookOpenIcon className="w-10 h-10 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-green">{t('home.cards.initiative.title')}</h3>
              <p className="text-gray-700">
                {t('home.cards.initiative.content')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'} mb-4`}>
                <UsersIcon className="w-10 h-10 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-green">{t('home.cards.community.title')}</h3>
              <p className="text-gray-700">
                {t('home.cards.community.content')}
              </p>
            </CardContent>
          </Card>
        </div>
        <h2 className="section-title">{t('home.ptsd.title')}</h2>
        <div className={`prose prose-lg ${isRTL ? 'text-right' : 'text-left'} mb-8`}>
              <p>
            {t('home.ptsd.content')}
              </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title">{t('home.about.title')}</h2>
            <div className={`prose prose-lg ${isRTL ? 'text-right' : 'text-left'}`}>
              <p>
                {t('home.about.content1')}
              </p>
              <p>
                {t('home.about.content2')}
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">{t('home.mission.title')}</h2>
            <div className={`prose prose-lg ${isRTL ? 'text-right' : 'text-left'}`}>
              <p>
                {t('home.mission.content1')}
              </p>
              <p>
                {t('home.mission.content2')}
              </p>
            </div>
          </div>
        </div>
        <div className={`prose prose-lg ${isRTL ? 'text-right' : 'text-left'} mb-8 bg-farm-green-pale p-8 rounded-lg text-center`}>
          <h2 className="section-title text-2xl font-bold mb-4">{t('home.ptg.title')}</h2>
              <p>
            {t('home.ptg.content')}
              </p>
            </div>
        <div className="mb-12">
          <h2 className="section-title">{t('home.join.title')}</h2>
          <div className="bg-farm-green-pale p-8 rounded-lg text-center">
            <p className="text-xl md:text-2xl text-farm-green mb-4">
              {t('home.join.subtitle1')}
            </p>
            <p className="text-xl md:text-2xl text-farm-green mb-4 font-bold">
              {t('home.join.quote')} <span className="text-sm md:text-base">Psalms 91:15</span>
            </p>
            <p className="text-lg md:text-xl text-farm-earth mb-6">
              {t('home.join.subtitle2')}
            </p>
            <p className="text-gray-700">
              {t('home.join.content')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
