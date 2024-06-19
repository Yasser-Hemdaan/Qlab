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
            subTitle1: "Rest assured that your health",
            subTitle2: "is safe at Qlab",
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
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination2: {
                type: "Tests",
                title: "Liver function",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination3: {
                type: "Tests",
                title: "Kidney function",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination4: {
                type: "Tests",
                title: "Profile Lipid",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination5: {
                type: "Test",
                title: "IRON analysis in the blood",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination6: {
                type: "Test",
                title: "Vitamin D",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination7: {
                type: "Test",
                title: "B12 Vitamin",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination8: {
                type: "Test",
                title: "acid folic",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination9: {
                type: "Test",
                title: "Sugar",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination10: {
                type: "Test",
                title: "Cumulative sugar",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination11: {
                type: "Tests",
                title: "Hepatitis C virus",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination12: {
                type: "Test",
                title: "HIV results",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination13: {
                type: "Tests",
                title: "Thyroid hormone",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination14: {
                type: "Tests",
                title: "FSH, LH and Prolactin hormones",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination15: {
                type: "Test",
                title: "Testosterone",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination16: {
                type: "Tests",
                title: "tumor markers in the blood",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination17: {
                type: "Tests",
                title: "Profile Coagulation",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination18: {
                type: "Tests",
                title: "Profile Allergy blood",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
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
              topic1: "Speed and accuracy of analysis results",
              topic2: "An integrated laboratory in every branch",
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
                title: "Comprehensive screening test package for adults",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Complete blood count - lipid profile - liver function - kidney function - random sugar - hepatitis viruses - B, C, cumulative sugar",
                testNumber: 90,
                testType: "test",
              },
              package2: {
                title: "Comprehensive examination package for children ",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - liver functions - kidney functions - urine - stool - iron - iron stores",
                testNumber: 50,
                testType: "parameter",
              },
              package3: {
                title:
                  "Regular examination package for diabetics every 3 months",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Cumulative sugar - fasting sugar - breakfast sugar",
                testNumber: 90,
                testType: "test",
              },
              package4: {
                title: "Periodic examination package for diabetics annually",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Cumulative sugar - liver functions - kidney functions - microalbumin - lipid profile",
                testNumber: 50,
                testType: "parameter",
              },
              package5: {
                title: "Hair loss package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - iron - iron stores - zinc - vitamin 12 - thyroid hormone (TSH).",
                testNumber: 90,
                testType: "test",
              },
              package6: {
                title: "Pregnancy follow-up package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - random sugar - blood type - Rhesus factor - complete urine",
                testNumber: 50,
                testType: "parameter",
              },
              package7: {
                title: "Thyroid hormone monitoring package",
                oldPrice: "$500",
                newPrice: "$300",
                description: "TSH - FT3 - FT4",
                testNumber: 90,
                testType: "test",
              },
              package8: {
                title: "Pre-diet analysis package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - insulin resistance - vitamin D - thyroid gland - lipid profile - cumulative sugar",
                testNumber: 50,
                testType: "parameter",
              },
              package9: {
                title: "A package of tests before fasting the month of Ramadan",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Random sugar - liver functions - kidney functions - lipid profile - blood picture - cumulative sugar (for diabetics only)",
                testNumber: 90,
                testType: "test",
              },
              package10: {
                title: "Basic food allergy testing package",
                oldPrice: "$500",
                newPrice: "$300",
                description: "Food Detective tests for 60 types of food",
                testNumber: 50,
                testType: "parameter",
              },
              package11: {
                title: "Comprehensive food allergy testing package",
                oldPrice: "$500",
                newPrice: "$300",
                description: "Food Print Test for 220 types of food",
                testNumber: 90,
                testType: "test",
              },
              package12: {
                title: "Fitness analysis package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - liver function - kidney function - lipid profile - vitamin D - random sugar - thyroid gland - testosterone",
                testNumber: 50,
                testType: "parameter",
              },
              package13: {
                title: "Women's health package, age less than 50 years",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - calcium - vitamin D - sugar - cholesterol - triglycerides - iron - iron stores - TSH",
                testNumber: 90,
                testType: "test",
              },
              package14: {
                title: "Women's health package, age over 50 years",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Blood picture - calcium - vitamin D - sugar - cholesterol - triglycerides - iron - iron stores - TSH Liver functions - kidney functions - CA15.3 - CEA - CA125 - CA19.9",
                testNumber: 50,
                testType: "parameter",
              },
              package15: {
                title: "Tumor analysis package for men",
                oldPrice: "$500",
                newPrice: "$300",
                description: "PSA - AFP - CEA - CA19.9",
                testNumber: 90,
                testType: "test",
              },
              package16: {
                title: "Tumor analysis package for women",
                oldPrice: "$500",
                newPrice: "$300",
                description: "CA15.3 - CEA - CA125 - CA19.9 - AFP",
                testNumber: 50,
                testType: "parameter",
              },
              package17: {
                title: "Vitamin analysis package",
                oldPrice: "$500",
                newPrice: "$300",
                description:
                  "Vitamin D - Vitamin B12 - Vitamin B6 - Folic Acid",
                testNumber: 90,
                testType: "test",
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
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo.",
          },
          book: {
            title: "now you can book your home visit with Qlab ",
            link: "book now",
            formData: {
              serviceName: "Service Name",
              Name: "Name",
              phone: "phone",
              email: "email",
              time: "time",
            },
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
        homeVisit: {
          title: "Now you can book your home visit with Qlab",
          book: {
            subTitle1: "BOOK AN",
            subTitle2: "Appointment",
          },
        },
        branches: {
          title: "Addresses of all our branches",
          branches: {
            Branch1: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch2: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch3: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch4: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch5: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch6: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
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
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination2: {
                type: "تحاليل",
                title: "وظائف الكبد ",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination3: {
                type: "تحاليل",
                title: "وظائف الكلى",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination4: {
                type: "تحاليل",
                title: "Profile Lipid",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination5: {
                type: "تحليل",
                title: "IRON في الدم",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination6: {
                type: "تحليل",
                title: "فيتامين D",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination7: {
                type: "تحليل",
                title: "B12 Vitamin",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination8: {
                type: "تحليل",
                title: "acid folic",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination9: {
                type: "تحليل",
                title: "السكر",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination10: {
                type: "تحليل",
                title: "السكر التراكمي",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination11: {
                type: "تحاليل",
                title: "فيروسات الكبد الوبائي",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination12: {
                type: "تحليل",
                title: "النتائج فيروس نقص المناعة",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination13: {
                type: "تحاليل",
                title: "هرمونات الغدة الدرقية ",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination14: {
                type: "تحاليل",
                title: "هرمونات FSH,LH&Prolactin",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination15: {
                type: "تحليل",
                title: "هرمون التيستوستيرون",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination16: {
                type: "تحاليل",
                title: "دالالت األورام في الدم",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination17: {
                type: "تحاليل",
                title: "Profile Coagulation",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination18: {
                type: "تحاليل",
                title: "Profile Allergy في الدم",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
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
                title: "باقة تحاليل الفحص الشامل للكبار",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "تشمل  صورة دم كاملة - ملف دهون - وظائف كبد - وظائف كلى - سكرعشوائى - فيروسات الكبد الوبائى - B,C سكر تراكمى",
                testNumber: 90,
                testType: "اختبار",
              },
              package2: {
                title: "باقة فحص شامل للأطفال",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - وظاائف كبد - وظائف كلى - بول - براز - حديد - مخزون حديد",
                testNumber: 50,
                testType: "مُدخل",
              },
              package3: {
                title: "باقة الفحص الدورى لمرضى السكر كل 3 شهور",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: "سكر تراكمى - سكر صايم - سكر فاطر",
                testNumber: 90,
                testType: "اختبار",
              },
              package4: {
                title: "باقة الفحص الدورى لمرضى السكر سنويا",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "سكر تراكمى - وظائف كبد - وظائف كلى - ميكرو البومين - ملف دهون",
                testNumber: 50,
                testType: "مُدخل",
              },
              package5: {
                title: "باقة تساقط الشعر",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - حديد - مخزون حديد - زنك - فيتامين 12 - هرمون الغدة الدرقية TSH",
                testNumber: 90,
                testType: "اختبار",
              },
              package6: {
                title: "باقة متابعة الحمل",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - سكر عشوائى - فصيلة الدم - عامل الريسس - بول كامل",
                testNumber: 50,
                testType: "مُدخل",
              },
              package7: {
                title: "باقة متابعة هرمونات الغدة الدرقية ",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: "TSH - FT3 - FT4",
                testNumber: 90,
                testType: "اختبار",
              },
              package8: {
                title: "باقة تحاليل ما قبل الدايت",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - مقاومة انسولين - فيتامين د - الغدة الدرقية - ملف دهون - سكر تراكمى",
                testNumber: 50,
                testType: "مُدخل",
              },
              package9: {
                title: "باقة تحاليل قبل صيام شهر رمضان",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "سكر عشوائى - وظائف كبد - وظائف كلى - ملف دهون - صورة دم - سكر تراكمى ( لمرضى السكر فقط )",
                testNumber: 90,
                testType: "اختبار",
              },
              package10: {
                title: "باقة تحاليل حساسية الاطعمة الاساسية",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Food Detectiveاختبار ل 60 نوع من المواد الغذائية ",
                testNumber: 50,
                testType: "مُدخل",
              },
              package11: {
                title: "باقة تحاليل حساسية الاطعمة الشاملة",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: "Food Printاختبار ل 220 نوع من المواد الغذئية ",
                testNumber: 90,
                testType: "اختبار",
              },
              package12: {
                title: "باقة تحاليل اللياقة البدنية",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - وظائف كبد - وظائف كلى - ملف دهون - فيتامين د - سكر عشوائى - غدة درقية - تيستوستيرون",
                testNumber: 50,
                testType: "مُدخل",
              },
              package13: {
                title: "باقة صحة المرأه السن اقل من 50 عام",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - كالسيوم - فتامين د - سكر - كوليسترول - دهون ثلاثية - حديد - مخزون حديد - TSH",
                testNumber: 90,
                testType: "اختبار",
              },
              package14: {
                title: "باقة صحة المرأه السن اكبر من 50 سنة",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "صورة دم - كالسيوم - فتامين د - سكر  - كوليسترول - دهون ثلاثية - حديد - مخزون حديد - TSH وظائف كبد - وظائف كلى - CA15.3 - CEA - CA125 - CA19.9",
                testNumber: 50,
                testType: "مُدخل",
              },
              package15: {
                title: "باقة تحاليل دلالات الأورام للرجل",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: "PSA - AFP - CEA - CA19.9",
                testNumber: 90,
                testType: "اختبار",
              },
              package16: {
                title: "باقة تحاليل دلالات الأورام للمرأه",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: "CA15.3 - CEA - CA125 - CA19.9 - AFP",
                testNumber: 50,
                testType: "مُدخل",
              },
              package17: {
                title: "باقة تحاليل الفيتامينات",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Vitamin D - Vitamin B12 - Vitamin B6 - Folic Acid",
                testNumber: 90,
                testType: "اختبار",
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
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo.",
          },
          book: {
            title: "دلوقتي تقدر تحخجز زيارتك المنزلية مع معامل كيولاب",
            link: "احجز الآن",
            formData: {
              serviceName: "نوع الخدمة",
              Name: "الاسم",
              phone: "رقم الهاتف",
              email: "البريد الالكتروني",
              time: "التوقيت",
            },
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
        homeVisit: {
          title: "دلوقتي تقدر تحجز زيارتك المنزلية مع معامل كيولاب",
          book: {
            subTitle1: "احجز",
            subTitle2: "ميعاد",
          },
        },
        branches: {
          title: "عناوين جميع الفروع لدينا",
          branches: {
            Branch1: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch2: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch3: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch4: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch5: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
            },
            Branch6: {
              address:
                "183 marina avenue, miami central mall united state of america",
              email: "183 marina avenue, miami central mall",
              phone: "183 marina avenue, miami central mall",
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
