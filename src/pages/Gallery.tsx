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
    "1UBhL2yFWqIt8MjJ7QbmcIwA4-trQfJEl",
    "1fJEKpAI3r_3_SZeXsInmvhjkxZoduswN",
    "11dSVLWBdsfNEKiFpZw1n7PeOHvudEv2H",
    "1wkMWtmi8vSCSBz9kpmTMgKlKvFT7YETt",
    "18CfdK9OeAZ0HBaxWngTJixO3aGHj3BQW",
    "1q0deapr9Faw2a8sM-7RTXlLKWgXX7XdU",
    "1nc4iy_8jISk51P6Er8NXfXatoPwXSKMf",
    "1EU7tPQ74ZIyKc3zIlZCrENZDdxwr0YjA",
    "1OVZg0CeIi1OZz2R4AdjhVZjCuVPB5PAn",
    "1YyqoQqOdaVGA2GIrLs3WjJrDmEZuAG41",
    "1EbyItA-mfzLnlVGSZUnPgrSgpSTev5rA",
    "1Ohaik6MmDgBMfjmJHzglG-uZ1oNzesHn",
    "1DPX3nLs8badiq9Nz3Rs45eng2eaNdkYz",
    "1B2SE9rdMSTjVm_NjurWEMUxbn8183Mec",
    "1IzC512Hucf4DbxrpoC0OCpNE4ZHRbbkP",
    "1sn4_gNlqBA7Ro1rQ8eA6xbuqw8MuyN1P",
    "1enisvNna-OzKg1NBume4_AmJwhASXWwF",
    "12zybLM18pQiirMUaq0s7kii7wTj-enUb",
    "1y9elRgYWUwxEEZuN_yF1F9ep7opzLv1R",
    "1jNh4zTDrffJn7-n7BtYCYCfBee5NsHdj",
    "1SdcWECOZUg4Qq2vtIiXSIpUr7rD6TrZa",
    "1pshbWYR9BkjsgkatUxXU78J1GnUiZI2y",
    "1ZCiKHvYYf50Yivtz9X21BDjkr4EAUPnJ",
    "1Q98BBRD4woqwuTDNs6bnabUSbrhk3xsg",
    "1Hb-gMGl1dv61fobQobnZoljelhju8gpb",
    "1L5ulYh7HPqdZ-5pmVu7sj9p48c-0q0l-",
    "1GgcRj3KDBPZjCMBgDF3LQKODEiyBq7Ix",
    "1v28nFRi_ipAxqDmQtAfxOz1Kj-CuBusl",
    "1UFwdHPg4meFHhIMirOC3DW9XqYknQpP0",
    "1oHG6kcQDQL5TMYm-lEW_hebcrkFrDJZm",
    "1gSq68gF-C_AGwA8axPs8PvgcDSNhHfno",
    "1oNSec-ld2a9xLxj8qmJJMuBnTnDfzNon",
    "1w4XGnSQmKLIoAdkNJXSft9C_7sjwvqoO",
    "1sc2sNHv0RSAp_UnEIj0uWSCwyUUwFXik",
    "1mwXJf8XVZBKeATngXaBlLfhT9hpD_BeQ",
    "1tDNcTFfuKiKwLFSHo355D5Mga1bP0A8Z",
    "1VP67wfawnLH65cn7ThHqlheZs_MA2eR1",
    "1M9gEfHowkmJn_6UDn9h0eJfylA-OFOAj",
    "1t6qysLJVfnOz-P9YLsyAJhPg8wbbAAxZ",
    "1pHGoZqMA3mBXR9Gj1iAjWqeoA73wcepQ",
    "15bg3j3WNISaOkSbeck4kv9-1_j3M57Kk",
    "14TtxeiUv6BPRAcJS7AF1ylng1RvtSOJK",
    "1jQw97vu2VIcmXQ76sSH8oGY0I3FXR6cN",
    "1nnNpWbtXekd4te9v0sfVgogYKEmEWx34",
    "15d93kBo8WXP_yi2NpusowyRstKmckQFe",
    "1OxYg5SQ6CW9MeGrJAhDt9fGJ-2nRPsOg",
    "1pm0Ph0e7MXTt8JHMXF4uDtWCZEjK37LP",
    "1mZ4rZdrf2LKRGaSzZoUJpcHUsNoB_dDq",
    "1zhhEGWwLkIyhQMz5sFBUCTzTrZlYkwlv",
    "1lsHjgjzO9tQimgenIkYKzQy6xD4IXYcf",
    "11RlWkLSzB16ep2MwFKnU6D4kjRNbpNKK",
    "14La2vo53wKxzo_2GhIrK0wwiLULjhzKl",
    "1-y91k4eLdF0FEsT_12NLTnd9UVL_y9Vm",
    "1leLxopE9wJhaIa05RSWWuj2FNxv9Xu4n",
    "1z1rcG4-0-sqtSWgLQHFGXl4bSQodDRyI",
    "14yJAkDkrsiz3wxeTntKQKt14WDnLSEPj",
    "1AbuKpwJwBtdfdawWlfnu7Y4tzmwD-vvJ",
    "1QWHoymbVZgzD9R8-zaGkTCoZLDAg74vB",
    "1CE6PFGCrL7bROxlBjNbfuaQoGZzK7EP-",
    "146DFmQP-_6TqDbg8YgsptIv00fYjUP0c",
    "1ejstK_ROFUW8i-AaK9Gkm494Q4dCl4Fm",
    "1nOY6moI2Ev3Gy-88I1G88Mw2daiSKrUc",
    "1CRCtFeWaMAYh0uTGTN5JAZtJMOuxn5zW",
    "1rD9lfhD-Z5enNkaFPTPUTfkDROCqeX6e",
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
   
    { id: "15rOZGoDM-dXXhUGhv9xKGJxQLTDKANqc", type: "video", alt: "וידאו 2" },
    { id: "13E0OX-SfDS_ZEBskmpMEU6Jx9RMrbtny", type: "video", alt: "וידאו 3" },
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
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
          </p>
          <p>
            קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט
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
