import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { HandshakeIcon, BookOpenIcon, UsersIcon } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero
        title="עֹז וְתַעֲצֻמוֹת - חווה חקלאית לשיקום הלומי קרב-ע&quot;ר"
        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        quote="יִקְרָאֵנִי וְאֶעֱנֵהוּ,עִמּוֹ אָנֹכִי בְצָרָה אֲחַלְּצֵהוּ וַאֲכַבְּדֵהוּ. תהילים צו 15"
        supportText="כולנו עמכם גיבורי התהילה"
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <Card className="card">
            <CardContent className="p-6 text-right">
              <div className="flex justify-end mb-4">
                <HandshakeIcon className="w-10 h-10 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-green">שיקום בטבע</h3>
              <p className="text-gray-700">
                כאן, בטבע ובחקלאות, הלומי הקרב לוקחים אחריות על תהליך ההחלמה של עצמם. הם עובדים עם האדמה, מגדלים עצים וצמחים, מטפלים בבעלי חיים.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className="p-6 text-right">
              <div className="flex justify-end mb-4">
                <BookOpenIcon className="w-10 h-10 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-green">יוזמה ייחודית</h3>
              <p className="text-gray-700">
                החווה היא לא רק מקום של עבודה, אלא גם של תרפיה, שיחות, שירה, מוזיקה וסרטים – הכל באוויר הפתוח, הכל עם הלב.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className="p-6 text-right">
              <div className="flex justify-end mb-4">
                <UsersIcon className="w-10 h-10 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-green">קהילה תומכת</h3>
              <p className="text-gray-700">
                אנו יוצרים קהילה תומכת שמבינה לעומק את הכאב – וגם את התקווה. החווה מזמינה אתכם לקחת חלק – בהתנדבות, בייעוץ, בתרומות או בכל דרך אחרת.
              </p>
            </CardContent>
          </Card>
        </div>
        <h2 className="section-title">הפרעת דְּחָק פוסט־טראומטית Post-Traumatic Stress Disorder; PTSD </h2>
            <div className="prose prose-lg text-right mb-8">
              <p>
              פוסט־טראומה, היא הפרעה נפשית מתחום ההפרעות הקשורות לטראומה וגורמי דחק. פוסט־טראומה עלולה להיווצר בעקבות חשיפה לאירוע טראומטי הכרוך בסיכון ממשי לאדם או לסובבים אותו. לדוגמה: מלחמה, תאונת דרכים, אונס, פיגוע טרור, קרב, שוד, תקיפה מינית, אלימות, שרפה וכדומה.
טראומה משנית היא ההשפעה הנפשית שנגרמת למטפלים, הנמצאים בקשר רגשי קרוב עם שורדי טראומות. אוכלוסיות בסיכון הם עובדים סוציאליים, פסיכולוגים, שוטרים, מגישי עזרה ראשונה. 

              </p>
              
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title">על המקום</h2>
            <div className="prose prose-lg text-right">
              <p>
                בחווה בגליל, מול נוף עוצר נשימה של הכנרת, הגולן ועמק הירדן, נולדה יוזמה ייחודית ומרגשת: מקום שיקום, צמיחה ותקווה להלומי קרב – חיילים שהתמודדו עם קרבות קשים ושילמו מחיר נפשי כבד. הם חזרו הביתה, אבל עם פצעים שקופים – צלקות שאינן נראות, אך כואבות לא פחות.
              </p>
              <p>
                כאן, בטבע ובחקלאות, הלומי הקרב לוקחים אחריות על תהליך ההחלמה של עצמם. הם עובדים עם האדמה, מגדלים עצים וצמחים, מטפלים בבעלי חיים, ויוצרים קהילה תומכת שמבינה לעומק את הכאב – וגם את התקווה.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">המשימה שלנו</h2>
            <div className="prose prose-lg text-right">
              <p>
                חן ברין, מורה דרך ומדריך שטח, יחד עם הסופר והחוקר שלמה ולדמן, מובילים את הפרויקט מתוך שליחות עמוקה ותחושת אחריות. החווה היא לא רק מקום של עבודה, אלא גם של תרפיה, שיחות, שירה, מוזיקה וסרטים – הכל באוויר הפתוח, הכל עם הלב.
              </p>
              <p>
                החווה מזמינה אתכם לקחת חלק – בהתנדבות, בייעוץ, בתרומות או בכל דרך אחרת. לא רק בכסף – אלא בלב, בידיים ובעשייה. יחד אנחנו יכולים לעזור להם באמת.
              </p>
            </div>
          </div>
        </div>
        <h2 className="section-title text-blue-700">צמיחה מפוסט טראומה (PTG)    </h2>
            <div className="prose prose-lg text-right mb-8 text-blue-700 text-2xl">
              <p>
              היא תהליך בו אנשים חווים שינויים פסיכולוגיים חיוביים בעקבות התמודדות עם אירועים טראומטיים. היא מובילה אותו לשינויים משמעותיים בתפיסת עצמו, יחסיו עם אחרים ובתפיסת עולמו.
אחד התחומים המרכזיים של צמיחה הוא התחזקות אישית – תחושת כוח פנימי ויכולת להתמודד טוב יותר עם אתגרים עתידיים. אנשים רבים מדווחים על שיפור במערכות היחסים שלהם, חיבור רגשי עמוק יותר ותחושת חמלה מוגברת כלפי אחרים.
לעיתים קרובות עולה תחושת הערכה מחודשת לחיים, הכרת תודה על הדברים הקטנים והיכולת ליהנות מהרגע. הצמיחה מקבלת  ביטוי גם בשינויים רוחניים – חיפוש משמעות, חיזוק האמונה או שינוי מערכת הערכים האישית. מחקרים מראים כי בין 30% ל-70% מהשורדים מדווחים על שינויים חיוביים כלשהם.
גורמים התורמים לצמיחה כוללים שהייה בסביבה תומכת, בילוי בטבע הפתוח, מוסיקה  שקטה, פגישות תמיכה קבוצתיות, עיבוד רגשי וקוגניטיבי של האירוע, תמיכה חברתית, אופטימיות ואסטרטגיות התמודדות חיוביות.
צמיחה מפוסט טראומה מדגישה את היכולת האנושית למצוא משמעות, תקווה והתפתחות אישית גם מתוך משבר וסבל עמוק.

              </p>
              
            </div>
        <div className="mb-12">
          <h2 className="section-title">הצטרפו אלינו</h2>
          <div className="bg-farm-green-pale p-8 rounded-lg text-center">
            <p className="text-xl md:text-2xl text-farm-green mb-4">
              הלוחמים לא נשארים לבד
            </p>
            <p className="text-lg md:text-xl text-farm-earth mb-6">
              חווה טיפולית להלומי קרב – צמיחה אמיתית מהלב ומהאדמה
            </p>
            <p className="text-gray-700">
              במקום אחד קסום בגליל, מול נוף עוצר נשימה, חיילים שנפגעו נפשית בקרב מוצאים תקווה. כאן הם עובדים בטבע, מגדלים, בונים, ומרפאים את עצמם – יחד.
              הצטרפו אלינו ביוזמה ישראלית מרגשת שמחזירה אור לנשמות שנכוו.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
