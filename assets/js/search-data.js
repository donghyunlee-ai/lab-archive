// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-professor",
              title: "Professor",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/professor/";
              },
            },{id: "dropdown-members",
              title: "Members",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/members/";
              },
            },{id: "dropdown-alumni",
              title: "Alumni",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/alumni/";
              },
            },{id: "nav-publications",
          title: "Publications",
          description: "Publications from Donghyun Lee AI Group. Underline indicates group members, and * indicates the corresponding author.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Overview of research projects, R&amp;D capabilities, and collaborative networks of the Donghyun Lee AI Group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "Open-source code released alongside our publications for full reproducibility.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "A list of my online and undergraduate courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Moments from the Donghyun Lee AI Group — conferences, seminars, awards, and lab life.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "news-presentation-kstme-summer-conference-algal-bloom-mlops",
          title: '🎤 [Presentation] KSTME Summer Conference (Algal Bloom MLOps)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-06-talk-ktoe/";
            },},{id: "news-presentation-kaere-conference-avian-influenza-spatio-temporal-modeling",
          title: '🎤 [Presentation] KAERE Conference (Avian Influenza Spatio-temporal Modeling)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-22-talk-kaere/";
            },},{id: "news-presentation-koti-summer-conference-labor-market-analysis-with-llm",
          title: '🎤 [Presentation] KOTI Summer Conference (Labor Market Analysis with LLM)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-30-talk-koti/";
            },},{id: "news-paper-building-reliable-ai-for-quantifying-uncertainty-jcp-if-9-7-jcr-6-6",
          title: '📜 [Paper] Building Reliable AI for Quantifying Uncertainty JCP(IF=9.7, JCR 6.6%)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-13-paper-jcp/";
            },},{id: "news-award-kei-president-39-s-award-3rd-place-in-environmental-data-contest",
          title: '🏆 [Award] KEI President&amp;#39;s Award (3rd Place) in Environmental Data Contest',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-21-award-kei-contest/";
            },},{id: "news-award-encouragement-award-at-tuk-sw-competition-hyungseo-jeon",
          title: '🏆 [Award] Encouragement Award at TUK SW Competition (Hyungseo Jeon)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-14-award-sw-contest/";
            },},{id: "news-patent-patent-registered-air-quality-prediction-method-using-ai",
          title: '🔒 [Patent] Patent Registered Air Quality Prediction Method Using AI',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-11-patent-air-quality/";
            },},{id: "news-presentation-kaere-conference-avian-influenza-prediction",
          title: '🎤 [Presentation] KAERE Conference (Avian Influenza Prediction)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-06-talk-kaere/";
            },},{id: "news-lab-news-alumni-visit-sangwon-chae-nonghyup-bank",
          title: '👏 [Lab News] Alumni Visit Sangwon Chae (Nonghyup Bank)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-02-member-visit/";
            },},{id: "news-news-appointed-editorial-board-for-journal-of-innovation-amp-knowledge-jcr-top-0-4",
          title: '📰 [News] Appointed Editorial Board for Journal of Innovation &amp;amp; Knowledge (JCR Top...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-02-news-editor-board/";
            },},{id: "news-paper-xai-for-algal-bloom-forecasting-published-in-jcp-if-10-top-6",
          title: '📜 [Paper] XAI for Algal Bloom Forecasting published in JCP (IF=10, Top 6%)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-25-paper-jcp-xai/";
            },},{id: "news-recruiting-now-recruiting-undergraduate-and-graduate-students",
          title: '📢 [Recruiting] Now Recruiting Undergraduate and Graduate Students',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-10-recruit-open-positions/";
            },},{id: "news-seminar-sungbum-park-us-big-tech-on-agentic-ai-amp-cloud",
          title: '🚀 [Seminar] Sungbum Park (US Big Tech) on Agentic AI &amp;amp; Cloud',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-13-sungbum-park-seminar/";
            },},{id: "news-seminar-hyun-jung-toss-place-on-the-role-of-data-analysts",
          title: '💡 [Seminar] Hyun Jung (Toss Place) on the Role of Data Analysts',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-14-hyun-jung-seminar/";
            },},{id: "news-presentation-ksz-conference-on-device-agentic-ai-for-spatial-jump-prediction",
          title: '🎤 [Presentation] KSZ Conference (On-Device Agentic AI for Spatial Jump Prediction)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-21-talk-ksz/";
            },},{id: "news-event-2025-lab-homecoming-day",
          title: '🎉 [Event] 2025 Lab Homecoming Day',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-27-home-comming-day/";
            },},{id: "news-news-welcome-new-undergraduate-researchers",
          title: '👏 [News] Welcome New Undergraduate Researchers!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-08-welcome-new/";
            },},{id: "news-news-welcome-new-member-amp-recruitment-update",
          title: '📢 [News] Welcome New Member &amp;amp; Recruitment Update',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-23-welcome-new/";
            },},{id: "news-news-prof-donghyun-lee-appointed-to-itpr-editorial-board",
          title: '📢 [News] Prof. Donghyun Lee Appointed to ITPR Editorial Board',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-05-prof-lee-itpr-editorial-board/";
            },},{id: "news-grant-selected-for-nrf-outstanding-young-scientist-grant",
          title: '🎉 [Grant] Selected for NRF Outstanding Young Scientist Grant',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-25-nrf-junior-research/";
            },},{id: "news-grant-selected-as-lead-pi-for-iitp-national-project-on-physics-ai-disaster-response",
          title: '🎉 [Grant] Selected as Lead PI for IITP National Project on Physics-AI Disaster...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-01-iitp-grant/";
            },},{id: "news-seminar-sangmok-lee-cj-entertainment-on-the-role-of-data-analysts-in-the-ai-era",
          title: '💡 [Seminar] Sangmok Lee (CJ Entertainment) on the Role of Data Analysts in...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-12-sangmok-lee-seminar/";
            },},{id: "news-conference-attending-the-2026-ieie-summer-annual-conference",
          title: '🎓 [Conference] Attending the 2026 IEIE Summer Annual Conference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-27-ieie-summer-conference/";
            },},{id: "news-news-prof-donghyun-lee-appointed-as-vice-chair-of-kosime-special-committee",
          title: '📢 [News] Prof. Donghyun Lee Appointed as Vice Chair of KOSIME Special Committee...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-07-prof-lee-kosime-vice-chair/";
            },},{id: "news-recruiting-undergraduate-research-students-up-to-2-apply-by-july-31",
          title: '📢 [Recruiting] Undergraduate Research Students (Up to 2, Apply by July 31)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-21-recruit-undergrad/";
            },},{id: "news-paper-heterogeneous-transfer-learning-for-infectious-disease-forecasting-published-in-eswa-if-9-4-top-5",
          title: '📜 [Paper] Heterogeneous Transfer Learning for Infectious Disease Forecasting published in ESWA (IF=9.4,...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-22-paper-eswa-heterogeneous-tl/";
            },},{id: "news-paper-edge-case-based-ai-reliability-validation-published-in-scientific-reports-if-4-9-top-14-6-with-ktl",
          title: '📜 [Paper] Edge-Case-Based AI Reliability Validation published in Scientific Reports (IF=4.9, Top 14.6%,...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-08-12-paper-sr-ai-reliability-ktl/";
            },},{id: "news-news-welcome-new-members-amp-recruitment-update",
          title: '📢 [News] Welcome New Members &amp;amp; Recruitment Update',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-08-18-welcome-new/";
            },},{id: "projects-ai-for-algal-bloom-forecasting",
          title: 'AI for Algal Bloom Forecasting',
          description: "Developing a Trustworthy AI model to predict harmful algal blooms (HABs).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_algal_bloom/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/donghyun-lee-206124291", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cr5hrgcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
