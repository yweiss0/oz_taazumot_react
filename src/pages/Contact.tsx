import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="צור קשר" 
        subtitle="אנחנו כאן לענות על כל שאלה"
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title">פרטי התקשרות</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <p className="font-semibold text-farm-green">כתובת</p>
                  <p className="text-gray-700">חוות עז ותעצומות</p>
                </div>
                <div className="bg-farm-green-pale p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <p className="font-semibold text-farm-green">טלפון</p>
                  <p className="text-gray-700" dir="ltr">+972 52-443-4350</p>
                </div>
                <div className="bg-farm-green-pale p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <p className="font-semibold text-farm-green">דוא"ל</p>
                  <p className="text-gray-700" dir="ltr">oz.nefesh@gmail.com</p>
                </div>
                <div className="bg-farm-green-pale p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              
              
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-farm-green text-right">מפה</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.3929822589467!2d35.54388741516858!3d32.68919197990358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c41fee1361d9f%3A0xa5200dd945e4dddc!2z15fXldeg16og16LXlSDXldeq16LXpteb15XXnteb16o!5e0!3m2!1sen!2sil!4v1684336639175!5m2!1sen!2sil" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">השאירו פרטים</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-farm-green font-medium text-right">שם מלא</label>
                <Input id="name" dir="rtl" className="border-farm-earth-pale" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-farm-green font-medium text-right">דוא"ל</label>
                <Input id="email" type="email" dir="rtl" className="border-farm-earth-pale" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-farm-green font-medium text-right">טלפון</label>
                <Input id="phone" type="tel" dir="rtl" className="border-farm-earth-pale" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-farm-green font-medium text-right">נושא</label>
                <Input id="subject" dir="rtl" className="border-farm-earth-pale" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-farm-green font-medium text-right">הודעה</label>
                <Textarea id="message" rows={5} dir="rtl" className="border-farm-earth-pale" />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-farm-green hover:bg-farm-green-light text-white">
                  שלח הודעה
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        
        {/*
        <div className="mb-12">
          <h2 className="section-title">שאלות נפוצות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(4).fill(null).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-farm-earth-pale">
                <h3 className="text-lg font-semibold mb-3 text-farm-green text-right">שאלה נפוצה {i + 1}?</h3>
                <p className="text-gray-700 text-right">
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
                </p>
              </div>
            ))}
          </div>
        </div>
        */}
        
      </div>
    </div>
  );
};

export default Contact;
