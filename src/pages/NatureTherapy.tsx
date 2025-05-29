import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const NatureTherapy = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[500px] w-full relative">
          <div className="absolute inset-0 bg-center bg-cover" style={{ 
            backgroundImage: `url(/nature-therapy2.jpeg)`,
            filter: 'brightness(0.75)'
          }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
          <div className="container mx-auto h-full flex flex-col justify-end items-center pb-16 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">{t('natureTherapy.hero.title')}</h1>
            <p className="text-xl md:text-2xl text-white text-center max-w-3xl">
              {t('natureTherapy.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-farm-green mb-6 text-center">{t('natureTherapy.intro.title')}</h2>
            <p className={`${isRTL ? 'text-right' : 'text-left'} mb-4`}>
              {t('natureTherapy.intro.paragraph1')}
            </p>
            <p className={`${isRTL ? 'text-right' : 'text-left'} mb-4`}>
              {t('natureTherapy.intro.paragraph2')}
            </p>
            <p className={`${isRTL ? 'text-right' : 'text-left'}`}>
              {t('natureTherapy.intro.paragraph3')}
            </p>
          </div>
        </div>
        
        {/* Research Findings Section */}
        <div className="mb-16 bg-gray-50 py-12 px-6 rounded-xl">
          <h2 className="text-3xl font-bold text-farm-green mb-10 text-center">{t('natureTherapy.research.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-4 text-farm-green">{t('natureTherapy.research.card1.title')}</h3>
                <p className="text-gray-700">
                  {t('natureTherapy.research.card1.content')}
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-4 text-farm-green">{t('natureTherapy.research.card2.title')}</h3>
                <p className="text-gray-700">
                  {t('natureTherapy.research.card2.content')}
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-4 text-farm-green">{t('natureTherapy.research.card3.title')}</h3>
                <p className="text-gray-700">
                  {t('natureTherapy.research.card3.content')}
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-4 text-farm-green">{t('natureTherapy.research.card4.title')}</h3>
                <p className="text-gray-700">
                  {t('natureTherapy.research.card4.content')}
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-4 text-farm-green">{t('natureTherapy.research.card5.title')}</h3>
                <p className="text-gray-700">
                  {t('natureTherapy.research.card5.content')}
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold mb-4 text-farm-green">{t('natureTherapy.research.card6.title')}</h3>
                <p className="text-gray-700">
                  {t('natureTherapy.research.card6.content')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Treatment Methods Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-farm-green mb-10 text-center">{t('natureTherapy.methods.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('natureTherapy.methods.method1.title'),
                description: t('natureTherapy.methods.method1.description')
              },
              {
                title: t('natureTherapy.methods.method2.title'),
                description: t('natureTherapy.methods.method2.description')
              },
              {
                title: t('natureTherapy.methods.method3.title'),
                description: t('natureTherapy.methods.method3.description')
              },
              {
                title: t('natureTherapy.methods.method4.title'),
                description: t('natureTherapy.methods.method4.description')
              },
              {
                title: t('natureTherapy.methods.method5.title'),
                description: t('natureTherapy.methods.method5.description')
              },
              {
                title: t('natureTherapy.methods.method6.title'),
                description: t('natureTherapy.methods.method6.description')
              }
            ].map((method, i) => (
              <Card key={i} className="card hover:shadow-lg transition-shadow">
                <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`w-12 h-12 rounded-full bg-farm-green-light mb-4 ${isRTL ? 'mr-auto' : 'ml-auto'} flex items-center justify-center`}>
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-farm-green">{method.title}</h3>
                  <p className="text-gray-700">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-farm-green mb-6">{t('natureTherapy.cta.title')}</h2>
          <p className="text-lg mb-8">
            {t('natureTherapy.cta.text')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NatureTherapy;
