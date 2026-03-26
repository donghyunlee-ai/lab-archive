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
        },{id: "dropdown-hpai-kr",
              title: "HPAI.kr",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://hpai.kr/";
              },
            },{id: "dropdown-birdfluai",
              title: "BirdFluAI",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://www.birdfluai.com/";
              },
            },{id: "dropdown-ai-korea-inc",
              title: "AI Korea Inc.",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://www.aikoreainc.com/";
              },
            },{id: "nav-teaching",
          title: "Teaching",
          description: "A list of my online and undergraduate courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-presentation-kstme-summer-conference-algal-bloom-mlops",
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
            },},{id: "news-now-recruiting-undergraduate-and-graduate-students-our-lab-is-actively-recruiting-passionate-students-for-the-following-positions-graduate-students-master-s-amp-amp-ph-d-we-are-looking-for-highly-motivated-candidates-to-join-our-master-s-or-ph-d-programs-undergraduate-researchers-we-welcome-undergraduate-students-3rd-year-or-higher-interested-in-gaining-research-experience-especially-those-considering-the-integrated-bachelor-s-master-s-program-or-master-s-program-research-areas-ai-mlops-data-science-ideal-candidate-smart-social-integrity-required-skills-python-preferred-skills-front-back-end-development-how-to-apply-please-send-your-cv-and-cover-letter-to-donghyun-lee-at-hufs-ac-kr-please-be-sure-to-include-your-gpa-in-your-application-materials",
          title: 'Now Recruiting: Undergraduate and Graduate Students Our lab is actively recruiting passionate students...',
          description: "",
          section: "News",},{id: "news-seminar-sungbum-park-us-big-tech-on-agentic-ai-amp-cloud",
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
