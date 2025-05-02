import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to generate a direct viewable URL for Google Drive images
  const getImageUrl = (id: string) => {
    // This URL format accesses images through Google's content delivery network
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  };

  const getFullImageUrl = (id: string) => {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
  };

  // ----- Images -----
  const imageIds: string[] = [
    "1PwsGnECbKK0BoXFl7ImalKmpudNiVupa", //1
    //"1yi8BIkDGwAnnZEkG36QG7t2M_uF8hXrS", //2
    "1jD__rcpxKVj0pRW_kb3WZfbUQybF2hq6", //3
    "1E4yF4UmY31nhX4DYqib1tCIL-wybF0-Y", //4
    "1eXYn4ktLprn2BbWN7uR2dRUCjSZd2SfS", //5
    "19qL2cw4lmj9EWZXnTc-iPGXWlXk5Wig1", //6
    "1jKi9QcR3VR_M0sm7Tv48kxi46hNNEKs_", //7
    "1sSkeMDalQeaZ1oS6LcEJzDIJtZ7I4z5Q", //8
    "1gCLLSAdCJmC839Nas7nlntHcGejgM0lA", //9
    "1IGGGIDFSTuOrSVp_QBIxAvVIQVNio_I0", //10
    "1i-ZXXZLNoEsd3HYA29HRIhQxSOmXcvLR", //11
    "1yRuw1M1v3rKK2OWf_qjNxtaYDz1DEcH3", //12
    "1nTRFsHtNNQ7bNJ75a1Qfr8iSi37ZkWKv", //13
    "1cxEYS5MDUxc_3Bp0fC-cI8fBZM0b7HFb", //14
    "1T_HEwbeJeiltqJ3yRefzq18TSvZGTm3I", //15
    "1q4MowtnvzdV9N7wfOLYibbUNUD6gkyRg", //16
    "1SsBv1em-pXSSMQO4bQ-c_Robv3XVIS8M", //17
    "1tg9RDxDoK9x1AcBohvgfpWEik959fsAF", //18
    "1TH3lvH7MOzH_2u1HhuGktZIL_Mnkxi-s", //19
    "1EhDLQ1L6cLPmim1O1az6Ams1n4C5UEcS", //20
    "109zwxgo7NIEZV8dSffUwcgoVLa5rDpcy", //21
    "13z_C_dmcJItyCMYKNY0wVrdCDHlRruMY", //22
    "1muy2T7qqe1zGEU69_dARlyxY0k6HA35u", //23
    "1TYwje-qkGLGlvPsnmoX6iMrLy9G_xlke", //24
    "1czJqgpuXpmSImdp5PhBiIiOrwyNeJu_X", //25
    "1njctPXFmqJ3MRdDPk4yHgVEdzqXFW90_", //26
    "1mbBK-wYjz3OAmeJ9Ncq-ADHElatUc6ca", //27
    "1RIcROyAlr8pScd5P3DnjQJHFn3dRsLxa", //28
    "1T4taKsDw3TTDx3w6I_49XAeaMBWqieGn", //29
    "1sxD6n1A1tbm4ofCmmFbc5HiK2kv88V3U", //30
    "1Cx8kbLvkN4faAHt3BTaXwiM6RIPfl2_H", //31
    "1mkye_S24iQyBANmV0zKB9ST5quM9U3qn", //32
    "1wRTt9x8Gss_3psGFv8OD5YwlhZ3pMUat", //33
    "1Dt6aHV-8Dm2NQ3z8q_QJ28IuxZYWPasq", //34
    "16K8sWiUYlFfmvMriElnL52t13h8Ne1ZH", //35
    "1QjafuC7xq-D4Tk3v8AL4OSCb3xjAbnYD", //36
    "1qOt3IMj1DGPwKLXHFmuvr_8LKyOS9lsy", //37
    "1mR7skqha_6-YlzsI_Vd6q7r5_TlPz3iq", //38
    "1btnT0bDTCuDnB7jGDJBXDhYzcWsrLMUR", //39
    "1Pr_oebFER96WVIRE1WrbQXPwvvXIVgPL", //40
    "1MafPbD8lEj6t76uWEpUThTeWBwSWTJjV", //41
    "1tyrAWiPJv_kMEee5p-u0JmaLs8aJROk0", //42
    "15J8V1Pyd5AADt6fBMsKMHRaI18H3Odnb", //43
    "1E6-rLrROJiR6gK_MApebRCaPoKtB6FTZ", //44
    "1c9hljGLXoshGfWgrFTQlV_otV6Cuc3TX", //45
    "1G46AA2HUAIPhEy7QVtVv3nBFjVjMvcw5", //46
    "1fhiCvACRJtmJrkcm4OUH16gam2lF2B1k", //47
    "1C5blSWwcPHpS5leEiBqRsciXnnU6Ke9l", //48
    "1rwfWJL_MEWJI9oCSZtZWYZUZ8SVHc67u", //49
    // ... (add remaining IDs as needed)
  ];

  const galleryImages = imageIds.map((id, idx) => ({ id, alt: `תמונה ${idx + 1}` }));

  // Pagination
  const IMAGES_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const paginatedImages = galleryImages.slice(
    currentPage * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE + IMAGES_PER_PAGE
  );

  const galleryVideos = [
    { id: "1muy2T7qqe1zGEU69_dARlyxY0k6HA35u", type: "video", alt: "וידאו 1" },
   
    
    { id: "1yi8BIkDGwAnnZEkG36QG7t2M_uF8hXrS", type: "video", alt: "וידאו 4" },
    { id: "1KORO5w95xyxn_9jBk8jArym9yWOYpYgA", type: "video", alt: "5" },
    
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
        title="גלריה" 
        subtitle="תמונות ווידאו מפעילות החווה"
      />
      
      <div className="page-container">
        <Tabs defaultValue="images" dir="rtl" className="mb-12">
          <div className="flex justify-end mb-6">
            <TabsList>
              <TabsTrigger value="images">תמונות</TabsTrigger>
              <TabsTrigger value="videos">וידאו</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="images">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginatedImages.map((image, i) => (
                <div 
                  key={i} 
                  className="aspect-square overflow-hidden rounded-lg bg-farm-earth-pale cursor-pointer relative group"
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
              ))}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
                  disabled={currentPage === 0}
                  className="px-4 py-2 rounded bg-farm-green text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  קודם
                </button>
                <span className="self-center text-farm-green font-semibold">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
                  disabled={currentPage === totalPages - 1}
                  className="px-4 py-2 rounded bg-farm-green text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  הבא
                </button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryVideos.map((video, i) => (
                <div key={i} className="aspect-video overflow-hidden rounded-lg shadow-md">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview?usp=sharing`}
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                    title={video.alt}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  ></iframe>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="prose prose-lg max-w-none text-right mb-12">
          <h2 className="text-2xl font-bold text-farm-green mb-4">אירועים מיוחדים בחווה</h2>
          <p>
          אנו עורכים אירועים מיוחדים לפי הזמנה של יחידות צהל, עיבוד חוויות לחימה, משפחות שכול,   אירועי מוסיקה, יוגה בטבע, ועוד
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

export default Gallery;
