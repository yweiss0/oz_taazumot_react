import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const NatureTherapy = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  // Research links mapping
  const researchLinks = {
    card1: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11571177/',
    card2: 'https://etgarim.org/wp-content/uploads/2023/06/Shi-shorer-2023-Long-Term-Group-Nature-Assisted-Therapy-for-Veterans-Diagnosed-with-Chronic-PTSD.pdf',
    card3: 'https://www.jpost.com/opinion/article-826515',
    card4: 'https://www.camoni.co.il/%D7%9B%D7%9A-%D7%9E%D7%A9%D7%A4%D7%99%D7%A2-%D7%98%D7%91%D7%A2-%D7%99%D7%A8%D7%95%D7%A7-%D7%A2%D7%9C-%D7%94%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%A9%D7%9C%D7%A0%D7%95',
    card5: 'https://www.betipulnet.co.il/particles/The_resilience_in_nature',
    card6: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8405544/'
  };

  const renderIntroWithLinks = (text: string) => {
    // Add link to "nature magazine" or equivalent in Hebrew
    const natureMagazineLink = 'https://www.nature.com/articles/s41598-023-49702-0';
    
    // More flexible patterns for nature magazine
    let result = text.replace(
      /Nature magazine|מגזין Nature|nature magazine|Nature Magazine|מגזין נייצ'ר|נייצ'ר|Nature/gi,
      `<a href="${natureMagazineLink}" target="_blank" rel="noopener noreferrer" class="text-farm-green hover:text-farm-green-light underline font-semibold">$&</a>`
    );
    
    return result;
  };

  const getLinkText = (cardKey: string) => {
    const link = researchLinks[cardKey as keyof typeof researchLinks];
    if (!link) return '';
    
    const linkText = isRTL ? 'למאמר המלא' : 'read the article';
    return ` <a href="${link}" target="_blank" rel="noopener noreferrer" class="text-farm-green hover:text-farm-green-light underline font-semibold">${linkText}</a>`;
  };

  const renderCardWithLink = (content: string, cardKey: string) => {
    const link = researchLinks[cardKey as keyof typeof researchLinks];
    if (!link) return content;

    // Hebrew link text patterns - more flexible
    const linkPatterns = {
      card1: /לקריאת המחקר|קרא עוד|מחקר נוסף/g,
      card2: /למאמר המלא|מאמר מלא|לקריאה נוספת/g, 
      card3: /מאמר jerusalem post|ג'רוזלם פוסט|Jerusalem Post|jerusalem post/gi,
      card4: /לקריאת המחקר|קרא עוד|מחקר נוסף/g,
      card5: /בטיפולנט(?![א-ת])/g,
      card6: /לקריאת המחקר|קרא עוד|מחקר נוסף/g
    };

    // English link text patterns  
    const englishLinkPatterns = {
      card1: /read the research|research study|read more|study details/gi,
      card2: /full article|complete study|read full paper|full paper/gi,
      card3: /Jerusalem Post |news article|Jerusalem Post|jpost article/gi,
      card4: /read the research|research findings|read more|study results/gi,
      card5: /betipulnet(?![a-z])|therapy website|counseling site|therapy site/gi,
      card6: /read the research|study results|read more|research findings/gi
    };

    let result = content;
    
    // Apply Hebrew patterns
    const hebrewPattern = linkPatterns[cardKey as keyof typeof linkPatterns];
    if (hebrewPattern) {
      result = result.replace(hebrewPattern, `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-farm-green hover:text-farm-green-light underline font-semibold">$&</a>`);
    }

    // Apply English patterns
    const englishPattern = englishLinkPatterns[cardKey as keyof typeof englishLinkPatterns];
    if (englishPattern) {
      result = result.replace(englishPattern, `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-farm-green hover:text-farm-green-light underline font-semibold">$&</a>`);
    }

    return result;
  };
  
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
            <div 
              className={`${isRTL ? 'text-right' : 'text-left'} mb-4`}
              dangerouslySetInnerHTML={{ __html: renderIntroWithLinks(t('natureTherapy.intro.paragraph1')) }}
            />
            <div 
              className={`${isRTL ? 'text-right' : 'text-left'} mb-4`}
              dangerouslySetInnerHTML={{ __html: t('natureTherapy.intro.paragraph2') }}
            />
            <div 
              className={`${isRTL ? 'text-right' : 'text-left'}`}
              dangerouslySetInnerHTML={{ __html: t('natureTherapy.intro.paragraph3') }}
            />
          </div>
        </div>
        
        {/* Research Findings Section */}
        <div className="mb-16 bg-gray-50 py-12 px-6 rounded-xl">
          <h2 className="text-3xl font-bold text-farm-green mb-10 text-center">{t('natureTherapy.research.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6].map((cardNum) => (
              <Card key={cardNum} className="card border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold mb-4 text-farm-green">
                    {t(`natureTherapy.research.card${cardNum}.title`)}
                  </h3>
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ 
                      __html: t(`natureTherapy.research.card${cardNum}.content`) + getLinkText(`card${cardNum}`) 
                    }}
                  />
                </CardContent>
              </Card>
            ))}
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
