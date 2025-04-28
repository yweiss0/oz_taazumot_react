
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Donate = () => {
  return (
    <div>
      <PageHeader 
        title="רוצים לתרום" 
        subtitle="תרומתכם מסייעת לנו להמשיך בפעילות החשובה שלנו"
      />
      
      <div className="page-container">
        <div className="prose prose-lg max-w-none text-right mb-12">
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
          </p>
          <p>
            קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="section-title">אפשרויות תרומה</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "תרומה חד פעמית",
                description: "תרומה חד פעמית בכל סכום לבחירתכם"
              },
              {
                title: "תרומה חודשית קבועה",
                description: "הצטרפו למעגל התומכים הקבועים שלנו"
              },
              {
                title: "תרומה לפרויקט מסוים",
                description: "בחרו לתרום לאחד הפרויקטים המיוחדים שלנו"
              }
            ].map((option, i) => (
              <Card key={i} className="card">
                <CardContent className="p-6 text-right">
                  <h3 className="text-xl font-bold mb-4 text-farm-green">{option.title}</h3>
                  <p className="text-gray-700 mb-6">
                    {option.description}
                  </p>
                  <div className="flex justify-end">
                    <Button className="bg-farm-green hover:bg-farm-green-light text-white">
                      תרום עכשיו
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-farm-green-pale p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-farm-green mb-6 text-right">סכומי תרומה מוצעים</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[50, 100, 200, 500, 1000, 'אחר'].map((amount, i) => (
              <div key={i} className="bg-white p-4 rounded-lg text-center cursor-pointer hover:bg-farm-earth-pale transition-colors">
                <p className="font-bold text-farm-green text-lg">
                  {typeof amount === 'number' ? `₪${amount}` : amount}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="section-title">למה לתרום לנו?</h2>
            <div className="prose prose-lg max-w-none text-right">
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
              </p>
              <ul>
                <li>100% מהתרומות מופנות ישירות לפעילות</li>
                <li>אישור מס לפי סעיף 46 לפקודת מס הכנסה</li>
                <li>שקיפות מלאה בניהול הכספים</li>
                <li>השפעה ישירה על חיי המטופלים</li>
              </ul>
            </div>
          </div>
          
          <div className="h-80 bg-farm-earth-pale rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-farm-earth">
              תמונה של פעילות בחווה
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="section-title">פרטים לתרומה בהעברה בנקאית</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-farm-earth-pale mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <div>
                <p className="mb-2">
                  <span className="font-semibold text-farm-green">שם העמותה:</span> רפואה בשבע
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-farm-green">מספר עמותה:</span> 580123456
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-farm-green">בנק:</span> בנק לאומי
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <span className="font-semibold text-farm-green">סניף:</span> 800
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-farm-green">מספר חשבון:</span> 12345678
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-farm-green">IBAN:</span> IL123456789012345678901
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-lg text-farm-green">לקבלת קבלה עבור תרומתכם, אנא שלחו הודעת אימייל ל-donations@refuahbesheva.org.il</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
