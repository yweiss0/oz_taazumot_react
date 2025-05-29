import React, { useState, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { X, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const NationalProblem = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const newsImages = [
    {
      image: "/488502120_670400372031915_7458710229177102403_n.jpg",
      title: t('nationalProblem.newsItems.0.title'),
      date: t('nationalProblem.newsItems.0.date'),
      source: t('nationalProblem.newsItems.0.source')
    },
    {
      image: "/488615010_670400312031921_5626379578177632541_n.jpg",
      title: t('nationalProblem.newsItems.1.title'),
      date: t('nationalProblem.newsItems.1.date'),
      source: t('nationalProblem.newsItems.1.source')
    },
    {
      image: "/488654812_670412395364046_4982621192097618647_n.jpg",
      title: t('nationalProblem.newsItems.2.title'),
      date: t('nationalProblem.newsItems.2.date'),
      source: t('nationalProblem.newsItems.2.source')
    },
    {
      image: "/זינוק במספר הפונים לבריאות הנפש ישראל היום 22.10.23.jpeg",
      title: t('nationalProblem.newsItems.3.title'),
      date: t('nationalProblem.newsItems.3.date'),
      source: t('nationalProblem.newsItems.3.source')
    },
    {
      image: "/ישראל במשבר בטיפולי נפש 31.10.23.JPG",
      title: t('nationalProblem.newsItems.4.title'),
      date: t('nationalProblem.newsItems.4.date'),
      source: t('nationalProblem.newsItems.4.source')
    },
    {
      image: "/מדינה בטראומה כלכליסט 26.10.23.JPG",
      title: t('nationalProblem.newsItems.5.title'),
      date: t('nationalProblem.newsItems.5.date'),
      source: t('nationalProblem.newsItems.5.source')
    }
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div>
      <PageHeader 
        title={t('nationalProblem.pageHeader.title')}
        subtitle={t('nationalProblem.pageHeader.subtitle')}
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
          <div className={`md:col-span-2 prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-2xl">
              {t('nationalProblem.intro.paragraph1')}
            </p>
            <p className="text-2xl">
              {t('nationalProblem.intro.paragraph2')}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-auto max-h-114 rounded-lg shadow-lg max-w-[180px]">
              <img 
                src="/ספר ולדמן.JPG" 
                alt="Book about trauma" 
                className="w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-farm-green-pale p-8 rounded-lg mb-12">
          <h2 className={`text-2xl font-bold text-farm-green mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{t('nationalProblem.statistics.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-farm-green mb-2">{t('nationalProblem.statistics.stat1.number')}</p>
              <p className="text-gray-700">{t('nationalProblem.statistics.stat1.text')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-farm-green mb-2">{t('nationalProblem.statistics.stat2.number')}</p>
              <p className="text-gray-700">{t('nationalProblem.statistics.stat2.text')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-farm-green mb-2">{t('nationalProblem.statistics.stat3.number')}</p>
              <p className="text-gray-700">{t('nationalProblem.statistics.stat3.text')}</p>
            </div>
          </div>
        </div>
        
        {/* Kan News Video Link */}
        <div className="mb-16">
          <h2 className="section-title">{t('nationalProblem.media.title')}</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <a href="https://www.kan.org.il/content/kan-news/newstv/p-11894/s1/833126/" target="_blank" rel="noopener noreferrer" className="block">
                  <img src="/thumbnail.png" alt="View report - Soldiers wounded by war" className="w-full" />
                </a>
              </div>
              <div className={`p-4 bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-gray-800 font-medium">{t('nationalProblem.media.videoDescription')}</p>
                <p className="text-gray-600 text-sm">{t('nationalProblem.media.source')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Drive Video */}
        <div className="mb-16">
          <h2 className="section-title">{t('nationalProblem.profOz.title')}</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden relative">
              <div className="relative aspect-video">
                <iframe 
                  src="https://drive.google.com/file/d/1yEL4davStRjPQVJJwx5I7Ti4ki-xKbiK/preview" 
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Educational video about PTSD"
                ></iframe>
              </div>
              <div className={`p-4 bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-gray-800 font-medium">{t('nationalProblem.profOz.videoDescription')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="section-title">{t('nationalProblem.headlines.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsImages.map((item, i) => (
              <Card key={i} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div 
                  className="h-60 overflow-hidden relative group cursor-pointer"
                  onClick={() => openModal(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-white text-lg font-semibold">{t('nationalProblem.headlines.clickToEnlarge')}</p>
                  </div>
                </div>
                <CardContent className={`p-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-gray-500">{t('nationalProblem.headlines.published')}: {item.date} | {item.source}</p>
                  <h3 className="font-semibold mt-1 text-farm-green">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className={`mb-12 prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-2xl font-bold text-farm-green mb-4">{t('nationalProblem.whatCanWeDo.title')}</h2>
          <p>
            {t('nationalProblem.whatCanWeDo.paragraph1')}
          </p>
          <p>
            {t('nationalProblem.whatCanWeDo.paragraph2')}
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
                alt="Enlarged image" 
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

export default NationalProblem;
