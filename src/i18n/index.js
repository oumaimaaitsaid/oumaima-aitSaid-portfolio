import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      hero: {
        title: "Bonjour, je suis Oumaima Ait Said",
        description: "Développeuse Full Stack passionnée, avec une solide expérience en Java/Spring Boot et Angular. Je développe des applications web modernes en mettant l'accent sur la qualité et les bonnes pratiques de développement.",
        contactBtn: "Me contacter",
        downloadCV: "Télécharger CV"
      },
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact"
      },
      about: {
        title: "À propos",
        description: "Passionnée par le développement web et les nouvelles technologies, je suis un développeur Full Stack avec une solide formation en informatique. Mon parcours académique et mes projets pratiques m'ont permis de développer une expertise particulière en Java et Spring Boot, ainsi qu'en développement web moderne.",
        frontend: {
          title: "Développeur Frontend",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Développeur Backend",
          description: "Java (Spring Boot, Spring Security, Spring MVC, Spring Data, JEE, Hibernate JPA), PHP (Laravel), RESTful APIs"
        },
        ui: {
          title: "Conception",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Expérience",
        education: "Formation",
        positions: {
          geerd: {
            title: "Développeur Web Full Stack - Stage",
            company: "Pprime",
            period: "05/2025 - 07/2025"
          },
          youcode: {
            title: "Développement Web Full Stack",
            company: "Youcode Safi - UM6P",
            period: "2024 - en cours"
          }
        },
        education: {
          bac: {
            title: "Baccalauréat Sciences ",
            option: "Physiques et Chimiques",
            school: "Lycée Salah Eddine ElAyoubi - Safi",
            period: "2015"
          },
          university: {
            title: "Biologie",
            school: "Faculté Polydisciplinaire de SAFI",
            period: "2015 - 2017"
          },
          certificate: {
            title: "Développement Informatique",
            organization: "Développeuse Full Stack",
            school: "Ntic Safi",
            period: "2020 - 2022"
          }
        }
      },
      projects: {
        title: "Projets",
        viewDemo: "Démo",
        viewCode: "Code",
        baticuisine: {
          title: "Bati-Cuisine",
          description: "Application Java pour l'estimation des coûts de construction et rénovation de cuisines. Gestion complète des projets avec calcul des coûts des matériaux, main-d'œuvre, et génération de devis personnalisés."
        },
        wrm: {
          title: "WRM - Gestion des Salles d'Attente",
          description: "API REST moderne pour la gestion intelligente des salles d'attente. Implémente plusieurs algorithmes de planification (FIFO, Priority, SJF), avec suivi en temps réel des visiteurs et génération de statistiques détaillées."
        },
        ecomove: {
          title: "EcoMove",
          description: "Plateforme de gestion de billets de transport permettant aux clients de rechercher et réserver des billets pour différents moyens de transport. Gestion complète des clients, des réservations et des trajets."
        },
        citronix: {
          title: "Citronix",
          description: "Application de gestion pour une ferme de citrons, permettant de suivre la production, la récolte, et la vente, avec une gestion optimisée de la productivité des arbres."
        },
        cch: {
          title: "CCH API",
          description: "API REST pour la gestion des compétitions cyclistes, incluant la gestion des équipes, des coureurs, des courses et des résultats."
        },
        itlens: {
          title: "ITLens",
          description: "Système de gestion avancée des enquêtes avec création d'enquêtes hiérarchiques et analyse en temps réel."
        },
        recyclehub: {
          title: "RecycleHub",
          description: "Une application de gestion de recyclage innovante qui connecte les particuliers aux collecteurs agréés. Système complet avec gestion des demandes, suivi en temps réel et programme de récompenses par points."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "N'hésitez pas à me contacter !",
        email: "Email",
        phone: "Téléphone"
      },
      languages: {
        title: "Langues",
        switchTo: "Changer en {{lang}}",
        ar: "Arabe - Langue maternelle",
        fr: "Français - Courant",
        en: "Anglais - Intermédiaire",
        de: "Allemand - Notions de base"
      },
      skills: {
        i18n: "Internationalisation"
      }
    }
  },
en: { 
    translation: {
      hero: {
        title: "Hello, I'm Oumaima Ait Said",
        description: "Passionate Full Stack Developer with solid experience in Java/Spring Boot and Angular. I develop modern web applications with a focus on quality and development best practices.",
        contactBtn: "Contact Me",
        downloadCV: "Download CV"
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        title: "About",
        description: "Passionate about web development and new technologies, I am a Full Stack developer with a solid background in computer science. My academic journey and practical projects have allowed me to develop particular expertise in Java and Spring Boot, as well as modern web development.",
        frontend: {
          title: "Frontend Developer",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Backend Developer",
          description: "Java (Spring Boot, Spring Security, Spring MVC, Spring Data, JEE, Hibernate JPA), PHP (Laravel), RESTful APIs"
        },
        ui: {
          title: "Design",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Experience",
        education: "Education",
        positions: {
          geerd: {
            title: "Full Stack Web Developer - Internship",
            company: "Pprime",
            period: "05/2025 - 07/2025"
          },
          youcode: {
            title: "Full Stack Web Development",
            company: "Youcode Safi - UM6P",
            period: "2024 - Present"
          }
        },
        education: {
          bac: {
            title: "Baccalaureate in Science",
            option: "Physics and Chemistry",
            school: "Salah Eddine ElAyoubi High School - Safi",
            period: "2015"
          },
          university: {
            title: "Biology",
            school: "Polydisciplinary Faculty of SAFI",
            period: "2015 - 2017"
          },
          certificate: {
            title: "Computer Development",
            organization: "Full Stack Developer",
            school: "Ntic Safi",
            period: "2020 - 2022"
          }
        }
      },
      projects: {
        title: "Projects",
        viewDemo: "Demo",
        viewCode: "Code",
        baticuisine: {
          title: "Bati-Cuisine",
          description: "Java application for estimating kitchen construction and renovation costs. Complete project management with calculation of material costs, labor, and generation of customized quotes."
        },
        wrm: {
          title: "WRM - Waiting Room Management",
          description: "Modern REST API for intelligent waiting room management. Implements multiple scheduling algorithms (FIFO, Priority, SJF), with real-time visitor tracking and detailed statistics generation."
        },
        ecomove: {
          title: "EcoMove",
          description: "Transport ticket management platform allowing customers to search and book tickets for different modes of transport. Complete management of customers, reservations, and journeys."
        },
        citronix: {
          title: "Citronix",
          description: "Management application for a lemon farm, enabling tracking of production, harvesting, and sales, with optimized tree productivity management."
        },
        cch: {
          title: "CCH API",
          description: "REST API for cycling competition management, including team, rider, race and results management."
        },
        itlens: {
          title: "ITLens",
          description: "Advanced survey management system with hierarchical survey creation and real-time analysis."
        },
        recyclehub: {
          title: "RecycleHub",
          description: "An innovative recycling management application that connects individuals with certified collectors. Complete system with request management, real-time tracking, and points-based rewards program."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Feel free to reach out!",
        email: "Email",
        phone: "Phone"
      },
      languages: {
        title: "Languages",
        switchTo: "Switch to {{lang}}",
        ar: "Arabic - Native",
        fr: "French - Fluent",
        en: "English - Intermediate",
        de: "German - Basic"
      },
      skills: {
        i18n: "Internationalization"
      }
    }
  },
  de: { 
    translation: {
      hero: {
        title: "Hallo, ich bin Oumaima Ait Said",
        description: "Leidenschaftliche Full-Stack-Entwicklerin mit solider Erfahrung in Java/Spring Boot und Angular. Ich entwickle moderne Webanwendungen mit Fokus auf Qualität und bewährte Entwicklungspraktiken.",
        contactBtn: "Kontakt",
        downloadCV: "Lebenslauf"
      },
      nav: {
        about: "Über mich",
        experience: "Erfahrung",
        projects: "Projekte",
        contact: "Kontakt"
      },
      about: {
        title: "Über mich",
        description: "Als Full-Stack-Entwicklerin mit fundierter IT-Ausbildung begeistere ich mich für Webentwicklung und neue Technologien. Mein akademischer Werdegang und meine praktischen Projekte haben es mir ermöglicht, besondere Expertise in Java und Spring Boot sowie in der modernen Webentwicklung aufzubauen.",
        frontend: {
          title: "Frontend-Entwicklerin",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Backend-Entwicklerin",
          description: "Java (Spring Boot, Spring Security, Spring MVC, Spring Data, JEE, Hibernate JPA), PHP (Laravel), RESTful APIs"
        },
        ui: {
          title: "Design",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Erfahrung",
        education: "Ausbildung",
        positions: {
          geerd: {
            title: "Full-Stack-Webentwicklerin - Praktikum",
            company: "Pprime",
            period: "05/2025 - 07/2025"
          },
          youcode: {
            title: "Full-Stack-Webentwicklung",
            company: "Youcode Safi - UM6P",
            period: "2024 - laufend"
          }
        },
        education: {
          bac: {
            title: "Abitur (Naturwissenschaften)",
            option: "Physik und Chemie",
            school: "Lycée Salah Eddine ElAyoubi - Safi",
            period: "2015"
          },
          university: {
            title: "Biologie",
            school: "Fakultät Polydisziplinär de SAFI",
            period: "2015 - 2017"
          },
          certificate: {
            title: "IT-Entwicklung",
            organization: "Full-Stack-Entwicklerin",
            school: "Ntic Safi",
            period: "2020 - 2022"
          }
        }
      },
      projects: {
        title: "Projekte",
        viewDemo: "Demo",
        viewCode: "Code",
        baticuisine: {
          title: "Bati-Cuisine",
          description: "Java-Anwendung zur Schätzung der Kosten für den Bau und die Renovierung von Küchen. Vollständiges Projektmanagement mit Berechnung der Material- und Arbeitskosten sowie Erstellung individueller Angebote."
        },
        wrm: {
          title: "WRM - Wartezimmer-Management",
          description: "Moderne REST-API für intelligentes Wartezimmer-Management. Implementiert mehrere Planungsalgorithmen (FIFO, Priority, SJF), mit Echtzeit-Besucherverfolgung und detaillierter Statistikgenerierung."
        },
        ecomove: {
          title: "EcoMove",
          description: "Plattform zur Verwaltung von Fahrscheinen, die es Kunden ermöglicht, Tickets für verschiedene Verkehrsmittel zu suchen und zu buchen. Komplette Verwaltung von Kunden, Reservierungen und Fahrten."
        },
        citronix: {
          title: "Citronix",
          description: "Management-Anwendung für eine Zitronenfarm, die die Verfolgung von Produktion, Ernte und Verkauf ermöglicht, mit optimiertem Management der Baumproduktivität."
        },
        cch: {
          title: "CCH API",
          description: "REST-API für das Management von Radsportwettbewerben, einschließlich der Verwaltung von Teams, Fahrern, Rennen und Ergebnissen."
        },
        itlens: {
          title: "ITLens",
          description: "Fortschrittliches System zur Umfrageverwaltung mit Erstellung hierarchischer Umfragen und Echtzeitanalyse."
        },
        recyclehub: {
          title: "RecycleHub",
          description: "Eine innovative Recycling-Management-Anwendung, die Privatpersonen mit zertifizierten Sammlern verbindet. Komplettes System mit Auftragsverwaltung, Echtzeit-Tracking und punktebasiertem Belohnungsprogramm."
        }
      },
      contact: {
        title: "Kontakt",
        subtitle: "Zögern Sie nicht, mich zu kontaktieren!",
        email: "E-Mail",
        phone: "Telefon"
      },
      languages: {
        title: "Sprachen",
        switchTo: "Wechseln zu {{lang}}",
        ar: "Arabisch - Muttersprache",
        fr: "Französisch - Fließend",
        en: "Englisch - Mittelstufe",
        de: "Deutsch - Grundkenntnisse"
      },
      skills: {
        i18n: "Internationalisierung"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;