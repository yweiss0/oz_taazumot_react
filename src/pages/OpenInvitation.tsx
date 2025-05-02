import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

const OpenInvitation = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Image IDs from Google Drive
  const invitationImages = [
    {
      // From: https://drive.google.com/file/d/1EbyItA-mfzLnlVGSZUnPgrSgpSTev5rA/view?usp=sharing
      id: "1EbyItA-mfzLnlVGSZUnPgrSgpSTev5rA",
      alt: "הזמנה פתוחה 1"
    },
    {
      // From: https://drive.google.com/file/d/1B2SE9rdMSTjVm_NjurWEMUxbn8183Mec/view?usp=drive_link
      id: "1B2SE9rdMSTjVm_NjurWEMUxbn8183Mec",
      alt: "הזמנה פתוחה 2"
    },
    {
      // From: https://drive.google.com/file/d/1DPX3nLs8badiq9Nz3Rs45eng2eaNdkYz/view?usp=drive_link
      id: "1DPX3nLs8badiq9Nz3Rs45eng2eaNdkYz",
      alt: "הזמנה פתוחה 3"
    }
  ];

  const openModal = (imageId: string) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <PageHeader 
        title="הזמנה פתוחה" 
        subtitle="הצטרפו אלינו"
      />
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {invitationImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div 
                className="aspect-square overflow-hidden relative group cursor-pointer"
                onClick={() => openModal(image.id)}
              >
                <iframe
                  src={`https://drive.google.com/file/d/${image.id}/preview?usp=sharing`}
                  title={image.alt}
                  className="w-full h-full border-0 absolute inset-0"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                  <p className="text-white text-lg font-semibold">לחץ להגדלת התמונה</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-auto"
          onClick={closeModal}
        >
          <div 
            className="relative mx-auto my-auto w-full max-w-4xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>
            <iframe 
              src={`https://drive.google.com/file/d/${selectedImage}/preview?usp=sharing`}
              className="w-full h-full border-0 bg-white rounded-lg"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenInvitation; 