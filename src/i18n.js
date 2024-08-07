// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        messageAlert: {
          wait: "wait your email is processed",
          success: "successfully...",
        },
        header: {
          home: "home",
          about: "about us",
          medicalTests: "medical tests",
          offers: "offers",
          homeVisit: "home visit",
          language: "العربيـة",
        },
        home: {
          hero: {
            special: "Because you are one of the family",
            main: "Get a membership now and enjoy a 50% discount on all tests",
            description:
              "Our laboratories are considered one of the leading medical laboratories in the field of medical analysis, and we always aim to provide a high-level and high-quality medical service in Egypt.",
            off: "OFF",
            LE: "L.E",
            test: "tests",
            parameters: "parameters",
          },
          examinations: {
            mainTitle: "Qlab laboratories services",
            subTitle1: "Rest assured that your",
            subTitle2: "health is safe at Qlab",
            description:
              "Comprehensive and important examinations for all ages starting from ",
            price: "300 pounds",
            examinationsCards: {
              priceTitle: "price",
              includesTitle: "includes",
              more: "more info",
              examination1: {
                type: "Test",
                title: "CBC blood count",
                oldPrice: "320 L.E",
                newPrice: "160 L.E",
                description:
                  "It is a test to measure the number and type of blood cells in the body. It can help diagnose and monitor many medical conditions",
                testNumber: 16,
                testType: "parameter",
              },
              examination2: {
                type: "Tests",
                title: "Liver function",
                oldPrice: "340 L.E",
                newPrice: "170 L.E",
                description:
                  "It is a group of blood tests that measure the levels of some enzymes, proteins, and bilirubin in the blood",
                testNumber: 2,
                testType: "parameter",
              },
              examination3: {
                type: "Tests",
                title: "Kidney function",
                oldPrice: "340 L.E",
                newPrice: "170 L.E",
                description:
                  "It is a group of blood and urinary tests that measure the efficiency of the kidneys in filtering waste and toxins from the blood and regulating water, salts and hormones.",
                testNumber: 2,
                testType: "parameter",
              },
              examination4: {
                type: "Tests",
                title: "Profile Lipid",
                oldPrice: "699 L.E",
                newPrice: "360 L.E",
                description:
                  "It is a group of blood tests that measure the levels of fats and cholesterol in the blood, which affect the health of the heart and blood vessels.",
                testNumber: 6,
                testType: "parameter",
              },
              examination5: {
                type: "Test",
                title: "IRON analysis in the blood",
                oldPrice: "250 L.E",
                newPrice: "130 L.E",
                description:
                  "It is a test that measures the amount of iron available in the blood, which is used in the production of red blood cells and hemoglobin.",
                testNumber: 1,
                testType: "parameter",
              },
              examination6: {
                type: "Test",
                title: "Vitamin D",
                oldPrice: "999 L.E",
                newPrice: "600 L.E",
                description:
                  "It is a test that measures the level of 25-hydroxyvitamin D in the blood, which is an indicator of the amount of vitamin D available in the body.",
                testNumber: 1,
                testType: "parameter",
              },
              examination7: {
                type: "Test",
                title: "B12 Vitamin",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "It is a test that measures the level of this vitamin in the blood, which plays an important role in the health of the blood and nervous system.",
                testNumber: 1,
                testType: "parameter",
              },
              examination8: {
                type: "Test",
                title: "acid folic",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "It is a test that measures the level of folic acid (vitamin B9) in the blood, which is one of the important vitamins for the manufacture of red blood cells and DNA.",
                testNumber: 1,
                testType: "parameter",
              },
              examination9: {
                type: "Test",
                title: "Sugar",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "It is a test that measures the level of glucose, or blood sugar, and is used to diagnose and monitor diabetes.",
                testNumber: 1,
                testType: "parameter",
              },
              examination10: {
                type: "Test",
                title: "Cumulative sugar",
                oldPrice: "299 L.E",
                newPrice: "160 L.E",
                description:
                  "It is a test that measures the level of glycated hemoglobin in the blood, which is an indicator of the average blood sugar level during the previous three months.",
                testNumber: 1,
                testType: "parameter",
              },
              examination11: {
                type: "Tests",
                title: "Hepatitis C virus",
                oldPrice: "769 L.E",
                newPrice: "420 L.E",
                description:
                  "It is a group of blood tests that aim to detect the presence of infection with hepatitis C viruses.",
                testNumber: 2,
                testType: "parameter",
              },
              examination12: {
                type: "Test",
                title: "HIV results",
                oldPrice: "459 L.E",
                newPrice: "250 L.E",
                description:
                  "It is a test aimed at detecting the presence of infection with the human immunodeficiency virus (HIV), which causes acquired immunodeficiency syndrome",
                testNumber: 1,
                testType: "parameter",
              },
              examination13: {
                type: "Tests",
                title: "Thyroid hormone",
                oldPrice: "699 L.E",
                newPrice: "465 L.E",
                description:
                  "These are blood tests that measure the levels of hormones produced by the thyroid gland that affect metabolism, growth, and energy processes in the body.",
                testNumber: 3,
                testType: "parameter",
              },
              examination14: {
                type: "Tests FSH, LH",
                title: "and Prolactin hormones",
                oldPrice: "759 L.E",
                newPrice: "465 L.E",
                description:
                  "These are blood tests that measure hormone levels that affect fertility and sexual functions in men and women.",
                testNumber: 3,
                testType: "parameter",
              },
              examination15: {
                type: "Test",
                title: "Testosterone",
                oldPrice: "600 L.E",
                newPrice: "450 L.E",
                description:
                  "It is a test that measures the level of this hormone in the blood, which is the main male sex hormone that affects fertility, sexual functions, and general health for men and women.",
                testNumber: 2,
                testType: "parameter",
              },
              examination16: {
                type: "Tests tumor markers",
                title: "in the blood",
                oldPrice: "2499 L.E",
                newPrice: "1770 L.E",
                description:
                  "These are tests that measure the levels of certain chemicals that are linked to the presence or activity of cancerous tumors in the body.",
                testNumber: 7,
                testType: "parameter",
              },
              examination17: {
                type: "Tests",
                title: "Profile Coagulation",
                oldPrice: "559 L.E",
                newPrice: "260 L.E",
                description:
                  "It is a group of blood tests that measure the blood's ability to clot and control bleeding.",
                testNumber: 4,
                testType: "parameter",
              },
              examination18: {
                type: "Tests",
                title: "Profile Allergy blood",
                oldPrice: "2999 L.E",
                newPrice: "2000 L.E",
                description:
                  "These are tests that measure the levels of IGE and IGG antibodies produced by the immune system against specific substances that cause allergies.",
                testNumber: 1,
                testType: "parameter",
              },
            },
            link: "Would you like to explore all our healthcare and screening offers?",
            click: "click here",
          },
          statistics: {
            patinets: {
              number: "200K",
              description: "Patients diagnosed in Q-Lab Laboratory",
            },
            clientSatisifications: {
              number: "100%",
              description: "Client Satisfaction has been achieved by q-lab",
            },
            kindsOfTests: {
              number: "850+",
              description:
                "Kinds of tests are available here in the laboratory",
            },
            research: {
              number: "50K",
              description: "Amazing research has been conducted by us",
            },
          },
          advantages: {
            title:
              "We provide high-quality laboratory research in Qlab laboratories",
            description:
              "Our laboratories are considered among the leading medical laboratories in the field of medical analysis, and we always aim to provide world-class, high-quality medical service in Egypt... based on our commitment to participate in improving the public health of society.",
            topics: {
              topic1: "Speed and accuracy",
              topic2: "An integrated laboratory",
            },
          },
          packages: {
            mainTitle: "High-quality laboratory services",
            subTitle1: "Special offers packages",
            subTitle2: "in our laboratories",
            description:
              "Our mission is to provide the highest level of quality, accuracy and speed in performing medical analyzes through the latest technologies and devices approved by the FDA.",
            packagesCards: {
              priceTitle: "price",
              includesTitle: "includes",
              more: "more info",
              package1: {
                type: "package for adults",
                title: "Comprehensive screening test",
                oldPrice: "1575 L.E",
                newPrice: "1180 L.E",
                description: {
                  d1: "complete blood count - lipid profile",
                  d2: "liver function - kidney function",
                  d3: "random blood sugar - cumulative sugar",
                  d4: "hepatitis B and C viruses",
                },
                testNumber: 7,
                testType: "test",
              },
              package2: {
                type: "package for children",
                title: "Comprehensive examination",
                oldPrice: "1015 L.E",
                newPrice: "810 L.E",
                description: {
                  d1: "Blood picture - liver functions",
                  d2: "kidney functions - urine",
                  d3: "stool - iron",
                  d4: "iron stores",
                },
                testNumber: 7,
                testType: "test",
              },
              package3: {
                type: "package for diabetics",
                title: "Regular examination every 3 months",
                oldPrice: "260 L.E",
                newPrice: "200 L.E",
                description: {
                  d1: "Cumulative sugar",
                  d2: "fasting sugar",
                  d3: "breakfast sugar",
                  d4: "",
                },
                testNumber: 3,
                testType: "test",
              },
              package4: {
                type: "package for diabetics",
                title: "Periodic examination annually",
                oldPrice: "1135 L.E",
                newPrice: "910 L.E",
                description: {
                  d1: "Cumulative sugar - liver functions",
                  d2: "kidney functions",
                  d3: "microalbumin",
                  d4: "lipid profile",
                },
                testNumber: 5,
                testType: "test",
              },
              package5: {
                type: "package for men and women",
                title: "Hair loss package",
                oldPrice: "1435 L.E",
                newPrice: "1150 L.E",
                description: {
                  d1: "Blood picture - iron",
                  d2: "iron stores - zinc",
                  d3: "vitamin 12",
                  d4: "thyroid hormone (TSH)",
                },
                testNumber: 6,
                testType: "test",
              },
              package6: {
                type: "package for women",
                title: "Pregnancy follow-up journy",
                oldPrice: "380 L.E",
                newPrice: "320 L.E",
                description: {
                  d1: "Blood picture - random sugar",
                  d2: "blood type",
                  d3: "Rhesus factor",
                  d4: "complete urine",
                },
                testNumber: 5,
                testType: "test",
              },
              package7: {
                type: "package for men and women",
                title: "Pre-diet analysis",
                oldPrice: "1685 L.E",
                newPrice: "1340 L.E",
                description: {
                  d1: "Blood picture - insulin resistance",
                  d2: "vitamin D - thyroid gland",
                  d3: "lipid profile",
                  d4: "cumulative sugar",
                },
                testNumber: 6,
                testType: "test",
              },
              package8: {
                type: "package for all",
                title: "before fasting the month of Ramadan",
                oldPrice: "1155 L.E",
                newPrice: "920 L.E",
                description: {
                  d1: "Random sugar - liver functions",
                  d2: "kidney functions - lipid profile",
                  d3: "blood picture",
                  d4: "cumulative sugar (for diabetics only)",
                },
                testNumber: 6,
                testType: "test",
              },
              package9: {
                type: "package for men and women",
                title: "Basic food allergy testing",
                oldPrice: "2360 L.E",
                newPrice: "1900 L.E",
                description: {
                  d1: "Blood picture - liver function",
                  d2: "kidney function - lipid profile",
                  d3: "vitamin D - random sugar",
                  d4: "thyroid gland - testosterone",
                },
                testNumber: 8,
                testType: "test",
              },
              package10: {
                type: "package for women",
                title: "health package, age less than 50 years",
                oldPrice: "3240 L.E",
                newPrice: "2600 L.E",
                description: {
                  d1: "Blood picture - calcium",
                  d2: "vitamin D - sugar",
                  d3: "cholesterol - triglycerides",
                  d4: "iron - iron stores - TSH",
                },
                testNumber: 9,
                testType: "test",
              },
              package11: {
                type: "package for women",
                title: "health package, age over 50 years",
                oldPrice: "1575 L.E",
                newPrice: "1260 L.E",
                description: {
                  d1: "Blood picture - calcium - vitamin D",
                  d2: "sugar - cholesterol - triglycerides - CEA",
                  d3: " Liver functions - iron stores - iron - TSH",
                  d4: "kidney functions - CA15.3 - CA125 - CA19.9",
                },
                testNumber: 15,
                testType: "test",
              },
              package12: {
                type: "package",
                title: "Tumor analysis package for men",
                oldPrice: "1220 L.E",
                newPrice: "970 L.E",
                description: {
                  d1: "PSA",
                  d2: "AFP",
                  d3: "CEA",
                  d4: "CA19.9",
                },
                testNumber: 4,
                testType: "test",
              },
              package13: {
                type: "package for all",
                title: "Thyroid hormone monitoring",
                oldPrice: "465 L.E",
                newPrice: "390 L.E",
                description: { d1: "TSH", d2: "FT3", d3: "FT4", d4: "" },
                testNumber: 3,
                testType: "test",
              },

              package14: {
                type: "package for all",
                title: "Basic food allergy testing package",
                oldPrice: "6800 L.E",
                newPrice: "5600 L.E",
                description: {
                  d1: "Food Detective tests for 60 types of food",
                  d2: "",
                  d3: "",
                  d4: "",
                },
                testNumber: 1,
                testType: "test",
              },
              package15: {
                type: "package for all",
                title: "Comprehensive food allergy testing",
                oldPrice: "10400 L.E",
                newPrice: "9200 L.E",
                description: {
                  d1: "Food Print tests for 220 types of food",
                  d2: "",
                  d3: "",
                  d4: "",
                },
                testNumber: 1,
                testType: "test",
              },
            },
            link: "Would you like to explore all our healthcare and screening offers?",
            click: "click here",
          },
          testmonials: {
            title: "Clients Testmonials",
            description:
              "Qlab is the best diagnostic lab in the city. The reasons to be best in what we do is the process of maintain the laboratory with Qlab",
            opinions: {
              person1: {
                name: "Mohamed Ali",
                jobTitle: "Internal Medicine Doctor",
                rating: "Rating",
                opinionDescription:
                  "The laboratory services are excellent and accurate. I always receive results quickly, which helps me provide the best care for my patients. The staff is very professional and cooperative.",
              },
              person2: {
                name: "Sara Mahmoud",
                jobTitle: "Administrative Officer in a Company",
                rating: "Rating",
                opinionDescription:
                  "We rely on this laboratory for regular employee screenings. The service is excellent, and the results are always reliable and prompt. I feel at ease knowing our employees are in good hands.",
              },
              person3: {
                name: "Ahmed Abdelrahman",
                jobTitle: "Nurse",
                rating: "Rating",
                opinionDescription:
                  "I regularly deal with the laboratory and find the service unmatched. The results are accurate and quick, and the medical team is always cooperative and friendly. I highly recommend their services.",
              },
            },
          },
          awards: {
            subTitle: "Versatile Laboratory Service Provider",
            mainTitle: "We Have Got Prestigious Awards For Our Work",
            certificateLink: "certificate (PDF)",
            overWorld: {
              number: "20",
              title: "Awards From All Over the world",
            },
            description:
              "Our laboratory serves a diverse clientele, including individual patients seeking diagnostic tests, healthcare providers referring patients for specialized analyses, and corporate clients requiring comprehensive health screening for employees. We are committed to delivering accurate and reliable results to all our clients.",
          },
          book: {
            title: "now you can book your home visit with Qlab ",
            link: "book now",
            formData: {
              serviceName: "Service Name",
              Name: "Full Name",
              FName: "First Name",
              LName: "Last Name",
              phone: "phone",
              email: "email",
              time: "time",
            },
          },
        },
        about: {
          subTitle: "Why Choose QLab’s Proposal ?",
          mainTitle: "We Guarantee Quality for Timely Results",
          description:
            "The primary objective of the quality assurance program at Q-Labs is to deliver exceptional and timely results to our clients. We achieve this by continuously monitoring and enhancing our analysis performance through rigorous external and internal evaluation programs. Our commitment to quality ensures that every project meets the highest standards of accuracy and reliability, fostering trust and satisfaction among our clients.",
          clients: {
            title: "Parteners",
            description:
              "Our laboratory serves a diverse clientele, including individual patients seeking diagnostic tests, healthcare providers referring patients for specialized analyses, and corporate clients requiring comprehensive health screening for employees. We are committed to delivering accurate and reliable results to all our clients.",
          },
          values: {
            title: "values",
            value1: {
              title: "Patient-Centered Care",
              description:
                "In all their accomplishments, QLab Medical Laboratories are guided by the needs of its patients.",
            },
            value2: {
              title: "Continuous Learning",
              description:
                "In all their accomplishments, QLab Medical Laboratories are guided by the needs of its patients.",
            },
            value3: {
              title: "Communication",
              description:
                "QLab Medical Laboratories strive to acquire and understand relevant information, and shares it clearly and effectively.",
            },
            value4: {
              title: "Relationships",
              description:
                "QLab Medical Laboratories develop and strengthen collaborative relationships with all of their customers, including their patients, their families, their employees, volunteers, medical staff, and their business partners.",
            },
            value5: {
              title: "Human Resources",
              description:
                "QLab Medical Laboratories support the professional and personal growth of their employees in their pursuit of the laboratory’s mission.",
            },
            value6: {
              title: "Organizational Ethics",
              description:
                "QLab Medical Laboratories are steered by ethical values that emphasize integrity, honesty, fairness, dignity, and respect for all individuals.",
            },
            value7: {
              title: "Superior Performance",
              description:
                "QLab Medical Laboratories strive for superior performance in all their activities, to preserve the laboratories’ clinical, organizational and financial strength.",
            },
          },
        },
        footer: {
          subscribe: {
            title1: "for latest update",
            title2: "subscribe to our newsletter",
            button: "subscribe",
          },
          main: {
            description:
              "Our Laboratories Are Considered One Of The Leading Medical Laboratories In The Field Of Medical Analysis, And We Always Aim To Provide A High-Level And High-Quality Medical Service In Egypt.",
          },
          quickLinks: {
            title: "quick links",
          },
          contactUS: {
            title: "contact us",
            location:
              "El-kawther, above samir & aly stationery, hurghada, egypt",
          },
          openingHours: {
            title: "opening hours",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
            closed: "closed",
          },
        },
        homeVisit: {
          title: "Now you can book your home visit with Qlab",
          book: {
            subTitle1: "BOOK AN",
            subTitle2: "Appointment",
          },
        },
        branches: {
          title: "Addresses of all our branches",
          address: "Our Address",
          contactInformation: "Contact Information",
          openingHour: "Opening Hour",
          allBranches: {
            branch1: {
              addressTitle: "Hurghada Mubarak 2 above Samir Library and Ali",
              email: "info@qlab-eg.com",
              phone: "01122240120",
            },
            branch2: {
              addressTitle: "Hurghada, Dahar, above Spinneys supermarket",
              email: "info@qlab-eg.com",
              phone: "01111652872",
            },
            branch3: {
              addressTitle:
                "Giza, October 6, Central Spine, Al-Abaza Mall, next to Al-Tawheed and Al-Nour",
              email: "info@qlab-eg.com",
              phone: "01111652943",
            },
            branch4: {
              addressTitle:
                "Cairo, Helmeyat El-Zaytoun, Ibn Al-Hakam Street, Al-Marmar Tower, in front of Donia El-Gambari, next to WE branch",
              email: "info@qlab-eg.com",
              phone: "01111652983",
            },
            // branch5: {
            //   addressTitle:
            //     "Qalyubia, 10th of Ramadan Street, next to Taqa gas station, in front of Bin Abdul Aziz",
            //   email: "info@qlab-eg.com",
            //   phone: "01111652913",
            // },
          },
        },
      },
    },
    ar: {
      translation: {
        messageAlert: {
          wait: "انتظر حتى يتم ارسال رسالتك",
          success: "تم الارسال بنجاح...",
        },
        header: {
          home: "الرئيسية",
          about: "عن المعمل",
          medicalTests: "التحاليل",
          offers: "العروض",
          homeVisit: "الزيارة المنزلية",
          language: "English",
        },
        home: {
          hero: {
            special: "علشان انت واحد من العيلة",
            main: "احصل على العضوية الآن واستمتع بخصم 50% على جميع التحالــــيـل",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحليل الطبية, ونهدف دائما إلى تقديم خدمة طبية عالية المستوى وفائقة الجودة على ارض مصر",
            off: "خصم",
            LE: "ج.م",
            test: "اختبارات",
            parameters: "حدود",
          },
          examinations: {
            mainTitle: "خدمات معامل كيولاب",
            subTitle1: "اطمن صحتك فى أمان",
            subTitle2: "فى معامل كيولاب",
            description: "فحوصات شاملة وهامة لجميع الأعمار تبدأ من ",
            price: "300 جنيه",
            examinationsCards: {
              priceTitle: "السعر",
              includesTitle: "يحتوي على",
              more: "للمزيد",
              examination1: {
                type: "تحاليل",
                title: "صورة دم كاملة CBC ",
                oldPrice: "320 جنيه",
                newPrice: "160 جنيه",
                description:
                  "هى مجموعه من الاختبارات الدموية التي تقيس مستويات بعض الانزيمات والبروتينات والبيليروبين فى الدم",
                testNumber: 16,
                testType: "مُدخل",
              },
              examination2: {
                type: "تحاليل",
                title: "وظائف الكبد ",
                oldPrice: "340 جنيه",
                newPrice: "170 جنيه",
                description:
                  "هي مجموعة من الفحوصات الدموية والبولية التي تقيس مدى كفاءة الكلى في تصفية الدم من الفضالت والسموم وتنظيم الماء والاملاح والهرمونات.",
                testNumber: 2,
                testType: "مُدخل",
              },
              examination3: {
                type: "تحاليل",
                title: "وظائف الكلى",
                oldPrice: "340 جنيه",
                newPrice: "170 جنيه",
                description:
                  "هي مجموعة من الفحوصات الدموية والبولية التي تقيس مدى كفاءة الكلى في تصفية الدم من الفضالت والسموم وتنظيم الماء والاملاح والهرمونات.",
                testNumber: 2,
                testType: "مُدخل",
              },
              examination4: {
                type: "تحاليل",
                title: "الدهنيان فى الدم",
                oldPrice: "699 جنيه",
                newPrice: "360 جنيه",
                description:
                  "هي مجموعة من الفحوصات الدموية التي تقيس مستويات الدهون والكوليسترول في الدم، والتي تؤثر على صحة القلب والاوعية الدموية.",
                testNumber: 6,
                testType: "مُدخل",
              },
              examination5: {
                type: "تحليل",
                title: "فحص الحديد في الدم",
                oldPrice: "250 جنيه",
                newPrice: "130 جنيه",
                description:
                  "هو فحص يقيس كمية الحديد المتوفرة في الدم، والتي تستخدم في إنتاج خاليا الدم الحمراء والهيموغلوبين.",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination6: {
                type: "تحليل",
                title: "فيتامين د",
                oldPrice: "999 جنيه",
                newPrice: "600 جنيه",
                description:
                  "هو فحص يقيس مستوى هيدروكسي فيتامين (D25) D في الدم، وهو مؤشر على كمية فيتامين D المتوفرة في الجسم.",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination7: {
                type: "تحليل",
                title: "فيتامين ب12",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "هو فحص يقيس مستوى هذا الفيتامين في الدم، والذي يلعب دورا مهما في صحة الدم والجهاز العصبي.",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination8: {
                type: "تحليل",
                title: "حمض الفوليك",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "هو فحص يقيس مستوى حمض الفوليك (فيتامين ب9 ) في الدم، وهو أحد الفيتامينات الهامة لتصنيع خاليا الدم الحمراء والحمض النووي.",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination9: {
                type: "تحليل",
                title: "السكر",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "هو فحص يقيس مستوى الجلوكوز أو السكر في الدم، ويستخدم لتشخيص ومراقبة مرض السكري.",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination10: {
                type: "تحليل",
                title: "السكر التراكمي",
                oldPrice: "299 جنيه",
                newPrice: "160 جنيه",
                description:
                  "هو فحص يقيس نسبة الهيموغلوبين السكري في الدم، وهو مؤشر على متوسط مستوى السكر في الدم خالل الثالثة أشهر السابقة.",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination11: {
                type: "تحاليل",
                title: "فيروسات الكبد الوبائي",
                oldPrice: "769 جنيه",
                newPrice: "420 جنيه",
                description:
                  "هي مجموعة من الفحوصات الدموية التي تهدف إلى كشف وجود العدوى بفيروسات التهاب الكبد الوبائي .",
                testNumber: 2,
                testType: "مُدخل",
              },
              examination12: {
                type: "تحليل",
                title: "النتائج فيروس نقص المناعة",
                oldPrice: "459 جنيه",
                newPrice: "250 جنيه",
                description:
                  "هو فحص يهدف إلى كشف وجود العدوى بفيروس نقص المناعة البشرية (HIV) والذي يسبب متالزمة نقص المناعة المكتسبة",
                testNumber: 1,
                testType: "مُدخل",
              },
              examination13: {
                type: "تحاليل",
                title: "هرمونات الغدة الدرقية ",
                oldPrice: "699 جنيه",
                newPrice: "465 جنيه",
                description:
                  "هي فحوصات دم تقيس مستويات الهرمونات التي تنتجها الغدة الدرقية والتي تؤثر على عمليات األيض والنمو والطاقة في الجسم.",
                testNumber: 3,
                testType: "مُدخل",
              },
              examination14: {
                type: "تحاليل",
                title: "هرمونات FSH,LH&Prolactin",
                oldPrice: "759 جنيه",
                newPrice: "465 جنيه",
                description:
                  "هي فحوصات دم تقيس مستويات الهرمونات التي تؤثر على الخصوبة والوظائف الجنسية لدى الرجال والنساء.",
                testNumber: 3,
                testType: "مُدخل",
              },
              examination15: {
                type: "تحليل",
                title: "هرمون التيستوستيرون",
                oldPrice: "600 جنيه",
                newPrice: "450 جنيه",
                description:
                  "هو فحص يقيس مستوى هذا الهرمون في الدم، وهو الهرمون الجنسي الذكري الرئيسي الذي يؤثر على الخصوبة والوظائف الجنسية والصحة العامة للرجال والنساء.",
                testNumber: 2,
                testType: "مُدخل",
              },
              examination16: {
                type: "تحاليل",
                title: "دلالات الأورام في الدم",
                oldPrice: "2499 جنيه",
                newPrice: "1770 جنيه",
                description:
                  "هي فحوصات تقيس مستويات بعض المواد الكيميائية التي ترتبط بوجود أو نشاط األورام السرطانية في الجسم.",
                testNumber: 7,
                testType: "مُدخل",
              },
              examination17: {
                type: "تحاليل",
                title: "عوامل تخثر الدم",
                oldPrice: "559 جنيه",
                newPrice: "260 جنيه",
                description:
                  "هي مجموعة من الفحوصات الدموية التي تقيس قدرة الدم على التخثر والسيطرة على النزيف.",
                testNumber: 4,
                testType: "مُدخل",
              },
              examination18: {
                type: "تحاليل",
                title: "حساسية الدم",
                oldPrice: "2999 جنيه",
                newPrice: "2000 جنيه",
                description:
                  "هي فحوصات تقيس مستويات األجسام المضادة من نوع IGE والـ IGG التي تنتجها المناعة ضد مواد محددة تسبب الحساسية.",
                testNumber: 1,
                testType: "مُدخل",
              },
            },
            link: "هل ترغب في استكشاف جميع عروض الرعاية الصحية والفحوصات لدينا؟",
            click: "انقر هنا",
          },
          statistics: {
            patinets: {
              number: "200K",
              description: "المرضى الذين تم تشخيصهم في معامل كيولاب",
            },
            clientSatisifications: {
              number: "100%",
              description: "لقد تم تحقيق رضا العملاء من خلال معامل كيولاب ",
            },
            kindsOfTests: {
              number: "750+",
              description: "أنواع الاختبارات المتوفرة لدينا في معامل كيولاب ",
            },
            research: {
              number: "50K",
              description: "لقد تم إجراء ابحاث مذهل لدي معامل كيولاب",
            },
          },
          advantages: {
            title: "نحن نقدم أبحاث مختبرية عالية الجـودة فى معـامل كيـولاب",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحاليل الطبية، ونهدف دائما إلى تقديم خدمة طبية عالمية المستوى وفائقة الجودة على أرض مصر.. وذلك إنطلاقاً من إلتزامنا بالمشاركة لتحسين الصحة العامة للمجتمع.",
            topics: {
              topic1: "سرعة ودقة لنتائج التحاليل",
              topic2: "معمل متكامل في كل فرع",
            },
          },
          packages: {
            mainTitle: "خدمات معملية فائقة الجودة",
            subTitle1: "باقات العروض المميزة",
            subTitle2: "فى معاملنا",
            description:
              "مهمتنا هى توفير أعلى مستوى من الجوده والدقة والسرعة فى أداء التحاليل الطبية من خلال احدث التقنيات والأجهزة المعتمده من FDA",
            packagesCards: {
              priceTitle: "السعر",
              includesTitle: "يحتوي على",
              more: "للمزيد",
              package1: {
                type: "باقة",
                title: "تحاليل الفحص الشامل للكبار",
                oldPrice: "1575 جنيه",
                newPrice: "1180 جنيه",
                description: {
                  d1: "صورة دم كاملة - ملف دهون",
                  d2: "وظائف كبد - وظائف كلى",
                  d3: "سكرعشوائى - فيروسات الكبد الوبائى",
                  d4: "B,C سكر تراكمى",
                },
                testNumber: 7,
                testType: "اختبار",
              },
              package2: {
                type: "باقة",
                title: "الفحص الشامل للأطفال",
                oldPrice: "1015 جنيه",
                newPrice: "810 جنيه",
                description: {
                  d1: "صورة دم - وظاائف كبد",
                  d2: " وظائف كلى - بول",
                  d3: "براز - حديد",
                  d4: "مخزون حديد",
                },
                testNumber: 7,
                testType: "اختبار",
              },
              package3: {
                type: "باقة الفحص الدورى",
                title: "لمرضى السكر كل 3 شهور",
                oldPrice: "260 جنيه",
                newPrice: "200 جنيه",
                description: {
                  d1: "سكر تراكمى",
                  d2: "سكر صايم",
                  d3: "سكر فاطر",
                  d4: "",
                },
                testNumber: 3,
                testType: "اختبار",
              },
              package4: {
                type: "باقة الفحص الدورى",
                title: "لمرضى السكر سنويا",
                oldPrice: "1135 جنيه",
                newPrice: "910 جنيه",
                description: {
                  d1: "سكر تراكمى - وظائف كبد",
                  d2: "وظائف كلى",
                  d3: "ميكرو البومين",
                  d4: "ملف دهون",
                },
                testNumber: 5,
                testType: "اختبار",
              },
              package5: {
                type: "باقة للسيدات والرجال",
                title: "لتساقط الشعر",
                oldPrice: "1435 جنيه",
                newPrice: "1150 جنيه",
                description: {
                  d1: "صورة دم - حديد",
                  d2: "مخزون حديد - زنك",
                  d3: "فيتامين 12",
                  d4: "هرمون الغدة الدرقية TSH",
                },
                testNumber: 6,
                testType: "اختبار",
              },
              package6: {
                type: "باقة للسيدات",
                title: "لمتابعة الحمل",
                oldPrice: "380 جنيه",
                newPrice: "320 جنيه",
                description: {
                  d1: "صورة دم - سكر عشوائى",
                  d2: "فصيلة الدم",
                  d3: "عامل الريسس",
                  d4: "بول كامل",
                },
                testNumber: 5,
                testType: "اختبار",
              },
              package7: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل ما قبل الدايت",
                oldPrice: "1685 جنيه",
                newPrice: "1340 جنيه",
                description: {
                  d1: "صورة دم - مقاومة انسولين",
                  d2: "فيتامين د - الغدة الدرقية",
                  d3: "ملف دهون",
                  d4: "سكر تراكمى",
                },
                testNumber: 6,
                testType: "اختبار",
              },
              package8: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل ما قبل صيام شهر رمضان",
                oldPrice: "1155 جنيه",
                newPrice: "920 جنيه",
                description: {
                  d1: "سكر عشوائى - وظائف كبد",
                  d2: "وظائف كلى - ملف دهون",
                  d3: "صورة دم",
                  d4: "سكر تراكمى ( لمرضى السكر فقط )",
                },
                testNumber: 6,
                testType: "اختبار",
              },
              package9: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل اللياقة البدنية",
                oldPrice: "2360 جنيه",
                newPrice: "1900 جنيه",
                description: {
                  d1: "صورة دم - وظائف كبد",
                  d2: "وظائف كلى - ملف دهون",
                  d3: "فيتامين د - سكر عشوائى",
                  d4: "غدة درقية - تيستوستيرون",
                },
                testNumber: 8,
                testType: "اختبار",
              },
              package10: {
                type: "باقة للسيدات",
                title: "لصحة المرأة لسن اقل من 50 عام",
                oldPrice: "3240 جنيه",
                newPrice: "2600 جنيه",
                description: {
                  d1: "صورة دم - كالسيوم",
                  d2: "فتامين د - سكر",
                  d3: "كوليسترول - دهون ثلاثية",
                  d4: "حديد - مخزون حديد - TSH",
                },
                testNumber: 9,
                testType: "اختبار",
              },
              package11: {
                type: "باقة للسيدات",
                title: "لصحة المرأة لسن اكبر من 50 عام",
                oldPrice: "1575 جنيه",
                newPrice: "1260 جنيه",
                description: {
                  d1: "صورة دم - كالسيوم - فتامين د",
                  d2: "سكر  - كوليسترول - دهون ثلاثية - حديد",
                  d3: " مخزون حديد - TSH - وظائف كبد - وظائف كلى",
                  d4: "CA15.3 - CEA - CA125 - CA19.9",
                },
                testNumber: 15,
                testType: "اختبار",
              },
              package12: {
                type: "باقة للرجال",
                title: "لتحاليل دلالات الأورام",
                oldPrice: "1220 جنيه",
                newPrice: "970 جنيه",
                description: { d1: "PSA", d2: "AFP", d3: "CEA", d4: "CA19.9" },
                testNumber: 4,
                testType: "اختبار",
              },
              package13: {
                type: "باقة للسيدات والرجال",
                title: "لمتابعة هرمونات الغدة الدرقية ",
                oldPrice: "465 جنيه",
                newPrice: "390 جنيه",
                description: { d1: "TSH", d2: "FT3", d3: "FT4", d4: "" },
                testNumber: 3,
                testType: "اختبار",
              },
              package14: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل حساسية الاطعمة الاساسية",
                oldPrice: "6800 جنيه",
                newPrice: "5600 جنيه",
                description: {
                  d1: "Food Detective",
                  d2: "اختبار ",
                  d3: "ل 60",
                  d4: "نوع من المواد الغذائية",
                },
                testNumber: 1,
                testType: "اختبار",
              },
              package15: {
                type: "باقة للجميع",
                title: "لتحاليل حساسية الاطعمة الشاملة",
                oldPrice: "10400 جنيه",
                newPrice: "9200 جنيه",
                description: {
                  d1: "Food print",
                  d2: "اختبار ",
                  d3: "ل 220",
                  d4: "نوع من المواد الغذائية",
                },
                testNumber: 1,
                testType: "اختبار",
              },
            },
            link: "هل ترغب في استكشاف جميع عروض الرعاية الصحية والفحوصات لدينا؟",
            click: "انقر هنا",
          },
          testmonials: {
            title: "آراء العملاء",
            description:
              "Qlab هو أفضل مختبر تشخيصي في المدينة. الأسباب التي تجعلنا الأفضل فيما نقوم به هي عملية الحفاظ على المختبر مع Qlab.",
            opinions: {
              person1: {
                name: "محمد علي",
                jobTitle: "طبيب باطني",
                rating: "التقييم",
                opinionDescription:
                  "خدمات المختبر ممتازة ودقيقة. دائماً أحصل على النتائج بسرعة، مما يساعدني على تقديم الرعاية الأفضل لمرضاي. فريق العمل محترف ومتعاون للغاية.",
              },
              person2: {
                name: "سارة محمود",
                jobTitle: "إدارية في شركة",
                rating: "التقييم",
                opinionDescription:
                  "نعتمد على هذا المختبر لفحص الموظفين بشكل دوري. الخدمة ممتازة، والنتائج دائماً موثوقة وسريعة. أشعر بالراحة عندما أعلم أن موظفينا في أيدٍ أمينة.",
              },
              person3: {
                name: "أحمد عبد الرحمن",
                jobTitle: "ممرض",
                rating: "التقييم",
                opinionDescription:
                  "أتعامل مع المختبر بانتظام وأجد أن الخدمة لا تُضاهى. النتائج دقيقة وسريعة، والفريق الطبي دائماً متعاون وودود. أنصح بشدة باستخدام خدماتهم.",
              },
            },
          },
          awards: {
            subTitle: "مزود خدمات مختبرية متعدد الاستخدامات",
            mainTitle: "لقد حصلنا على جوائز مرموقة لعملنا",
            certificateLink: "شهادة تميز (PDF)",
            overWorld: {
              number: "20",
              title: "جوائز من جميع أنحاء العالم",
            },
            description:
              "مختبرنا يخدم عملاء متنوعين، بما في ذلك المرضى الأفراد الذين يبحثون عن اختبارات تشخيصية، ومقدمي الرعاية الصحية الذين يحيلون المرضى لإجراء تحليلات متخصصة، والعملاء من الشركات الذين يحتاجون إلى فحوصات صحية شاملة للموظفين. نحن ملتزمون بتقديم نتائج دقيقة وموثوقة لجميع عملائنا.",
          },
          book: {
            title: "دلوقتي تقدر تحجز زيارتك المنزلية مع معامل كيولاب",
            link: "احجز الآن",
            formData: {
              serviceName: "نوع الخدمة",
              Name: "الاسم بالكامل",
              FName: "الاسم الاول",
              LName: "اسم العائلة",
              phone: "رقم الهاتف",
              email: "البريد الالكتروني",
              time: "التوقيت",
            },
          },
        },
        about: {
          subTitle: "لماذا تختار معامل كيولاب ؟",
          mainTitle: "نحن نضمن الجودة للنتائج وفى وقت قياسى",
          description:
            "الهدف الرئيسي من برنامج ضمان الجودة في Q-Labs هو تقديم نتائج استثنائية وفي الوقت المناسب لعملائنا. نحقق ذلك من خلال مراقبة وتحسين أداء التحليل باستمرار من خلال برامج التقييم الخارجية والداخلية الدقيقة. يضمن التزامنا بالجودة أن كل مشروع يفي بأعلى معايير الدقة والموثوقية، مما يعزز الثقة والرضا بين عملائنا.",
          clients: {
            title: "شركاؤنا",
            description:
              "مختبرنا يخدم عملاء متنوعين، بما في ذلك المرضى الأفراد الذين يبحثون عن اختبارات تشخيصية، ومقدمي الرعاية الصحية الذين يحيلون المرضى لإجراء تحليلات متخصصة، والعملاء من الشركات الذين يحتاجون إلى فحوصات صحية شاملة للموظفين. نحن ملتزمون بتقديم نتائج دقيقة وموثوقة لجميع عملائنا.",
          },
          values: {
            title: "قيمُنا",
            value1: {
              title: "تمحور الرعاية حول المريض",
              description:
                "تسترشد معامل كيولاب باحتياجات المريض لتحقيق أهداف الخدمة المعملية.",
            },
            value2: {
              title: "التعلم المستمر",
              description:
                "تسترشد معامل كيولاب باحتياجات المريض لتحقيق أهداف الخدمة المعملية.",
            },
            value3: {
              title: "التواصل",
              description:
                "تسعي معامل كيولاب الطبية نسعى جاهدة لاكتساب وفهم المعلومات ذات الصلة، والأسهام بشكل واضح وفعال مع المجتمع.",
            },
            value4: {
              title: "العلاقات",
              description:
                "تعمل مختبرات كيولاب الطبية على تطوير وتقوية العلاقات التعاونية مع جميع عملائها ، بما في ذلك المرضى وعائلاتهم. و أيضا مع موظفوهم والطاقم الطبي وشركائهم التجاريين.",
            },
            value5: {
              title: "الموارد البشرية",
              description:
                "تدعم معامل كيولاب النمو المهني والشخصي لموظفيها لأداء مهامهم الوظيفية.",
            },
            value6: {
              title: "القيم المهنية للمؤسسة",
              description:
                "تؤكد القيم الأساسية لمعامل كيولاب علي النزاهة والأمانة والكرامة والاحترام لجميع الأفراد.",
            },
            value7: {
              title: "الأداء المتميز",
              description:
                "تسعى معامل كيولاب للحصول على أداء متفوق في جميع أنشطتها، للحفاظ على القوة الاكلينكية والتنظيمية والمالية.",
            },
          },
        },
        footer: {
          subscribe: {
            title1: "لآخر تحديث",
            title2: "اشترك في نشرتنا الإخبارية",
            button: "اشترك",
          },
          main: {
            description:
              "تُعتبر مختبراتنا واحدة من المختبرات الطبية الرائدة في مجال التحاليل الطبية، ونسعى دائماً لتقديم خدمة طبية عالية المستوى والجودة في مصر.",
          },
          quickLinks: {
            title: "روابط سريعة",
          },
          contactUS: {
            title: "تواصل معنا",
            location: "الكوثر، فوق مكتبة سمير وعلي، الغردقة، مصر",
          },
          openingHours: {
            title: "اوقات العمل",
            monday: "الاثنين",
            tuesday: "الثلاثاء",
            wednesday: "الاربعاء",
            thursday: "الخميس",
            friday: "الجمعة",
            saturday: "السبت",
            sunday: "الاحد",
            closed: "مغلق",
          },
        },
        homeVisit: {
          title: "دلوقتي تقدر تحجز زيارتك المنزلية مع معامل كيولاب",
          book: {
            subTitle1: "احجز",
            subTitle2: "زيارتك الآن",
          },
        },
        branches: {
          title: "عناوين جميع الفروع لدينا",
          address: "عنوان الفرع",
          contactInformation: "معلومات الاتصال",
          openingHour: "ساعات العمل",
          allBranches: {
            branch1: {
              addressTitle: "الغردقة مبارك 2 فوق مكتبة سمير و على",
              email: "info@qlab-eg.com",
              phone: "01122240120",
            },
            branch2: {
              addressTitle: "الغردقة، الدهار، فوق سوبر ماركت سبينيس",
              email: "info@qlab-eg.com",
              phone: "01111652872",
            },
            branch3: {
              addressTitle:
                "الجيزة 6 أكتوبر المحور المركزي الأباظية مول بجوار التوحيد والنور",
              email: "info@qlab-eg.com",
              phone: "01111652943",
            },
            branch4: {
              addressTitle:
                "القاهرة حلمية الزيتون شارع ابن الحكم برج المرمر امام دنيا الجمبري بجوار فرع WE",
              email: "info@qlab-eg.com",
              phone: "01111652983",
            },
            branch5: {
              addressTitle:
                "القليوبية شارع العاشر من رمضان بجوار بنزينة طاقة أمام بن عبد العزيز",
              email: "info@qlab-eg.com",
              phone: "01111652913",
            },
          },
        },
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
