import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Help = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div dir="rtl" className="py-8 max-w-4xl mx-auto px-4 text-center items-center">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">בואו לעזור - לא צריך כסף!</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p className="mb-6">
          החווה מזמינה אתכם לקחת חלק – בהתנדבות, בייעוץ, בתרומות או בכל דרך אחרת. לא רק בכסף – אלא בלב, בידיים ובעשייה.
        </p>
        <p className="mb-6">
          יחד אנחנו יכולים לעזור להם באמת.
        </p>
        <blockquote className="border-r-4 border-green-600 pr-4 italic my-8">
          רוצים לעזור באמת? בואו להיות חלק.
          לא רק בכסף – בידיים, בזמן, בלב.
        </blockquote>
      </div>
      <p className='text-blue-500 text-2xl mb-4 font-bold'>אנחנו מזמינים אתכם לתרום – חממות, ציוד חקלאי, ציוד השקיה, שתילים, פרחים, סככות, גנרטור, ריהוט גן, דשא סינטטי, אמנות ופיסול סביבתי, שתילי תבלין, מצללות, ספסלי קקל, כסאות , שולחנות,  – כל תרומה מחזקת את הלוחמים שלנו</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">דרכים להתנדבות</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>הגעה לימי עבודה מרוכזים בחווה</li>
            <li>סיוע בטיפול בבעלי חיים</li>
            <li>עזרה בעבודות חקלאיות עונתיות</li>
            <li>הדרכה מקצועית בתחומים שונים</li>
            <li>שיתוף בכישורים מיוחדים (מוזיקה, אמנות, בישול)</li>
            <li>עזרה לוגיסטית בארגון אירועים</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">תרומה בידע ומומחיות</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>ייעוץ מקצועי בתחומי החקלאות</li>
            <li>תמיכה מקצועית בתחומי בריאות הנפש</li>
            <li>סיוע בשיווק ויחסי ציבור</li>
            <li>עזרה בפיתוח אתר האינטרנט</li>
            <li>ייעוץ משפטי או עסקי</li>
            <li>קשרים עם גורמים ממשלתיים או ארגונים</li>
          </ul>
        </div>
      </div>


      <div className="bg-green-50 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">צרו קשר להתנדבות</h2>
        <p className="text-gray-700 mb-6">
          אנו מזמינים אתכם להצטרף אלינו ביוזמה ישראלית מרגשת שמחזירה אור לנשמות שנכוו. כל עזרה, קטנה כגדולה, יכולה לעשות שינוי אמיתי.
        </p>
        <Link to="/contact" className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
          צרו קשר
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
