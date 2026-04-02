// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-aise-lab",
          title: "AISE lab",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/aise/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-roles",
          title: "Roles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/roles/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
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
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
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
            },},{id: "news-accepted-paper-on-tag-recommendation-emse-journal",
          title: 'Accepted paper on tag recommendation - EMSE Journal.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-automatic-code-completion-icse-2022",
          title: 'Accepted paper on automatic code completion - ICSE 2022.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-issue-management-emse-journal",
          title: 'Accepted paper on issue management - EMSE Journal.',
          description: "",
          section: "News",},{id: "news-my-tool-catiss-issue-report-classification-won-the-best-tool-award-at-the-nlbse-22-competition",
          title: 'My Tool, Catiss (issue report classification), won the Best Tool Award at the...',
          description: "",
          section: "News",},{id: "news-our-tool-stacc-membership-infernce-won-the-best-tool-award-satml-22-competition",
          title: 'Our Tool, STACC, (membership infernce), won the Best Tool Award @ SaTML’22 competition....',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-missing-topic-recommendation-emse-journal",
          title: 'Accepted paper on missing topic recommendation - EMSE Journal.',
          description: "",
          section: "News",},{id: "news-kicking-off-ai4se-the-icai-collaboration-with-jetbrains-research-i-m-the-scientific-manager-amp-amp-lead-two-tracks",
          title: 'Kicking off AI4SE, the ICAI collaboration with JetBrains Research, I’m the scientific manager...',
          description: "",
          section: "News",},{id: "news-i-won-an-amazon-research-award-for-my-proposal-on-addressing-memorization-in-code-llms",
          title: 'I won an ✨ Amazon Research Award ✨ for my proposal on Addressing...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-practical-evaluation-of-llms4code-icse-2024",
          title: 'Accepted paper on Practical evaluation of LLMs4Code - ICSE 2024.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-traces-of-memorization-in-llms4code-icse-2024",
          title: 'Accepted paper on Traces of memorization in LLMs4Code - ICSE 2024.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-enhanced-understandability-of-tests-via-llms-icse-2025",
          title: 'Accepted paper on Enhanced understandability of tests via LLMs - ICSE 2025.',
          description: "",
          section: "News",},{id: "news-smart-autocompletion-invocation-aiware-25-won-an-acm-sigsoft-distinguished-paper-award",
          title: 'Smart AutoCompletion Invocation (AIWare’25) won an ACM SIGSOFT Distinguished Paper Award. 🏆',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-genai-impact-on-creativity-in-development-acm-tosem",
          title: 'Accepted paper on GenAI’ impact on Creativity in development - ACM TOSEM.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-multi-agent-onboarding-assistant-fse-demo-2025",
          title: 'Accepted paper on Multi-agent Onboarding Assistant - FSE (Demo) 2025.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-predictive-sequencing-of-states-fse-new-ideas-2025",
          title: 'Accepted paper on Predictive Sequencing of States - FSE (New Ideas) 2025.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-benchmarking-harmfulness-in-llm4code-fse-2025",
          title: 'Accepted paper on Benchmarking Harmfulness in LLM4Code - FSE 2025.',
          description: "",
          section: "News",},{id: "news-how-much-code-llms-remember-msr-25-won-an-acm-sigsoft-distinguished-paper-award",
          title: 'How Much Code LLMs Remember? (MSR’25) won an ACM SIGSOFT Distinguished Paper Award....',
          description: "",
          section: "News",},{id: "news-i-won-a-google-research-scholar-award-for-my-proposal-on-tackling-llm-hallucinations",
          title: 'I won a ✨ Google Research Scholar Award ✨ for my proposal on...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-evaluating-llms-for-functional-code-at-asml-ase-industry-2025",
          title: 'Accepted paper on Evaluating LLMs for Functional Code at ASML - ASE (Industry)...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-prompt-with-me-library-ase-industry-2025",
          title: 'Accepted paper on Prompt-with-Me Library - ASE (Industry) 2025.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-fast-amp-amp-model-agnostic-ranking-of-code-suggestions-ase-industry-2025",
          title: 'Accepted paper on Fast &amp;amp;amp; Model-agnostic Ranking of Code Suggestions - ASE (Industry)...',
          description: "",
          section: "News",},{id: "news-hiring-new-phd-vacancy-on-automated-code-refactroing-in-the-fuse-lab-in-collaboration-with-meta",
          title: 'Hiring: New PhD vacancy on Automated Code Refactroing in the FUSE lab in...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-ai4se-benchmarking-ieee-tse-journal",
          title: 'Accepted paper on AI4SE benchmarking - IEEE TSE journal.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-code4mev2-a-research-oriented-code-completion-platform-icse-demo-2026",
          title: 'Accepted paper on Code4MeV2: a Research-oriented Code-completion Platform - ICSE (Demo) 2026.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-developer-needs-amp-amp-feasible-features-for-ai-assistants-icse-industry-2026",
          title: 'Accepted paper on Developer Needs &amp;amp;amp; Feasible Features for AI Assistants - ICSE...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-developer-interaction-patterns-with-proactive-ai-acm-iui-2026",
          title: 'Accepted paper on Developer Interaction Patterns with Proactive AI - ACM IUI 2026....',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-human-ai-experience-in-integrated-development-environments-emse-journal",
          title: 'Accepted paper on Human-AI Experience in Integrated Development Environments - EMSE Journal.',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-investigating-autonomous-agent-contributions-in-the-wild-msr-2026",
          title: 'Accepted paper on Investigating Autonomous Agent Contributions in the Wild - MSR 2026....',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-exposure-aware-evaluation-of-bug-vs-fix-preference-in-code-llms-msr-2026",
          title: 'Accepted paper on Exposure-Aware Evaluation of Bug-vs-Fix Preference in Code LLMs - MSR...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-automated-attention-pattern-discovery-at-scale-in-llms-tmlr-journal",
          title: 'Accepted paper on Automated Attention Pattern Discovery at Scale in LLMs - TMLR...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-ast-pac-ast-guided-membership-inference-for-code-fse-new-ideas-2026",
          title: 'Accepted paper on AST-PAC: AST-guided Membership Inference for Code - FSE (New Ideas)...',
          description: "",
          section: "News",},{id: "news-accepted-paper-on-does-in-ide-calibration-of-llms-work-at-scale-fse-industry-2026",
          title: 'Accepted paper on Does In-IDE Calibration of LLMs work at Scale? - FSE...',
          description: "",
          section: "News",},{id: "projects-llms-for-code",
          title: 'LLMs for Code',
          description: "Code Generation, Summarization, Refactoring, and Bug Fixing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area1_llm4code/";
            },},{id: "projects-evals-for-llms",
          title: 'Evals for LLMs',
          description: "LLM4Code evaluations and Benchmarking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area2_evals/";
            },},{id: "projects-llm-agents",
          title: 'LLM Agents',
          description: "Autonomous Agents in Software Engineering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area3_agents/";
            },},{id: "projects-memorization-amp-hallucination",
          title: 'Memorization &amp;amp; Hallucination',
          description: "Addressing Challeneges of LLMs4Code",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area4_memorization/";
            },},{id: "projects-hax-in-ide",
          title: 'HAX in IDE',
          description: "Human-AI Collaboration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area5_hax/";
            },},{id: "projects-explainability-amp-multilinguality",
          title: 'Explainability &amp;amp; Multilinguality',
          description: "Low-resource natural and programming languages",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area6_explainability/";
            },},{id: "projects-domain-adaptation",
          title: 'Domain Adaptation',
          description: "Personalization and Adaptaion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area7_adaptation/";
            },},{id: "projects-repository-management",
          title: 'Repository Management',
          description: "Repo recommenders, issue management and mautomated minatenance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/area8_repomanagement/";
            },},{id: "projects-reading-club",
          title: 'Reading Club',
          description: "AISE reading club 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fun_readingclub/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D[%44%4F%54]%69%7A%61%64%69[%41%54]%74%75%64%65%6C%66%74[%44%4F%54]%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/malihehizadi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maliheh-izadi", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5093-5523", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F2D5RawAAAAJ&hl", "_blank");
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
