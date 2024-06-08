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
            subTitle: "Rest assured that your health is safe at Qlab",
            description:
              "Comprehensive and important examinations for all ages starting from ",
            price: "300 pounds",
            examinationsCards: {
              priceTitle: "price",
              includesTitle: "includes",
              examination1: {
                title: "CBC blood count analysis",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination2: {
                title: "Liver function tests",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination3: {
                title: "Kidney function tests",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination4: {
                title: "Profile Lipid analyses",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination5: {
                title: "IRON analysis in the blood",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination6: {
                title: "Vitamin D analysis",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination7: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination8: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination9: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination10: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination11: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination12: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination13: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination14: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination15: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination16: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination17: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination18: {
                title: "specialized genetic testing",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
            },
            link: "Would you like to explore all our healthcare and screening offers?",
            click: "click here",
          },
          statistics: {
            patinets: {
              number: "500K",
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
              topic1: "Speed and accuracy of analysis results",
              topic2: "An integrated laboratory in every branch",
            },
          },
          packages: {
            mainTitle: "High-quality laboratory services",
            subTitle: "Special offers packages in our laboratories",
            description:
              "Our mission is to provide the highest level of quality, accuracy and speed in performing medical analyzes through the latest technologies and devices approved by the FDA.",
            packagesCards: {
              priceTitle: "price",
              includesTitle: "includes",
              package1: {
                title: "Comprehensive screening tests for adults",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package2: {
                title: "Comprehensive examination of children ",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package3: {
                title: "Regular examination for diabetics every 3 months",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package4: {
                title: "Regular examination for diabetics annually",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package5: {
                title: "Hair loss package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package6: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package7: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package8: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package9: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package10: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package11: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package12: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package13: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package14: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package15: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package16: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              package17: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              package18: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
            },
            link: "Would you like to explore all our healthcare and screening offers?",
            click: "click here",
          },
          awards: {
            subTitle: "Versatile Laboratory Service Provider",
            mainTitle: "We Have Got Prestigious Awards For Our Work",
            overWorld: {
              number: "20",
              title: "Awards From All Over the world",
            },
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo.",
          },
          book: {
            title: "now you can book your home visit with Qlab ",
            link: "book now",
          },
        },
        footer: {
          subscribe: {
            title1: "for latest update",
            title2: "subscribe to our newsletter",
            button: "subscribe",
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
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam veritatis natus id doloremque dicta. Nam voluptatibus minima nostrum. Soluta ullam incidunt officia cum nobis nam! Dolores eius est illum quos.",
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
            main: "احصل على العضوية الآن واستمتع بخصم 50% على جميع التحاليل",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحليل الطبية, ونهدف دائما إلى تقديم خدمة طبية عالية المستوى وفائقة الجودة على ارض مصر",
            off: "خصم",
            LE: "ج.م",
            test: "اختبارات",
            parameters: "حدود",
          },
          examinations: {
            mainTitle: "خدمات معامل كيولاب",
            subTitle: "اطمن صحتك فى أمان فى كيولاب",
            description: "فحوصات شاملة وهامة لجميع الأعمار تبدأ من ",
            price: "300 جنيه",
            examinationsCards: {
              priceTitle: "السعر",
              includesTitle: "يحتوي على",
              examination1: {
                title: "تحليل صورة الدم CBC",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination2: {
                title: "تحاليل وظائف الكبد ",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination3: {
                title: "تحاليل وظائف الكلى",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination4: {
                title: "تحاليل Profile Lipid",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination5: {
                title: "تحليل IRON في الدم",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination6: {
                title: "تحليل فيتامين D",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination7: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination8: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination9: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination10: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination11: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination12: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination13: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination14: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination15: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination16: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination17: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination18: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
            },
            link: "هل ترغب في استكشاف جميع عروض الرعاية الصحية والفحوصات لدينا؟",
            click: "انقر هنا",
          },
          statistics: {
            patinets: {
              number: "500K",
              description: "المرضى الذين تم تشخيصهم في معامل Q-Lab ",
            },
            clientSatisifications: {
              number: "100%",
              description: "لقد تم تحقيق رضا العملاء من خلال معامل Q-Lab ",
            },
            kindsOfTests: {
              number: "850+",
              description: "أنواع الاختبارات المتوفرة هنا في معامل كيولاب ",
            },
            research: {
              number: "50K",
              description: "لقد تم إجراء بحث مذهل من قبلنا",
            },
          },
          advantages: {
            title: "نحن نقدم أبحاث مخبرية عالية الجـودة فى معـامل كيـولاب",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحاليل الطبية، ونهدف دائما إلى تقديم خدمة طبية عالمية المستوى وفائقة الجودة على أرض مصر.. وذلك إنطلاقاً من إلتزامنا بالمشاركة لتحسين الصحة العامة للمجتمع.",
            topics: {
              topic1: "سرعة ودقة لنتائج التحاليل",
              topic2: "معمل متكامل في كل فرع",
            },
          },
          packages: {
            mainTitle: "خدمات معملية فائقة الجودة",
            subTitle: "باقات العروض المميزة فى معاملنا",
            description:
              "مهمتنا هى توفير أعلى مستوى من الجوده والدقة والسرعة فى أداء التحاليل الطبية من خلال احدث التقنيات والأجهزة المعتمده من FDA",
            packagesCards: {
              priceTitle: "السعر",
              includesTitle: "يحتوي على",
              package1: {
                title: "تحاليل الفحص الشامل للكبار",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package2: {
                title: "فحص شامل للأطفال ",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package3: {
                title: "الفحص الدورى لمرضى السكر كل 3 شهور",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package4: {
                title: "الفحص الدورى لمرضى السكر سنويا",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package5: {
                title: "باقة تساقط الشعر",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package6: {
                title: "باقة متابعة الحمل",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package7: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package8: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package9: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package10: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package11: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package12: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package13: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package14: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package15: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package16: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              package17: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              package18: {
                title: "الاختبارات الجينية المتخصصة",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
            },
            link: "هل ترغب في استكشاف جميع عروض الرعاية الصحية والفحوصات لدينا؟",
            click: "انقر هنا",
          },
          awards: {
            subTitle: "مزود خدمات مختبرية متعدد الاستخدامات",
            mainTitle: "لقد حصلنا على جوائز مرموقة لعملنا",
            overWorld: {
              number: "20",
              title: "جوائز من جميع أنحاء العالم",
            },
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo.",
          },
          book: {
            title: "دلوقتي تقدر تحخجز زيارتك المنزلية مع معامل كيولاب",
            link: "احجز الآن",
          },
        },
        footer: {
          subscribe: {
            title1: "لآخر تحديث",
            title2: "اشترك في نشرتنا الإخبارية",
            button: "اشترك",
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
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
