
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const Organization = () => {
  return (
    <div>
      <PageHeader 
        title="העמותה" 
        subtitle="אודות העמותה, החזון והפעילות שלנו"
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="h-80 bg-farm-earth-pale rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-farm-earth">
              תמונה של צוות העמותה
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-right">
            <h2 className="text-2xl font-bold text-farm-green mb-4">מי אנחנו</h2>
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
            </p>
            <p>
              קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="section-title">הצוות המוביל</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="card text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-farm-earth-pale mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-farm-green">שם מלא {i}</h3>
                  <p className="text-farm-earth mb-3">תפקיד בעמותה</p>
                  <p className="text-gray-700 text-sm">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="section-title">השותפים שלנו</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="h-24 bg-white rounded-lg shadow-sm border border-farm-earth-pale flex items-center justify-center"
              >
                <p className="text-farm-earth">לוגו שותף {i}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="prose prose-lg max-w-none text-right">
            <h2 className="text-2xl font-bold text-farm-green mb-4">החזון שלנו</h2>
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
            </p>
            <p>
              קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-right">
            <h2 className="text-2xl font-bold text-farm-green mb-4">המשימה שלנו</h2>
            <p>
              הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנחת. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="section-title">שקיפות ציבורית</h2>
          <div className="prose prose-lg max-w-none text-right mb-8">
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-2 text-farm-green">מסמכים רשמיים</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>אישור ניהול תקין</li>
                  <li>אישור מס הכנסה לתרומות</li>
                  <li>תקנון העמותה</li>
                  <li>רשימת חברי ועד</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-2 text-farm-green">דוחות כספיים</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>דוח כספי 2023</li>
                  <li>דוח כספי 2022</li>
                  <li>דוח כספי 2021</li>
                  <li>תקציב שנתי</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6 text-right">
                <h3 className="text-xl font-bold mb-2 text-farm-green">דוחות פעילות</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>סיכום פעילות 2023</li>
                  <li>סיכום פעילות 2022</li>
                  <li>תוכניות לשנת 2024</li>
                  <li>מדדי הצלחה</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
