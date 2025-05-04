import React, { useState, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { X, Play } from 'lucide-react';

const NationalProblem = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const newsImages = [
    {
      image: "/488502120_670400372031915_7458710229177102403_n.jpg",
      title: "המדינה מדממת - השרים והפקידות בהלם קרב",
      date: "19/11/2023",
      source: "וואלה"
    },
    {
      image: "/488615010_670400312031921_5626379578177632541_n.jpg",
      title: "בעקבות המלחמה: עלייה חדה במספר נפגעי פוסט-טראומה",
      date: "15/11/2023",
      source: "ידיעות אחרונות"
    },
    {
      image: "/488654812_670412395364046_4982621192097618647_n.jpg",
      title: "המלחמה תפסה את מערך בריאות הנפש במשבר",
      date: "13/10/2023",
      source: "הארץ"
    },
    {
      image: "/זינוק במספר הפונים לבריאות הנפש ישראל היום 22.10.23.jpeg",
      title: "אפקט המלחמה: זינוק בשיעור הפונים לתמיכה נפשית",
      date: "22/10/2023",
      source: "ישראל היום"
    },
    {
      image: "/ישראל במשבר בטיפולי נפש 31.10.23.JPG",
      title: '"ישראל במשבר בריאות הנפש החמור בתולדותיה"',
      date: "31/10/2023",
      source: "ישראל היום"
    },
    {
      image: "/מדינה בטראומה כלכליסט 26.10.23.JPG",
      title: "מדינה בטראומה פוגשת מערכת בריאות נפש חולה",
      date: "26/10/2023",
      source: "כלכליסט"
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
        title="פוסט טראומה בעיה לאומית" 
        subtitle="לאחר שנים של מלחמות והתמודדויות, פוסט טראומה הפכה לאתגר לאומי משמעותי"
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
          <div className="md:col-span-2 prose prose-lg max-w-none text-right">
            <p className="text-2xl">
              בעקבות המלחמה, מערכת בריאות הנפש בישראל נמצאת בעומס חסר תקדים. ההערכות מצביעות על כך ש-7% - 10% ממי שנחשפו לאירועי הקשים עשויים לפתח פוסט-טראומה. מאות אלפי ישראלים שחוו את אירועי המלחמה נמצאים בסיכון מוגבר לפגיעה נפשית.
            </p>
            <p className="text-2xl">
              אנשי מקצוע מעריכים כי כ-9,000 פניות שונות נרשמו במוקדי הסיוע הנפשי מאז פרוץ המלחמה. מערכת בריאות הנפש שהייתה במשבר עוד לפני המלחמה, כעת קורסת תחת העומס הנוסף. הצורך במתן מענה מיידי וארוך טווח הפך לאתגר לאומי מהגדולים שידענו.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-auto max-h-114 rounded-lg shadow-lg max-w-[180px]">
              <img 
                src="/ספר ולדמן.JPG" 
                alt="ספר על טראומה" 
                className="w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-farm-green-pale p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-farm-green mb-4 text-right">נתונים וסטטיסטיקות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-farm-green mb-2">9,000+</p>
              <p className="text-gray-700">פניות למוקדי סיוע נפשי מאז תחילת המלחמה</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-farm-green mb-2">250,000</p>
              <p className="text-gray-700"> איש צפויים לסבול מפוסט טראומה</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-4xl font-bold text-farm-green mb-2">80%</p>
              <p className="text-gray-700">שיפור בעקבות טיפול בסביבה טבעית</p>
            </div>
          </div>
        </div>
        
        {/* Kan News Video Link */}
        <div className="mb-16">
          <h2 className="section-title">כתבה מהתקשורת</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <a href="https://www.kan.org.il/content/kan-news/newstv/p-11894/s1/833126/" target="_blank" rel="noopener noreferrer" className="block">
                  <img src="/thumbnail.png" alt="לצפייה בכתבה - החיילים שהמלחמה פצעה את נפשם" className="w-full" />
                </a>
              </div>
              <div className="p-4 bg-white text-right">
                <p className="text-gray-800 font-medium">כתבה: מתוך 5,000 - החיילים שהמלחמה פצעה את נפשם</p>
                <p className="text-gray-600 text-sm">מקור: כאן חדשות</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Drive Video */}
        <div className="mb-16">
          <h2 className="section-title">סרטון נוסף</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden relative">
              <div className="relative aspect-video">
                <iframe 
                  src="https://drive.google.com/file/d/1yEL4davStRjPQVJJwx5I7Ti4ki-xKbiK/preview" 
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="סרטון הסברה על פוסט-טראומה"
                ></iframe>
              </div>
              <div className="p-4 bg-white text-right">
                <p className="text-gray-800 font-medium">סרטון: פוסט-טראומה ודרכי התמודדות</p>
                <p className="text-gray-600 text-sm">מקור: עֹז וְתַעֲצֻמוֹת</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="section-title">כותרות מהעיתונות</h2>
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
                    <p className="text-white text-lg font-semibold">לחץ להגדלת התמונה</p>
                  </div>
                </div>
                <CardContent className="p-4 text-right">
                  <p className="text-sm text-gray-500">פורסם: {item.date} | {item.source}</p>
                  <h3 className="font-semibold mt-1 text-farm-green">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-12 prose prose-lg max-w-none text-right">
          <h2 className="text-2xl font-bold text-farm-green mb-4">מה אנחנו יכולים לעשות?</h2>
          <p>
            מדינת ישראל נמצאת בטראומה לאומית, כדי לא להגיע אל עשרות אלפי האזרחים והחיילים כחולים נפשית מפוסט טראומה לכל חייהם, יש חלון זמן קטן אחרי האירוע, לעזור ולסייע, והאמצעים להפיכת כרונית, לילות של סיוטים, התקפי זעם, המרכזיות, סבל נורא, כאב נפשי מדמם, כדי שהחיים משפחות, הזמן משפחות.
          </p>
          <p>
            ביכולותינו לנצל את האמצעים והכלים הטבעיים המוכחים מחקרית כדי לסייע בהתמודדות ובמניעת החמרת הטראומה בקרב נפגעי ההלם. שהייה בטבע, טיפול בחיות, חקלאות טיפולית ותרפיה בטבע הם דרכים שהוכחו מחקרית כבעלות השפעה משמעותית על החלמה מפוסט-טראומה.
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

export default NationalProblem;
