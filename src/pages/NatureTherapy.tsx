import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const NatureTherapy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">תרפיה בטבע</h1>
            <p className="text-xl md:text-2xl text-white text-center max-w-3xl">
              השהייה בטבע כפתרון לפוסט טראומה
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-farm-green mb-6 text-center">כוחו המרפא של הטבע</h2>
            <p className="text-right mb-4">
              אנו מאמינים שהחיבור לאדמה ולטבע הוא חלק מהותי מתהליך הריפוי והשיקום. השילוב בין פעילות גופנית, חשיפה למרחב הירוק ותמיכה קבוצתית נמצא כמשמעותי במיוחד עבור אוכלוסיות פגועות טראומה.
            </p>
            <p className="text-right mb-4">
              מחקרים עדכניים מראים כי שהייה בטבע מסייעת להפחתת תסמיני פוסט טראומה (PTSD), חרדה ודיכאון, ותורמת לחיזוק החוסן הנפשי והפיזיולוגי (<a href="https://www.nature.com/articles/s41398-022-02066-x" target="_blank" className="text-farm-green underline">Nature magazine</a>).
            </p>
            <p className="text-right">
              המחקרים מראים כי שהייה סדירה בטבע משפרת את מצב הרוח, מפחיתה לחץ נפשי, דיכאון וחרדה, ואף מחזקת את המערכת החיסונית. נמצא שיפור משמעותי במדדים אלו אצל אנשים שמבלים לפחות שעתיים בשבוע בטבע (<a href="https://www.camoni.co.il/כך-משפיע-טבע-ירוק-על-הבריאות-שלנו" target="_blank" className="text-farm-green underline">לקריאת המחקר</a>).
            </p>
          </div>
        </div>
        
        {/* Research Findings Section */}
        <div className="mb-16 bg-gray-50 py-12 px-6 rounded-xl">
          <h2 className="text-3xl font-bold text-farm-green mb-10 text-center">השהייה בטבע כפתרון לפוסט טראומה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-4 text-farm-green">הפחתת תסמיני PTSD באמצעות פעילות בטבע</h3>
                <p className="text-gray-700">
                  מחקרים מראים כי פעילויות בטבע כמו הליכה, קמפינג וטיולים הרריים מסייעות בהפחתת תסמיני פוסט טראומה (PTSD), במיוחד בקרב יוצאי צבא. מחקר השווה בין קבוצות הליכה בטבע לעומת סביבה עירונית, ומצא ירידה משמעותית יותר בתסמיני PTSD אצל המשתתפים ששהו בטבע. (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11571177/" target="_blank" className="text-farm-green underline">לקריאת המחקר</a>)
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-4 text-farm-green">שילוב טיפול קבוצתי והרפתקני בטבע</h3>
                <p className="text-gray-700">
                  מאמר מקרה ישראלי מציג תוכנית טיפול קבוצתית-הרפתקנית לוותיקי צה"ל עם PTSD כרוני, בה השהייה בטבע שימשה קטליזטור לשינוי. המשתתפים פיתחו מיומנויות התמודדות חדשות, חיזקו תחושת שייכות והפחיתו תחושות בושה וסטיגמה. (<a href="https://etgarim.org/wp-content/uploads/2023/06/Shi-shorer-2023-Long-Term-Group-Nature-Assisted-Therapy-for-Veterans-Diagnosed-with-Chronic-PTSD.pdf" target="_blank" className="text-farm-green underline">למאמר המלא</a>)
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-4 text-farm-green">אקותרפיה והחלמה רגשית</h3>
                <p className="text-gray-700">
                  הגישה של "אקותרפיה" (Ecotherapy) זוכה להכרה גוברת כמודל טיפולי יעיל לטיפול בטראומה. שהייה בטבע, במיוחד במרחבים פראיים, מסייעת לעיבוד רגשי, הפחתת סטרס, חיזוק חוסן נפשי והגברת תחושת החיבור לעצמי ולעולם. (<a href="https://www.jpost.com/opinion/article-826515" target="_blank" className="text-farm-green underline">מאמר Jerusalem Post</a>)
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-4 text-farm-green">הפחתת לחץ, דיכאון וחרדה</h3>
                <p className="text-gray-700">
                  חשיפה סדירה לטבע משפרת את מצב הרוח, מפחיתה לחץ נפשי, דיכאון וחרדה, ואף מחזקת את המערכת החיסונית. מחקרים מצביעים על שיפור של עשרות אחוזים במדדים אלו אצל אנשים שמבלים לפחות שעתיים בשבוע בטבע. (<a href="https://www.camoni.co.il/כך-משפיע-טבע-ירוק-על-הבריאות-שלנו" target="_blank" className="text-farm-green underline">לקריאת המחקר</a>)
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-4 text-farm-green">חיזוק חוסן נפשי ופיזיולוגי</h3>
                <p className="text-gray-700">
                  שהייה בטבע תורמת לבניית חוסן פסיכו-פיזיולוגי, מגבירה תחושת חיוניות ואנרגיה, ומסייעת להפחתת מחשבות שליליות. לכן, היא מומלצת ככלי טיפולי לאנשים החווים מתח גבוה או קשיים רגשיים. (<a href="https://www.betipulnet.co.il/particles/The_resilience_in_nature" target="_blank" className="text-farm-green underline">בטיפולנט</a>)
                </p>
              </CardContent>
            </Card>
            <Card className="card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-4 text-farm-green">קשר ישיר בין שהייה בחוץ לירידה בתסמיני PTSD</h3>
                <p className="text-gray-700">
                  מחקר בקרב יוצאי צבא מצא כי ככל ששהו יותר זמן מחוץ לבית, כך פחתו תסמיני הפוסט טראומה. תיאוריית הפחתת הלחץ מסבירה כי המוח האנושי מעבד גירויים טבעיים בקלות רבה יותר, ולכן הטבע מסייע בשיקום הקוגניטיבי והרגשי. (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8405544/" target="_blank" className="text-farm-green underline">לקריאת המחקר</a>)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Treatment Methods Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-farm-green mb-10 text-center">שיטות הטיפול שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'הליכה וקמפינג בטבע',
                description: 'מחקרים מראים כי פעילויות בטבע כמו הליכה, קמפינג וטיולים הרריים מסייעות בהפחתת תסמיני פוסט טראומה, במיוחד בקרב יוצאי צבא. (https://pmc.ncbi.nlm.nih.gov/articles/PMC11571177/)'
              },
              {
                title: 'גינון טיפולי',
                description: 'טיפול באמצעות עבודה עם צמחים וטיפוח הגינה, המסייע בהפחתת מתח והעלאת תחושת המסוגלות.'
              },
              {
                title: 'מדיטציה בטבע',
                description: 'שילוב של תרגילי מדיטציה ומודעות עם השהייה בטבע ובסביבה החקלאית.'
              },
              {
                title: 'טיפול בבעלי חיים',
                description: 'אינטראקציה מרפאת עם בעלי חיים בחווה, המסייעת בבניית אמון וחיבור רגשי.'
              },
              {
                title: 'טיפול קבוצתי-הרפתקני',
                description: 'פעילויות קבוצתיות בטבע המחזקות תחושת שייכות ומפחיתות תחושות בושה וסטיגמה, כפי שהוכח במחקר ישראלי עם ותיקי צה״ל. (https://etgarim.org/wp-content/uploads/2023/06/Shi-shorer-2023-Long-Term-Group-Nature-Assisted-Therapy-for-Veterans-Diagnosed-with-Chronic-PTSD.pdf)'
              },
              {
                title: 'אקותרפיה',
                description: 'גישה טיפולית המשלבת שהייה במרחבים טבעיים לעיבוד רגשי והפחתת סטרס, הזוכה להכרה גוברת כמודל טיפולי יעיל לטראומה. (https://www.jpost.com/opinion/article-826515)'
              }
            ].map((method, i) => (
              <Card key={i} className="card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-right">
                  <div className="w-12 h-12 rounded-full bg-farm-green-light mb-4 mr-auto flex items-center justify-center">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-farm-green">{method.title}</h3>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: method.description.replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" class="text-farm-green underline">קישור למחקר</a>') }}></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-farm-green mb-6">הצטרפו אלינו לתוכנית הריפוי בטבע</h2>
          <p className="text-lg mb-8">
            השהייה בטבע, כחלק מפעילות טיפולית או חווייתית, מהווה כלי משמעותי בהפחתת תסמיני פוסט טראומה, חיזוק חוסן נפשי, ושיפור הרווחה הכללית – הן במסגרת פרטנית והן קבוצתית.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default NatureTherapy;
