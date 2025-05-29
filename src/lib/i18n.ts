import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  common: {
    language: 'Language',
    english: 'English',
    hebrew: 'עברית',
  },
  navbar: {
    home: 'Home',
    nationalProblem: 'PTSD - National Problem',
    natureTherapy: 'Nature Therapy',
    chenBarin: 'Manager - Chen Barin',
    openInvitation: 'Open Invitation',
    gallery: 'Gallery',
    thanks: 'Thanks',
    helpUs: 'Come Help Us',
    contact: 'Contact Us',
  },
  footer: {
    farmName: 'OZ VETAAZUMOT',
    tagline: 'Agricultural Farm for PTSD Rehabilitation',
    visitWarning: 'Coordination of arrival dates for visitor regulation, please send a preliminary WhatsApp message to +972-52-4434350. Do not come to the farm without prior coordination.',
    farmManager: 'Farm Manager - Chen Barin',
    association: 'Association',
    farm: 'OZ VETAAZUMOT',
    wazeDirections: 'Directions on Waze "Oz Vetaazumot Farm"',
    facebook: 'Oz Vetaazumot on Facebook',
    allRightsReserved: 'All Rights Reserved.'
  },
  home: {
    hero: {
      title: "OZ VETAAZUMOT - Agricultural Farm for PTSD Rehabilitation",
      quote: "He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honour him. Psalms 91:15",
      supportText: "We are all with you, heroes of glory"
    },
    cards: {
      rehabilitation: {
        title: "Rehabilitation in Nature",
        content: "Here, in nature and agriculture, PTSD survivors take responsibility for their own healing process. They work with the land, grow trees and plants, care for animals."
      },
      initiative: {
        title: "Unique Initiative",
        content: "The farm is not just a place of work, but also of therapy, conversations, singing, music, and movies - all in the open air, all from the heart."
      },
      community: {
        title: "Supportive Community",
        content: "We create a supportive community that deeply understands the pain - and also the hope. The farm invites you to take part - volunteering, consulting, donating, or in any other way."
      }
    },
    ptsd: {
      title: "Post-Traumatic Stress Disorder (PTSD)",
      content: "Post-traumatic stress disorder is a mental condition in the realm of trauma and stress-related disorders. PTSD can develop following exposure to a traumatic event involving real risk to a person or those around them. For example: war, car accidents, rape, terrorist attacks, combat, robbery, sexual assault, violence, fire, etc. Secondary trauma is the psychological impact caused to caregivers who have a close emotional connection with trauma survivors. Populations at risk include social workers, psychologists, police officers, and first responders."
    },
    about: {
      title: "About the Place",
      content1: "On a farm in the Galilee, overlooking the breathtaking view of the Sea of Galilee, the Golan Heights, and the Jordan Valley, a unique and moving initiative was born: a place of rehabilitation, growth, and hope for combat stress casualties - soldiers who faced difficult battles and paid a heavy psychological price. They returned home, but with invisible wounds - scars that are not visible, but no less painful.",
      content2: "Here, in nature and agriculture, the combat stress casualties take responsibility for their own healing process. They work with the land, grow trees and plants, care for animals, and create a supportive community that deeply understands the pain - and also the hope."
    },
    mission: {
      title: "Our Mission",
      content1: "Chen Barin, a tour guide and field instructor, together with author and researcher Shlomo Waldman, lead the project with a deep sense of mission and responsibility. The farm is not just a place of work, but also of therapy, conversations, singing, music, and movies - all in the open air, all from the heart.",
      content2: "The farm invites you to take part - volunteering, consulting, donating, or in any other way. Not just with money - but with heart, hands, and action. Together we can truly help them."
    },
    ptg: {
      title: "Post-Traumatic Growth (PTG)",
      content: "Post-Traumatic Growth is a process where people experience positive psychological changes following traumatic events. It leads to significant changes in self-perception, relationships with others, and worldview. One of the central areas of growth is personal strengthening - a sense of inner strength and better ability to cope with future challenges. Many people report improvement in their relationships, deeper emotional connection, and increased compassion for others. Often, a renewed appreciation for life emerges, gratitude for small things, and the ability to enjoy the moment. Growth is also expressed in spiritual changes - searching for meaning, strengthening faith, or changing one's personal value system. Studies show that between 30% and 70% of survivors report some positive changes. Factors contributing to growth include being in a supportive environment, spending time in nature, quiet music, group support meetings, emotional and cognitive processing of the event, social support, optimism, and positive coping strategies. Post-traumatic growth emphasizes the human ability to find meaning, hope, and personal development even from crisis and deep suffering."
    },
    join: {
      title: "Join Us",
      subtitle1: "The warriors are not left alone",
      quote: "I will be with him in trouble; I will deliver him, and honour him. Psalms 91:15",
      subtitle2: "Therapeutic farm for combat stress casualties - real growth from the heart and from the soil",
      content: "In one magical place in the Galilee, overlooking a breathtaking view, soldiers who were mentally injured in combat find hope. Here they work in nature, grow, build, and heal themselves - together. Join us in a moving Israeli initiative that brings light back to souls that have been scorched."
    }
  },
  nationalProblem: {
    pageHeader: {
      title: "PTSD - National Problem",
      subtitle: "After years of wars and struggles, PTSD has become a significant national challenge"
    },
    intro: {
      paragraph1: "Following the war, Israel's mental health system is facing unprecedented strain. Estimates indicate that 7% - 10% of those exposed to severe events may develop PTSD. Hundreds of thousands of Israelis who experienced the war events are at increased risk for mental injury.",
      paragraph2: "Professionals estimate that approximately 9,000 different requests have been recorded at mental health support centers since the outbreak of the war. The mental health system, which was already in crisis before the war, is now collapsing under the additional burden. The need to provide immediate and long-term response has become one of the biggest national challenges we have known."
    },
    statistics: {
      title: "Data and Statistics",
      stat1: {
        number: "9,000+",
        text: "Requests to mental health support centers since the beginning of the war"
      },
      stat2: {
        number: "250,000",
        text: "People expected to suffer from PTSD"
      },
      stat3: {
        number: "80%",
        text: "Improvement following treatment in a natural environment"
      }
    },
    media: {
      title: "Media Coverage",
      videoDescription: "Report: From 5,000 - The Soldiers Whose Souls Were Wounded by War",
      source: "Source: Kan News"
    },
    profOz: {
      title: "Prof. Oz Gutterman: Growth from PTSD",
      videoDescription: "Video: PTSD and Coping Methods"
    },
    headlines: {
      title: "Headlines from the Press",
      clickToEnlarge: "Click to enlarge image",
      published: "Published"
    },
    whatCanWeDo: {
      title: "What Can We Do?",
      paragraph1: "The State of Israel is experiencing national trauma. To prevent tens of thousands of citizens and soldiers from becoming mentally ill with PTSD for the rest of their lives, there is a small window of time after the event to help and assist, and the means to prevent it from becoming chronic - nights of nightmares, rage attacks, centrality, terrible suffering, bleeding mental pain, so that lives and families can be saved.",
      paragraph2: "We can utilize scientifically proven natural means and tools to help cope with and prevent the worsening of trauma among shock victims. Spending time in nature, animal therapy, therapeutic agriculture, and nature therapy are scientifically proven ways to have a significant impact on recovery from PTSD."
    },
    newsItems: [
      {
        title: "The Country is Bleeding - Ministers and Officials in Shell Shock",
        date: "19/11/2023",
        source: "Walla"
      },
      {
        title: "Following the War: Sharp Rise in PTSD Casualties",
        date: "15/11/2023",
        source: "Yedioth Ahronoth"
      },
      {
        title: "The War Caught the Mental Health System in Crisis",
        date: "13/10/2023",
        source: "Haaretz"
      },
      {
        title: "War Effect: Surge in Mental Support Seekers",
        date: "22/10/2023",
        source: "Israel Today"
      },
      {
        title: "'Israel in the Most Severe Mental Health Crisis in its History'",
        date: "31/10/2023",
        source: "Israel Today"
      },
      {
        title: "A Country in Trauma Meets a Sick Mental Health System",
        date: "26/10/2023",
        source: "Calcalist"
      }
    ]
  },
  natureTherapy: {
    hero: {
      title: "Nature Therapy",
      subtitle: "Spending time in nature as a solution for PTSD"
    },
    intro: {
      title: "The Healing Power of Nature",
      paragraph1: "We believe that connection to the earth and nature is an essential part of the healing and rehabilitation process. The combination of physical activity, exposure to green space, and group support is found to be particularly significant for trauma-affected populations.",
      paragraph2: "Recent studies show that spending time in nature helps reduce symptoms of post-traumatic stress disorder (PTSD), anxiety, and depression, and contributes to strengthening mental and physiological resilience (<a href='https://www.nature.com/articles/s41598-023-49702-0' target='_blank' rel='noopener noreferrer' class='text-farm-green hover:text-farm-green-light underline font-semibold'>Nature magazine</a>).",
      paragraph3: "Research shows that regular time in nature improves mood, reduces mental stress, depression, and anxiety, and even strengthens the immune system. Significant improvement in these measures was found in people who spend at least two hours a week in nature (<a href='https://www.camoni.co.il/%D7%9B%D7%9A-%D7%9E%D7%A9%D7%A4%D7%99%D7%A2-%D7%98%D7%91%D7%A2-%D7%99%D7%A8%D7%95%D7%A7-%D7%A2%D7%9C-%D7%94%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%A9%D7%9C%D7%A0%D7%95' target='_blank' rel='noopener noreferrer' class='text-farm-green hover:text-farm-green-light underline font-semibold'>read the article</a>)."
    },
    research: {
      title: "Spending Time in Nature as a Solution for PTSD",
      card1: {
        title: "Reducing PTSD Symptoms Through Nature Activities",
        content: "Studies show that nature activities such as walking, camping, and mountain hiking help reduce symptoms of post-traumatic stress disorder (PTSD), especially among veterans. A study compared walking groups in nature versus urban environments and found a more significant decrease in PTSD symptoms in participants who spent time in nature."
      },
      card2: {
        title: "Combining Group and Adventure Therapy in Nature",
        content: "An Israeli case article presents a group-adventure treatment program for IDF veterans with chronic PTSD, where spending time in nature served as a catalyst for change. Participants developed new coping skills, strengthened a sense of belonging, and reduced feelings of shame and stigma."
      },
      card3: {
        title: "Ecotherapy and Emotional Recovery",
        content: "The 'Ecotherapy' approach is gaining recognition as an effective treatment model for trauma. Spending time in nature, especially in wild spaces, helps with emotional processing, stress reduction, strengthening mental resilience, and increasing a sense of connection to self and the world. "
      },
      card4: {
        title: "Reducing Stress, Depression, and Anxiety",
        content: "Regular exposure to nature improves mood, reduces mental stress, depression, and anxiety, and even strengthens the immune system. Studies indicate improvements of dozens of percentages in these measures in people who spend at least two hours a week in nature. "
      },
      card5: {
        title: "Strengthening Mental and Physiological Resilience",
        content: "Spending time in nature contributes to building psycho-physiological resilience, increases a sense of vitality and energy, and helps reduce negative thoughts. Therefore, it is recommended as a therapeutic tool for people experiencing high stress or emotional difficulties."
      },
      card6: {
        title: "Direct Link Between Outdoor Time and Decrease in PTSD Symptoms",
        content: "A study among veterans found that the more time they spent outside the home, the more their post-traumatic symptoms decreased. Stress reduction theory explains that the human brain processes natural stimuli more easily, and therefore nature helps in cognitive and emotional rehabilitation. "
      }
    },
    methods: {
      title: "Our Treatment Methods",
      method1: {
        title: "Walking and Camping in Nature",
        description: "Studies show that nature activities such as walking, camping, and mountain hiking help reduce symptoms of post-traumatic stress disorder, especially among veterans."
      },
      method2: {
        title: "Therapeutic Gardening",
        description: "Treatment through working with plants and nurturing the garden, which helps reduce stress and increase a sense of capability."
      },
      method3: {
        title: "Meditation in Nature",
        description: "Combination of meditation exercises and mindfulness with spending time in nature and an agricultural environment."
      },
      method4: {
        title: "Animal Therapy",
        description: "Healing interaction with animals on the farm, which helps build trust and emotional connection."
      },
      method5: {
        title: "Group-Adventure Therapy",
        description: "Group activities in nature that strengthen a sense of belonging and reduce feelings of shame and stigma, as proven in Israeli research with IDF veterans."
      },
      method6: {
        title: "Ecotherapy",
        description: "A therapeutic approach that combines spending time in natural spaces for emotional processing and stress reduction, gaining increasing recognition as an effective treatment model for trauma."
      },
      researchLink: "Research link"
    },
    cta: {
      title: "Join Our Nature Healing Program",
      text: "Spending time in nature, as part of a therapeutic or experiential activity, is a significant tool in reducing symptoms of post-traumatic stress disorder, strengthening mental resilience, and improving overall well-being - both in individual and group settings."
    }
  },
  chenBarin: {
    pageHeader: {
      title: "Farm Manager - Chen Barin",
      subtitle: "Leading the farm with passion and dedication"
    },
    articleTitle: "For the Soul: Chen Barin from Kfar Yehezkel Established an Isolated Agricultural Farm for Combat PTSD Survivors",
    publishedIn: "Published in mynet HaEmek, 06/02/22 Click here to read the article",
    subtitle: "For Barin, this is a dream come true. The farm was established in a place with stunning views of the Sea of Galilee and the Golan Heights, not far from Yavneel. \"People suffering from PTSD need space, nature, quiet and scenery\"",
    sections: {
      intro: "In an isolated location on a cliff overlooking the breathtaking view of the Sea of Galilee, the Golan Heights and the Jordan Valley, a unique agricultural farm for combat veterans is being established these days.",
      about: "The farm called 'Oz VeTaazumot' was established by Chen Barin from Kfar Yehezkel, who has been building and developing the farm with his own hands for the past year with one goal - to provide combat veterans with a place where they will receive therapy for their souls through staying in the open field, working in agriculture with plants and animals, and group discussions. \"This is a place close to my heart,\" he says this week with excitement.",
      dreamComeTrue: {
        title: "Dream Come True",
        content1: "Barin (52), married and father of three, was born and raised in Afula and currently lives in Kfar Yehezkel. He owns a company for jeep tours, rappelling and extreme sports. In the army, he served as a fighter in Battalion 13 in Golani in regular service and later in reserves. In 1994, he had an encounter with terrorists, an event that affects him to this day. \"I came out of that event miraculously and received a new life. There was one Chen before and one Chen after,\" he says.",
        content2: "After being discharged, he married and established his home, but he always had a dream that he defines as his life project - to establish a farm for combat veterans who live for years in the shadow of combat that damaged their souls and carry with them the open wound.",
        content3: "Recently, he bought the agricultural land on which the farm is located, an isolated farm far from any settlement located on a cliff between Yavneel and Menahemia on a ridge descending from Ramat Sirin towards the Jordan Valley and the Nahal Yavneel Nature Reserve. The farm is located in a position overlooking the Jordan Valley, the Sea of Galilee, the Poriya Ridge and the Golan Heights, as well as the triangle of borders between Israel, Jordan and Syria. On a clear day, Mount Hermon can be seen from the farm in all its glory.",
        content4: "The agricultural area spans 50 dunams, of which he allocated five dunams for establishing the farm. Last January he started working, built greenhouses, laid irrigation pipes, planted palm trees and built a small stable for domesticated donkeys."
      },
      location: "\"I know the place from trips I've done in past years, and when I arrived here I knew this was exactly the spot where I wanted to build the farm,\" says Barin. \"This place was originally supposed to be a hotel with a cable car going down to the Jordan River for pilgrims. This obviously didn't happen. The council head connected me with good and special people, and that's how I got to the place and managed to build my dream here. The moment I had the opportunity to come here, I knew that first of all I'm doing this for my own soul, and from that grew the idea to establish the farm for combat veterans, which is intended for the entire population, combat veterans in general and disabled IDF veterans in particular. I want them to know there's such a place. There's nature and quiet here, which is what combat veterans need.\"",
      whenSpeaking: "When Barin speaks about the farm, his excitement is clearly visible. \"My dream was always to reach such a farm,\" he says. \"Combat veterans suffering from PTSD need space, nature, quiet and scenery. When you arrive here, you're in a different place. Here time stops. You don't have the chase after daily troubles. When people come here, they simply merge with the quiet and nature. It gives you mental strength that you're not in a chase. When I came up here a year ago, there was nothing. It's very hard to work in winter. Three days ago, the large tent I built fell apart from the winds. In summer it's very hot, we're in the Jordan Valley. There are only a few months a year when you can be here.\"",
      enjoyingQuiet: {
        title: "Enjoying the Quiet",
        content1: "Barin built the farm himself and is establishing the entire project without profit motives. Six months ago, Orna Markbrait and Nurit Ron joined the project, opened a Facebook page for the farm and created a landing page calling on the public to donate whatever they can for the farm. \"Orna and Nurit come from the center and sleep here in the building, organize and decorate and take care. People contact us and donate fences and paint. Now a renovation contractor who bought a new wagon called me, heard we need equipment and donated his old wagon. From someone at Netafim company in the Arava, I received equipment for greenhouses.\"",
        content2: "The farm today includes a main hospitality tent, another tent being erected these days, and a large equipment warehouse. In addition, Barin is building ecological toilets and showers. The farm also has a small donkey farm. \"I gave the donkey farm to a combat veteran I met while working on the farm. He stays with the donkeys, cares for and treats them. Just a week ago he told me the donkeys simply saved him, it's for the soul. It's a type of therapy. People come, work with them and feed them.\"",
        content3: "Barin's big dream is for as many combat veterans as possible to come to the farm and enjoy the quiet and nature. \"My dream is for combat veterans, disabled IDF veterans or anyone who needs it and feels this place does them good to come here. They'll come, work in the greenhouses and sleep. There are hiking trails nearby, the farm is adjacent to the Israel Trail and you can take jeep tours from here, various workshops can also be held here, all without profit motives. But the farm also needs to maintain itself, so I'm open to ideas for holding events, workshops and classes here, and all the money that comes from these activities will be allocated solely for the farm's benefit.\""
      },
      alreadyArriving: {
        title: "Are combat veterans already coming here?",
        content: "\"Yes, I have a friend here who takes care of the donkeys and I receive calls all the time. I get responses from people who come and see the farm and my vision and dream taking shape. It's really moving. I connected with an organization that wanted to come here for a workshop. My dream is for combat veterans to come here. Our country is amazing and there's no reason for groups of fighters who experienced some traumatic event to go beyond the state's borders.\""
      },
      awareness: {
        title: "Are people who come here aware they're coming to a place in complete isolation?",
        content: "\"That's exactly the intention. Isolation and solitude are not foreign to us. Quiet and tranquility are very important, as are the fighters' discussion circles. Only those who have experienced and know what it's like to go through this can understand. The location of the farm is exactly what people need.\""
      },
      expectingChange: {
        title: "Expecting Change",
        content1: "Combat shock, also known as 'combat reaction', is a personal reaction to post-trauma (PTSD - Post-Traumatic Stress Disorder) of a soldier to an event that occurred during operational-combat activity. About 10-15 percent of all war casualties are combat shock victims. In Israel, about 4,800 such casualties live. Recently, following the case of Itzik Saidian, a Golani combat veteran who set himself on fire in front of the Rehabilitation Department at the Ministry of Defense, public awareness of the plight of combat veterans has increased.",
        content2: "Why do people suffering from PTSD reach a state where they're begging and not believed?",
        content3: "\"There's a lot of bureaucracy in the Ministry of Defense. Once a soldier is injured with PTSD, he moves from the army to the Rehabilitation Department and it's very difficult to get help. When you come blind or with an amputation, they see the injury and there's a price list for it, but when you come with an invisible mental injury and sit in front of people and need to prove it, they don't always believe you even with all the documents and investigations. Only now, following Itzik Saidian's case, they're suddenly starting to ease up more, but the committees are very exhausting and humiliating. Many people simply prefer to give up on the help.\"",
        content4: "Are you angry at the state regarding its attitude toward PTSD?",
        content5: "\"I'm not angry but there's a lot of room for improvement. It's a shame that dear Itzik Saidian paid a price that almost cost him his life. When people come with PTSD, we need to support and help them. There are many guys who went to combat and came back completely different. I expect the change to come quickly, that people won't have to go through what the guys from Yom Kippur went through.\"",
        content6: "And how does Israeli society treat PTSD victims in your opinion?",
        content7: "\"Today there's greater awareness of combat veterans. In rehabilitation centers and Beit Halochem, the guys receive proper treatment, but people still don't fully understand the needs, the fact that you suddenly don't come to work. For combat veterans, nights are reversed, sometimes you don't wake up on time. You can be at your best for a week and suddenly a noise or anything can bring you back to the event. I know from friends that people are more aware today of combat reactions and what happens and try to help.\""
      }
    }
  },
  openInvitation: {
    pageHeader: {
      title: "Open Invitation",
      subtitle: "Hosting free of charge"
    },
    clickToEnlarge: "Click to enlarge image",
    imageAlt: "Open invitation",
    videoNotSupported: "Your browser does not support the video tag."
  },
  gallery: {
    pageHeader: {
      title: "Gallery",
      subtitle: "Photos and videos from the farm activities"
    },
    tabs: {
      images: "Images",
      videos: "Videos"
    },
    clickToEnlarge: "Click to enlarge image",
    specialEvents: {
      title: "Special Events at the Farm",
      content: "We hold special events by order for IDF units, processing combat experiences, bereaved families, music events, nature yoga, and more"
    },
    next: "Next",
    previous: "Previous"
  },
  thanks: {
    pageHeader: {
      title: "Thanks",
      subtitle: "Special thanks that the farm received (partial list)"
    },
    support: {
      title: "Thank You for the Support",
      content: "We thank all our supporters, volunteers and partners who enable us to continue the important work of the farm."
    }
  },
  help: {
    title: "Come Help - No Money Needed!",
    intro: {
      paragraph1: "The farm invites you to take part - volunteering, consulting, donating, or in any other way. Not just with money - but with heart, hands, and action.",
      paragraph2: "Together we can truly help them.",
      quote: "Want to really help? Come be a part. Not just with money - with hands, with time, with heart."
    },
    donationCallout: "We invite you to donate - greenhouses, agricultural equipment, irrigation equipment, seedlings, flowers, sheds, generator, garden furniture, synthetic grass, environmental art and sculpture, herb plants, shading, KKL benches, chairs, tables - every donation strengthens our warriors",
    volunteering: {
      title: "Ways to Volunteer",
      items: [
        "Coming to concentrated work days at the farm",
        "Helping with animal care",
        "Assistance with seasonal agricultural work",
        "Professional guidance in various fields",
        "Sharing special skills (music, art, cooking)",
        "Logistical help in organizing events"
      ]
    },
    expertise: {
      title: "Contributing Knowledge and Expertise",
      items: [
        "Professional consultation in agriculture",
        "Professional support in mental health fields",
        "Help with marketing and public relations",
        "Website development assistance",
        "Legal or business consulting",
        "Connections with government entities or organizations"
      ]
    },
    contactCta: {
      title: "Contact Us to Volunteer",
      content: "We invite you to join us in a moving Israeli initiative that brings light back to scorched souls. Every help, small or large, can make a real difference.",
      button: "Contact Us"
    }
  },
  contact: {
    pageHeader: {
      title: "Contact Us",
      subtitle: "We are here to answer any question"
    },
    contactDetails: "Contact Details",
    address: {
      label: "Address",
      value: "Oz Vetaazumot Farm"
    },
    phone: {
      label: "Phone",
      value: "+972 52-443-4350"
    },
    association: {
      label: "Association",
      value: "+972 50-523-2631"
    },
    email: {
      label: "Email",
      value: "oz.nefesh@gmail.com"
    },
    map: "Map",
    leaveDetails: "Leave Your Details",
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Thank you for contacting us!",
      successMessage: "Your message has been sent successfully. We will get back to you soon."
    }
  },
  donate: {
    pageHeader: {
      title: "Donate",
      subtitle: "Support our important cause"
    }
  },
  organization: {
    pageHeader: {
      title: "Organization",
      subtitle: "About our organization"
    }
  },
  notFound: {
    title: "Page Not Found",
    message: "The page you are looking for does not exist.",
    backHome: "Back to Home"
  }
};

// Hebrew translations
const heTranslations = {
  common: {
    language: 'שפה',
    english: 'English',
    hebrew: 'עברית',
  },
  navbar: {
    home: 'ראשי',
    nationalProblem: 'פוסט טראומה בעיה לאומית',
    natureTherapy: 'תרפיה בטבע',
    chenBarin: 'מנהל - חן ברין',
    openInvitation: 'הזמנה פתוחה',
    gallery: 'גלריה',
    thanks: 'תודות',
    helpUs: 'בואו לעזור   ',
    contact: 'צור קשר',
  },
  footer: {
    farmName: 'עֹז וְתַעֲצֻמוֹת',
    tagline: 'חווה חקלאית לשיקום הלומי קרב',
    visitWarning: 'תיאום מועדי הגעה לצורך ויסות כמויות המבקרים, יש לשלוח הודעת וואטסאפ מקדימה לטלפון 052-4434350 אין להגיע לחווה ללא תיאום מוקדם.',
    farmManager: 'מנהל החווה - חן ברין',
    association: 'העמותה',
    farm: 'חוות עז ותעצומות',
    wazeDirections: 'הגעה בווייז "חוות עז ותעצומות"',
    facebook: 'עז ותעצומות בפייסבוק',
    allRightsReserved: 'כל הזכויות שמורות.'
  },
  home: {
    hero: {
      title: "עֹז וְתַעֲצֻמוֹת - חווה חקלאית לשיקום הלומי קרב-ע\"ר",
      quote: "יִקְרָאֵנִי וְאֶעֱנֵהוּ,עִמּוֹ אָנֹכִי בְצָרָה אֲחַלְּצֵהוּ וַאֲכַבְּדֵהוּ. תהלים צא 15",
      supportText: "כולנו עמכם גיבורי התהילה"
    },
    cards: {
      rehabilitation: {
        title: "שיקום בטבע",
        content: "כאן, בטבע ובחקלאות, הלומי הקרב לוקחים אחריות על תהליך ההחלמה של עצמם. הם עובדים עם האדמה, מגדלים עצים וצמחים, מטפלים בבעלי חיים."
      },
      initiative: {
        title: "יוזמה ייחודית",
        content: "החווה היא לא רק מקום של עבודה, אלא גם של תרפיה, שיחות, שירה, מוזיקה וסרטים – הכל באוויר הפתוח, הכל עם הלב."
      },
      community: {
        title: "קהילה תומכת",
        content: "אנו יוצרים קהילה תומכת שמבינה לעומק את הכאב – וגם את התקווה. החווה מזמינה אתכם לקחת חלק – בהתנדבות, בייעוץ, בתרומות או בכל דרך אחרת."
      }
    },
    ptsd: {
      title: "הפרעת דְּחָק פוסט־טראומטית Post-Traumatic Stress Disorder; PTSD",
      content: "פוסט־טראומה, היא הפרעה נפשית מתחום ההפרעות הקשורות לטראומה וגורמי דחק. פוסט־טראומה עלולה להיווצר בעקבות חשיפה לאירוע טראומטי הכרוך בסיכון ממשי לאדם או לסובבים אותו. לדוגמה: מלחמה, תאונת דרכים, אונס, פיגוע טרור, קרב, שוד, תקיפה מינית, אלימות, שרפה וכדומה. טראומה משנית היא ההשפעה הנפשית שנגרמת למטפלים, הנמצאים בקשר רגשי קרוב עם שורדי טראומות. אוכלוסיות בסיכון הם עובדים סוציאליים, פסיכולוגים, שוטרים, מגישי עזרה ראשונה."
    },
    about: {
      title: "על המקום",
      content1: "בחווה בגליל, מול נוף עוצר נשימה של הכנרת, הגולן ועמק הירדן, נולדה יוזמה ייחודית ומרגשת: מקום שיקום, צמיחה ותקווה להלומי קרב – חיילים שהתמודדו עם קרבות קשים ושילמו מחיר נפשי כבד. הם חזרו הביתה, אבל עם פצעים שקופים – צלקות שאינן נראות, אך כואבות לא פחות.",
      content2: "כאן, בטבע ובחקלאות, הלומי הקרב לוקחים אחריות על תהליך ההחלמה של עצמם. הם עובדים עם האדמה, מגדלים עצים וצמחים, מטפלים בבעלי חיים, ויוצרים קהילה תומכת שמבינה לעומק את הכאב – וגם את התקווה."
    },
    mission: {
      title: "המשימה שלנו",
      content1: "חן ברין, מורה דרך ומדריך שטח, יחד עם הסופר והחוקר שלמה ולדמן, מובילים את הפרויקט מתוך שליחות עמוקה ותחושת אחריות. החווה היא לא רק מקום של עבודה, אלא גם של תרפיה, שיחות, שירה, מוזיקה וסרטים – הכל באוויר הפתוח, הכל עם הלב.",
      content2: "החווה מזמינה אתכם לקחת חלק – בהתנדבות, בייעוץ, בתרומות או בכל דרך אחרת. לא רק בכסף – אלא בלב, בידיים ובעשייה. יחד אנחנו יכולים לעזור להם באמת."
    },
    ptg: {
      title: "צמיחה מפוסט טראומה (PTG)",
      content: "היא תהליך בו אנשים חווים שינויים פסיכולוגיים חיוביים בעקבות התמודדות עם אירועים טראומטיים. היא מובילה אותו לשינויים משמעותיים בתפיסת עצמו, יחסיו עם אחרים ובתפיסת עולמו. אחד התחומים המרכזיים של צמיחה הוא התחזקות אישית – תחושת כוח פנימי ויכולת להתמודד טוב יותר עם אתגרים עתידיים. אנשים רבים מדווחים על שיפור במערכות היחסים שלהם, חיבור רגשי עמוק יותר ותחושת חמלה מוגברת כלפי אחרים. לעיתים קרובות עולה תחושת הערכה מחודשת לחיים, הכרת תודה על הדברים הקטנים והיכולת ליהנות מהרגע. הצמיחה מקבלת ביטוי גם בשינויים רוחניים – חיפוש משמעות, חיזוק האמונה או שינוי מערכת הערכים האישית. מחקרים מראים כי בין 30% ל-70% מהשורדים מדווחים על שינויים חיוביים כלשהם. גורמים התורמים לצמיחה כוללים שהייה בסביבה תומכת, בילוי בטבע הפתוח, מוסיקה שקטה, פגישות תמיכה קבוצתיות, עיבוד רגשי וקוגניטיבי של האירוע, תמיכה חברתית, אופטימיות ואסטרטגיות התמודדות חיוביות. צמיחה מפוסט טראומה מדגישה את היכולת האנושית למצוא משמעות, תקווה והתפתחות אישית גם מתוך משבר וסבל עמוק."
    },
    join: {
      title: "הצטרפו אלינו",
      subtitle1: "הלוחמים לא נשארים לבד",
      quote: "עִמּוֹ אָנֹכִי בְצָרָה אֲחַלְּצֵהוּ וַאֲכַבְּדֵהוּ. תהלים צא 15",
      subtitle2: "חווה טיפולית להלומי קרב – צמיחה אמיתית מהלב ומהאדמה",
      content: "במקום אחד קסום בגליל, מול נוף עוצר נשימה, חיילים שנפגעו נפשית בקרב מוצאים תקווה. כאן הם עובדים בטבע, מגדלים, בונים, ומרפאים את עצמם – יחד. הצטרפו אלינו ביוזמה ישראלית מרגשת שמחזירה אור לנשמות שנכוו."
    }
  },
  nationalProblem: {
    pageHeader: {
      title: "פוסט טראומה בעיה לאומית",
      subtitle: "לאחר שנים של מלחמות והתמודדויות, פוסט טראומה הפכה לאתגר לאומי משמעותי"
    },
    intro: {
      paragraph1: "בעקבות המלחמה, מערכת בריאות הנפש בישראל נמצאת בעומס חסר תקדים. ההערכות מצביעות על כך ש-7% - 10% ממי שנחשפו לאירועי הקשים עשויים לפתח פוסט-טראומה. מאות אלפי ישראלים שחוו את אירועי המלחמה נמצאים בסיכון מוגבר לפגיעה נפשית.",
      paragraph2: "אנשי מקצוע מעריכים כי כ-9,000 פניות שונות נרשמו במוקדי הסיוע הנפשי מאז פרוץ המלחמה. המערכת בריאות הנפש שהייתה במשבר עוד לפני המלחמה, כעת קורסת תחת העומס הנוסף. הצורך במתן מענה מיידי וארוך טווח הפך לאתגר לאומי מהגדולים שידענו."
    },
    statistics: {
      title: "נתונים וסטטיסטיקות",
      stat1: {
        number: "9,000+",
        text: "פניות למוקדי סיוע נפשי מאז תחילת המלחמה"
      },
      stat2: {
        number: "250,000",
        text: " איש צפויים לסבול מפוסט טראומה"
      },
      stat3: {
        number: "80%",
        text: "שיפור בעקבות טיפול בסביבה טבעית"
      }
    },
    media: {
      title: "כתבה מהתקשורת",
      videoDescription: "כתבה: מתוך 5,000 - החיילים שהמלחמה פצעה את נפשם",
      source: "מקור: כאן חדשות"
    },
    profOz: {
      title: "פרופ עוז גוטרמן: צמיחה מ PTSD",
      videoDescription: "סרטון: פוסט-טראומה ודרכי התמודדות"
    },
    headlines: {
      title: "כותרות מהעיתונות",
      clickToEnlarge: "לחץ להגדלת התמונה",
      published: "פורסם"
    },
    whatCanWeDo: {
      title: "מה אנחנו יכולים לעשות?",
      paragraph1: "מדינת ישראל נמצאת בטראומה לאומית, כדי לא להגיע אל עשרות אלפי האזרחים והחיילים כחולים נפשית מפוסט טראומה לכל חייהם, יש חלון זמן קטן אחרי האירוע, לעזור ולסייע, והאמצעים להפיכת כרונית, לילות של סיוטים, התקפי זעם, המרכזיות, סבל נורא, כאב נפשי מדמם, כדי שהחיים משפחות.",
      paragraph2: "ביכולותינו לנצל את האמצעים והכלים הטבעיים המוכחים מחקרית כדי לסייע בהתמודדות ובמניעת החמרת הטראומה בקרב נפגעי ההלם. שהייה בטבע, טיפול בחיות, חקלאות טיפולית ותרפיה בטבע הם דרכים שהוכחו מחקרית כבעלות השפעה משמעותית על החלמה מפוסט-טראומה."
    },
    newsItems: [
      {
        title: "המדינה מדממת - השרים והפקידות בהלם קרב",
        date: "19/11/2023",
        source: "וואלה"
      },
      {
        title: "בעקבות המלחמה: עלייה חדה במספר נפגעי פוסט-טראומה",
        date: "15/11/2023",
        source: "ידיעות אחרונות"
      },
      {
        title: "המלחמה תפסה את מערך בריאות הנפש במשבר",
        date: "13/10/2023",
        source: "הארץ"
      },
      {
        title: "אפקט המלחמה: זינוק בשיעור הפונים לתמיכה נפשית",
        date: "22/10/2023",
        source: "ישראל היום"
      },
      {
        title: '"ישראל במשבר בריאות הנפש החמור בתולדותיה"',
        date: "31/10/2023",
        source: "ישראל היום"
      },
      {
        title: "מדינה בטראומה פוגשת מערכת בריאות נפש חולה",
        date: "26/10/2023",
        source: "כלכליסט"
      }
    ]
  },
  natureTherapy: {
    hero: {
      title: "תרפיה בטבע",
      subtitle: "השהייה בטבע כפתרון לפוסט טראומה"
    },
    intro: {
      title: "כוחו המרפא של הטבע",
      paragraph1: "אנו מאמינים שהחיבור לאדמה ולטבע הוא חלק מהותי מתהליך הריפוי והשיקום. השילוב בין פעילות גופנית, חשיפה למרחב הירוק ותמיכה קבוצתית נמצא כמשמעותי במיוחד עבור אוכלוסיות פגועות טראומה.",
      paragraph2: "מחקרים עדכניים מראים כי שהייה בטבע מסייעת להפחתת תסמיני פוסט טראומה (PTSD), חרדה ודיכאון, ותורמת לחיזוק החוסן הנפשי והפיזיולוגי (<a href='https://www.nature.com/articles/s41598-023-49702-0' target='_blank' rel='noopener noreferrer' class='text-farm-green hover:text-farm-green-light underline font-semibold'>Nature magazine</a>).",
      paragraph3: "המחקרים מראים כי שהייה סדירה בטבע משפרת את מצב הרוח, מפחיתה לחץ נפשי, דיכאון וחרדה, ואף מחזקת את המערכת החיסונית. נמצא שיפור משמעותי במדדים אלו אצל אנשים שמבלים לפחות שעתיים בשבוע בטבע (<a href='https://www.camoni.co.il/%D7%9B%D7%9A-%D7%9E%D7%A9%D7%A4%D7%99%D7%A2-%D7%98%D7%91%D7%A2-%D7%99%D7%A8%D7%95%D7%A7-%D7%A2%D7%9C-%D7%94%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%A9%D7%9C%D7%A0%D7%95' target='_blank' rel='noopener noreferrer' class='text-farm-green hover:text-farm-green-light underline font-semibold'>לקריאת המחקר</a>)."
    },
    research: {
      title: "השהייה בטבע כפתרון לפוסט טראומה",
      card1: {
        title: "הפחתת תסמיני PTSD באמצעות פעילות בטבע",
        content: "מחקרים מראים כי פעילויות בטבע כמו הליכה, קמפינג וטיולים הרריים מסייעות בהפחתת תסמיני פוסט טראומה (PTSD), במיוחד בקרב יוצאי צבא. מחקר השווה בין קבוצות הליכה בטבע לעומת סביבה עירונית, ומצא ירידה משמעותית יותר בתסמיני PTSD אצל המשתתפים ששהו בטבע.  )"
      },
      card2: {
        title: "שילוב טיפול קבוצתי והרפתקני בטבע",
        content: "מאמר מקרה ישראלי מציג תוכנית טיפול קבוצתית-הרפתקנית לוותיקי צה\"ל עם PTSD כרוני, בה השהייה בטבע שימשה קטליזטור לשינוי. המשתתפים פיתחו מיומנויות התמודדות חדשות, חיזקו תחושת שייכות והפחיתו תחושות בושה וסטיגמה. "
      },
      card3: {
        title: "אקותרפיה והחלמה רגשית",
        content: "הגישה של \"אקותרפיה\" (Ecotherapy) זוכה להכרה גוברת כמודל טיפולי יעיל לטיפול בטראומה. שהייה בטבע, במיוחד במרחבים פראיים, מסייעת לעיבוד רגשי, הפחתת סטרס, חיזוק חוסן נפשי והגברת תחושת החיבור לעצמי ולעולם. "
      },
      card4: {
        title: "הפחתת לחץ, דיכאון וחרדה",
        content: "חשיפה סדירה לטבע משפרת את מצב הרוח, מפחיתה לחץ נפשי, דיכאון וחרדה, ואף מחזקת את המערכת החיסונית. מחקרים מצביעים על שיפור של עשרות אחוזים במדדים אלו אצל אנשים שמבלים לפחות שעתיים בשבוע בטבע. "
      },
      card5: {
        title: "חיזוק חוסן נפשי ופיזיולוגי",
        content: "שהייה בטבע תורמת לבניית חוסן פסיכו-פיזיולוגי, מגבירה תחושת חיוניות ואנרגיה, ומסייעת להפחתת מחשבות שליליות. לכן, היא מומלצת ככלי טיפולי לאנשים החווים מתח גבוה או קשיים רגשיים. "
      },
      card6: {
        title: "קשר ישיר בין שהייה בחוץ לירידה בתסמיני PTSD",
        content: "מחקר בקרב יוצאי צבא מצא כי ככל ששהו יותר זמן מחוץ לבית, כך פחתו תסמיני הפוסט טראומה. תיאוריית הפחתת הלחץ מסבירה כי המוח האנושי מעבד גירויים טבעיים בקלות רבה יותר, ולכן הטבע מסייע בשיקום הקוגניטיבי והרגשי. "
      }
    },
    methods: {
      title: "שיטות הטיפול שלנו",
      method1: {
        title: "הליכה וקמפינג בטבע",
        description: "מחקרים מראים כי פעילויות בטבע כמו הליכה, קמפינג וטיולים הרריים מסייעות בהפחתת תסמיני פוסט טראומה, במיוחד בקרב יוצאי צבא."
      },
      method2: {
        title: "גינון טיפולי",
        description: "טיפול באמצעות עבודה עם צמחים וטיפוח הגינה, המסייע בהפחתת מתח והעלאת תחושת המסוגלות."
      },
      method3: {
        title: "מדיטציה בטבע",
        description: "שילוב של תרגילי מדיטציה ומודעות עם השהייה בטבע ובסביבה החקלאית."
      },
      method4: {
        title: "טיפול בבעלי חיים",
        description: "אינטראקציה מרפאת עם בעלי חיים בחווה, המסייעת בבניית אמון וחיבור רגשי."
      },
      method5: {
        title: "טיפול קבוצתי-הרפתקני",
        description: "פעילויות קבוצתיות בטבע המחזקות תחושת שייכות ומפחיתות תחושות בושה וסטיגמה, כפי שהוכח במחקר ישראלי עם ותיקי צה״ל."
      },
      method6: {
        title: "אקותרפיה",
        description: "גישה טיפולית המשלבת שהייה במרחבים טבעיים לעיבוד רגשי והפחתת סטרס, הזוכה להכרה גוברת כמודל טיפולי יעיל לטראומה."
      },
      researchLink: "קישור למחקר"
    },
    cta: {
      title: "הצטרפו אלינו לתוכנית הריפוי בטבע",
      text: "השהייה בטבע, כחלק מפעילות טיפולית או חווייתית, מהווה כלי משמעותי בהפחתת תסמיני פוסט טראומה, חיזוק חוסן נפשי, ושיפור הרווחה הכללית – הן במסגרת פרטנית והן קבוצתית."
    }
  },
  chenBarin: {
    pageHeader: {
      title: "מנהל החווה - חן ברין",
      subtitle: "מוביל את החווה בתשוקה ובמסירות"
    },
    articleTitle: "למען הנפש: חן ברין מכפר יחזקאל הקים חווה חקלאית מבודדת להלומי קרב",
    publishedIn: "פורסם ב mynet העמק, 06/02/22 לחץ כאן למעבר לכתבה",
    subtitle: "עבור ברין מדובר בהגשמת חלום. החווה הוקמה במקום עם נוף מדהים לכנרת ולגולן, לא הרחק מהמושבה יבנאל. \"אנשים שסובלים מפוסט טראומה צריכים מרחב, טבע, שקט ונוף\"",
    sections: {
      intro: "במקום מבודד על מצוק המשקיף אל נוף עוצר נשימה של הכנרת, הגולן ועמק הירדן מוקמת בימים אלו חווה חקלאית ייחודית להלומי קרב.",
      about: "את החווה הנקראת 'עוז ותעצומות' הקים חן ברין מכפר יחזקאל, שבשנה האחרונה בונה ומפתח את החווה במו ידיו במטרה אחת - לספק להלומי הקרב שיבואו מקום שבו יקבלו תרפיה לנפש באמצעות שהייה בשטח הפתוח, עבודה בחקלאות עם צמחים ובעלי חיים ושיח קבוצתי. \"זה מקום שקרוב ללבי\", הוא אומר השבוע בהתרגשות.",
      dreamComeTrue: {
        title: "התגשמות חלום",
        content1: "ברין (52), נשוי ואב לשלושה, נולד וגדל בעפולה וכיום תושב כפר יחזקאל. הוא בעל חברה לטיולי ג'יפים, סנפלינג וספורט אתגרי. בצבא שירת כלוחם בגדוד 13 בגולני בסדיר ואחר כך במילואים. בשנת 1994 היתה לו היתקלות עם מחבלים, אירוע שהשפיע עליו עד היום. \"יצאתי מהאירוע הזה בנס וקיבלתי חיים חדשים. היה חן אחד לפני וחן אחד אחרי\", הוא מספר.",
        content2: "לאחר שהשתחרר, התחתן והקים את ביתו אך תמיד היה לו חלום שאותו הוא מגדיר כפרויקט חייו - להקים חווה לטובת החיילים הלומי הקרב שחיים שנים ארוכות בצל הקרב שפגע בנפשם וסוחבים עמם את הפצע הפתוח.",
        content3: "לאחרונה קנה את השטח החקלאי עליו ממוקמת החווה, חוות בודדים הרחק ממקום יישוב הנמצאת על מצוק בין המושבה יבנאל למושבת מנחמיה בשלוחה היורדת מרמת סירין לכיוון עמק הירדן ושמורת הטבע נחל יבנאל. החווה נמצאת במיקום שצופה על מרחב עמק הירדן, הכנרת, רכס הפוריות ורמת הגולן וכן משולש הגבולות ישראל, ירדן וסוריה. ביום עם ראות טובה החרמון נשקף מהחווה במלוא הדרו.",
        content4: "השטח החקלאי מתפרש על פני 50 דונם, מתוכו הוא הקצה חמישה דונמים להקמת החווה ובינואר שעבר התחיל בעבודה, הקים חממות, פרש צנרת השקיה, שתל עצי דקל ובנה אורווה קטנה של חמורים מבויתים."
      },
      location: "\"אני מכיר את המקום מטיולים שעשיתי בשנים עברו וכשהגעתי לפה ידעתי שזו בדיוק הנקודה עליה אני רוצה לבנות את החווה\", מספר ברין, \"המקום הזה היה אמור להיות בהתחלה בית מלון עם רכבל שיורד עד לירדנית בשביל הצליינים. זה כמובן לא יצא לפועל. ראש המועצה חיבר אותי עם אנשים טובים ומיוחדים וכך הגעתי למקום והצלחתי לבנות בו את החלום שלי. ברגע שהיתה לי ההזדמנות להגיע לכאן ידעתי שקודם כל אני עושה את זה בשביל הנפש שלי ומתוך זה צמח הרעיון להקים את החווה להלומי קרב שהיא מיועדת לכלל האוכלוסייה, להלומי קרב בכלל ולנכי צה\"ל בפרט. אני רוצה שיידעו שיש מקום כזה. יש פה את הטבע והשקט שזה מה שאנשים הלומי קרב צריכים\".",
      whenSpeaking: "כשברין מדבר על החווה ההתרגשות ניכרת בו היטב. \"החלום שלי היה תמיד להגיע לחווה כזו\", הוא אומר, \"אנשים הלומי קרב שסובלים מפוסט טראומה צריכים את המרחב, הטבע, השקט והנוף. כשאתה מגיע לפה אתה במקום אחר. פה הזמן עוצר מלכת. אין לך את המרדף אחרי טרדות היומיום. כשאנשים מגיעים לפה הם פשוט מתמזגים עם השקט והטבע. זה נותן לך תעצומות נפש שאתה לא במרדף. כשעליתי לכאן לפני שנה לא היה פה כלום. בחורף מאוד קשה לעבוד. לפני שלושה ימים האוהל הגדול שבניתי התפרק לגורמים מהרוחות. בקיץ מאוד חם, אנחנו בעמק הירדן. יש רק כמה חודשים בשנה שאפשר להיות פה\".",
      enjoyingQuiet: {
        title: "ליהנות מהשקט",
        content1: "את החווה בנה ברין בעצמו ואת כל הפרויקט הוא מקים ללא מטרות רווח. לפני חצי שנה הצטרפו לפרויקט אורנה מרקברייט ונורית רון שפתחו דף פייסבוק לחווה והקימו דף נחיתה הקורא לציבור לתרום ככל יכולתו למען החווה. \"אורנה ונורית באות מהמרכז וישנות פה במבנה, מסדרות ומקשטות ודואגות. אנשים פונים אלינו ותורמים גדרות וצבע. עכשיו התקשר אליי קבלן לעבודות שיפוץ שרכש עגלה חדשה ושמע שאנחנו צריכים ציוד ותרם את העגלה הישנה שלו. ממישהו מחברת נטפים בערבה קיבלתי ציוד לחממות\".",
        content2: "החווה כוללת היום אוהל אירוח מרכזי, אוהל נוסף שמוקם בימים אלו ומחסן גדול לציוד. נוסף על כך ברין בונה שירותים ומקלחות אקולוגיים. בחווה ישנה גם חוות חמורים קטנה. \"נתתי את חוות החמורים לבחור הלום קרב שהכרתי תוך כדי עשייה בחווה. הוא נמצא עם החמורים, דואג ומטפל בהם. רק לפני שבוע הוא אמר לי שהחמורים פשוט הצילו אותו, זה לנפש. זה סוג של תרפיה. אנשים באים, מתעסקים איתם ומאכילים אותם\".",
        content3: "החלום הגדול של ברין הוא שיגיעו לחווה כמה שיותר הלומי קרב שייהנו מהשקט ומהטבע. \"החלום שלי שיגיעו לפה הלומי קרב, נכי צה\"ל או כל מי שזקוק לכך ומרגיש שהמקום הזה עושה לו טוב. הם יבואו, יעבדו בחממות ויישנו. יש פה מסלולי טיולים קרובים, החווה צמודה לשביל ישראל ואפשר להוציא מכאן טיולי ג'יפים, ניתן גם לערוך במקום סדנאות שונות והכל ללא מטרות רווח. אבל החווה צריכה גם לתחזק את עצמה אז אני פתוח לרעיונות לערוך אירועים, סדנאות וחוגים במקום וכל הכסף שייכנס מהפעילויות האלה יוקצה אך ורק לטובת החווה\"."
      },
      alreadyArriving: {
        title: "כבר מגיעים לפה הלומי קרב?",
        content: "\"כן, יש לי פה את החבר שמטפל בחמורים ואני מקבל כל הזמן טלפונים. אני מקבל תגובות מאנשים שבאים ורואים את החווה ואת החזון והחלום שלי שקורם עור וגידים. זה ממש מרגש. התחברתי עם עמותה שרצתה לבוא לפה לסדנה. החלום שלי שהלומי הקרב יבואו הנה, הארץ שלנו מדהימה ואין שום סיבה שקבוצות של לוחמים שחוו אירוע טראומטי כזה או אחר שייצאו מעבר לגבולות המדינה\"."
      },
      awareness: {
        title: "מי שבא לפה מודע לזה שהוא בא למקום שהוא בניתוק מוחלט?",
        content: "\"זו בדיוק הכוונה. הניתוק והבדידות הם לא זרים לנו. השקט והשלווה הם דבר מאוד חשוב וגם מעגלי השיח של הלוחמים. רק מי שחווה ויודע מה זה לעבור את הדבר הזה יכול להבין. הלוקיישן של החווה הוא בדיוק מה שאנשים צריכים\"."
      },
      expectingChange: {
        title: "מצפה לשינוי",
        content1: "הלם קרב, הידוע גם כ'תגובת קרב', הוא תגובה אישית לפוסט טראומה (PTSD- הפרעת דחק פוסט-טראומטית) של חייל לאירוע שהתרחש בזמן פעילות מבצעית-מלחמתית. כ-10–15 אחוזים מכלל הנפגעים במלחמה הם נפגעי הלם קרב. בישראל חיים כ-4,800 נפגעים כאלה. לאחרונה בעקבות המקרה של איציק סעידיאן, לוחם גולני הלום קרב שהצית את עצמו מול אגף השיקום במשרד הביטחון, גברה המודעות בציבור למצוקתם של הלומי הקרב.",
        content2: "למה אנשים שסובלים מפוסט טראומה הגיעו למצב שהם מתחננים ולא מאמינים להם?",
        content3: "\"יש הרבה בירוקרטיה במשרד הביטחון, ברגע שחייל נפגע מפוסט טראומה הוא עובר מהצבא לאגף השיקום ומאוד קשה לקבל סיוע. כשאתה בא עיוור או עם קטיעה אז רואים את הפציעה ויש לזה מחירון, אבל כשאתה בא עם פגיעה נפשית שקופה ויושב מול אנשים וצריך להוכיח את זה, לא תמיד מאמינים לך גם עם כל המסמכים והתחקירים. רק עכשיו בעקבות המקרה של איציק סעידיאן פתאום מתחילים להקל יותר, אבל הוועדות מאוד מתישות ומשפילות. הרבה אנשים מעדיפים פשוט לוותר על הסיוע\".",
        content4: "אתה כועס על המדינה ביחס שלה לפוסט טראומה?",
        content5: "\"אני לא כועס אבל יש הרבה מקום לשפר. חבל שאיציק סעידיאן היקר שילם מחיר שכמעט עלה לו בחייו. כשאנשים מגיעים עם פוסט טראומה צריך לתמוך בהם ולעזור להם. יש המון חבר'ה שהלכו לקרב וחזרו אחרים לחלוטין. אני מצפה שהשינוי יבוא מהר, שאנשים לא יצטרכו לעבור את מה שעברו החבר'ה מיום כיפור\".",
        content6: "ואיך החברה בישראל מתייחסת לדעתך לנפגעי פוסט טראומה?",
        content7: "\"היום יש מודעות יותר גדולה להלומי קרב. במרכזי השיקום ובתי הלוחם החבר'ה מקבלים טיפול כמו שצריך, אבל אנשים עדיין לא מבינים עד הסוף את הצרכים, את זה שאתה פתאום לא מגיע לעבודה. אצל הלומי קרב הלילות הפוכים, לפעמים אתה לא מתעורר בזמן. אתה יכול להיות שבוע במיטבך ופתאום רעש או כל דבר יכול להחזיר אותך לאירוע. אני יודע מחברים שאנשים יותר מודעים היום לתגובות קרב ולמה שקורה ומנסים לעזור\"."
      }
    }
  },
  openInvitation: {
    pageHeader: {
      title: "הזמנה פתוחה",
      subtitle: "האירוח ללא תמורה"
    },
    clickToEnlarge: "לחץ להגדלת התמונה",
    imageAlt: "הזמנה פתוחה",
    videoNotSupported: "הדפדפן שלך אינו תומך בתגית וידאו."
  },
  gallery: {
    pageHeader: {
      title: "גלריה",
      subtitle: "תמונות ווידאו מפעילות החווה"
    },
    tabs: {
      images: "תמונות",
      videos: "וידאו"
    },
    clickToEnlarge: "לחץ להגדלת התמונה",
    specialEvents: {
      title: "אירועים מיוחדים בחווה",
      content: "אנו עורכים אירועים מיוחדים לפי הזמנה של יחידות צהל, עיבוד חוויות לחימה, משפחות שכול, אירועי מוסיקה, יוגה בטבע, ועוד"
    },
    next: "הבא",
    previous: "קודם"
  },
  thanks: {
    pageHeader: {
      title: "תודות",
      subtitle: "תודות  מיוחדות שהחווה קיבלה  (רשימה חלקית)"
    },
    support: {
      title: "תודה על התמיכה",
      content: "אנו מודים לכל התומכים, המתנדבים והשותפים שלנו שמאפשרים לנו להמשיך בפעילות החשובה של החווה."
    }
  },
  help: {
    title: "בואו לעזור - לא צריך כסף!",
    intro: {
      paragraph1: "החווה מזמינה אתכם לקחת חלק – בהתנדבות, בייעוץ, בתרומות או בכל דרך אחרת. לא רק בכסף – אלא בלב, בידיים ובעשייה.",
      paragraph2: "יחד אנחנו יכולים לעזור להם באמת.",
      quote: "רוצים לעזור באמת? בואו להיות חלק. לא רק בכסף – בידיים, בזמן, בלב."
    },
    donationCallout: "אנחנו מזמינים אתכם לתרום – חממות, ציוד חקלאי, ציוד השקיה, שתילים, פרחים, סככות, גנרטור, ריהוט גן, דשא סינטטי, אמנות ופיסול סביבתי, שתילי תבלין, מצללות, ספסלי קקל, כסאות , שולחנות, – כל תרומה מחזקת את הלוחמים שלנו",
    volunteering: {
      title: "דרכים להתנדבות",
      items: [
        "הגעה לימי עבודה מרוכזים בחווה",
        "סיוע בטיפול בבעלי חיים",
        "עזרה בעבודות חקלאיות עונתיות",
        "הדרכה מקצועית בתחומים שונים",
        "שיתוף בכישורים מיוחדים (מוזיקה, אמנות, בישול)",
        "עזרה לוגיסטית בארגון אירועים"
      ]
    },
    expertise: {
      title: "תרומה בידע ומומחיות",
      items: [
        "ייעוץ מקצועי בתחומי החקלאות",
        "תמיכה מקצועית בתחומי בריאות הנפש",
        "סיוע בשיווק ויחסי ציבור",
        "עזרה בפיתוח אתר האינטרנט",
        "ייעוץ משפטי או עסקי",
        "קשרים עם גורמים ממשלתיים או ארגונים"
      ]
    },
    contactCta: {
      title: "צרו קשר להתנדבות",
      content: "אנו מזמינים אתכם להצטרף אלינו ביוזמה ישראלית מרגשת שמחזירה אור לנשמות שנכוו. כל עזרה, קטנה כגדולה, יכולה לעשות שינוי אמיתי.",
      button: "צרו קשר"
    }
  },
  contact: {
    pageHeader: {
      title: "צור קשר",
      subtitle: "אנחנו כאן לענות על כל שאלה"
    },
    contactDetails: "פרטי התקשרות",
    address: {
      label: "כתובת",
      value: "Oz Vetaazumot Farm"
    },
    phone: {
      label: "טלפון",
      value: "+972 52-443-4350"
    },
    association: {
      label: "העמותה",
      value: "+972 50-523-2631"
    },
    email: {
      label: "דוא\"ל",
      value: "oz.nefesh@gmail.com"
    },
    map: "מפה",
    leaveDetails: "השאירו פרטים",
    form: {
      fullName: "שם מלא",
      email: "דוא\"ל",
      phone: "טלפון",
      subject: "נושא",
      message: "הודעה",
      submit: "שלח הודעה",
      submitting: "שולח...",
      successTitle: "תודה על פנייתך!",
      successMessage: "ההודעה נשלחה בהצלחה. ניצור איתך קשר בהקדם."
    }
  },
  donate: {
    pageHeader: {
      title: "תרומות",
      subtitle: "תמכו במטרה החשובה שלנו"
    }
  },
  organization: {
    pageHeader: {
      title: "הארגון",
      subtitle: "על הארגון שלנו"
    }
  },
  notFound: {
    title: "העמוד לא נמצא",
    message: "העמוד שאתם מחפשים לא קיים.",
    backHome: "חזרה לעמוד הראשי"
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      he: {
        translation: heTranslations
      }
    },
    lng: 'en', // Default language is English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n; 