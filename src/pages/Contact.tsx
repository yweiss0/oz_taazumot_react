import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/lib/LanguageContext';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const { direction, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <PageHeader 
        title={t('contact.pageHeader.title')} 
        subtitle={t('contact.pageHeader.subtitle')}
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title">{t('contact.contactDetails')}</h2>
            <div className="space-y-6">
              <div className={`flex items-center ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <p className="font-semibold text-farm-green">{t('contact.address.label')}</p>
                  <p className="text-gray-700">{t('contact.address.value')}</p>
                </div>
                <div className={`bg-farm-green-pale p-3 rounded-full ${direction === 'rtl' ? 'mr-4' : 'ml-4'}`}>
                  <MapPin className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              
              <div className={`flex items-center ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <p className="font-semibold text-farm-green">{t('contact.phone.label')}</p>
                  <p className="text-gray-700" dir="ltr">{t('contact.phone.value')}</p>
                </div>
                <div className={`bg-farm-green-pale p-3 rounded-full ${direction === 'rtl' ? 'mr-4' : 'ml-4'}`}>
                  <Phone className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              
              <div className={`flex items-center ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <p className="font-semibold text-farm-green">{t('contact.association.label')}</p>
                  <p className="text-gray-700" dir="ltr">{t('contact.association.value')}</p>
                </div>
                <div className={`bg-farm-green-pale p-3 rounded-full ${direction === 'rtl' ? 'mr-4' : 'ml-4'}`}>
                  <Phone className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              
              <div className={`flex items-center ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <p className="font-semibold text-farm-green">{t('contact.email.label')}</p>
                  <p className="text-gray-700" dir="ltr">{t('contact.email.value')}</p>
                </div>
                <div className={`bg-farm-green-pale p-3 rounded-full ${direction === 'rtl' ? 'mr-4' : 'ml-4'}`}>
                  <Mail className="h-6 w-6 text-farm-green" />
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 text-farm-green ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t('contact.map')}
              </h3>
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
            <h2 className="section-title">{t('contact.leaveDetails')}</h2>
            
            {isSubmitted ? (
              <div className={`bg-green-50 border border-green-200 rounded-md p-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-semibold text-farm-green mb-2">{t('contact.form.successTitle')}</h3>
                <p className="text-gray-700">{t('contact.form.successMessage')}</p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Netlify Forms hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className={`block text-farm-green font-medium ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.fullName')}
                  </label>
                  <Input id="name" name="name" dir={direction} className="border-farm-earth-pale" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className={`block text-farm-green font-medium ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.email')}
                  </label>
                  <Input id="email" name="email" type="email" dir={direction} className="border-farm-earth-pale" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className={`block text-farm-green font-medium ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.phone')}
                  </label>
                  <Input id="phone" name="phone" type="tel" dir={direction} className="border-farm-earth-pale" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className={`block text-farm-green font-medium ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.subject')}
                  </label>
                  <Input id="subject" name="subject" dir={direction} className="border-farm-earth-pale" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className={`block text-farm-green font-medium ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.message')}
                  </label>
                  <Textarea id="message" name="message" rows={5} dir={direction} className="border-farm-earth-pale" required />
                </div>
                
                <div className={`flex ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                  <Button 
                    type="submit" 
                    className="bg-farm-green hover:bg-farm-green-light text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        
        {/*
        <div className="mb-12">
          <h2 className="section-title">שאלות נפוצות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(4).fill(null).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-farm-earth-pale">
                <h3 className={`text-lg font-semibold mb-3 text-farm-green ${isRTL ? 'text-right' : 'text-left'}`}>שאלה נפוצה {i + 1}?</h3>
                <p className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
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
