import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { HandshakeIcon, BookOpenIcon, UsersIcon } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero
        title="עֹז וְתַעֲצֻמוֹת"
        subtitle="חווה חקלאית לשיקום הלומי קרב-ע&quot;ר"
        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        quote="יִקְרָאֵ֨נִי וְֽאֶעֱנֵ֗הוּ עִמּֽוֹ־אָנֹכִ֥י בְצָרָ֑ה אֲ֝חַלְּצֵ֗הוּ וַאֲכַבְּדֵֽהוּ׃"
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
