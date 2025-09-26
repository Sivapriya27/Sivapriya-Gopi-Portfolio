/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sivapriya Gopi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sivapriya Gopi Portfolio",
    type: "website",
    url: "http://sivapriyagopi.com/",
  },
};

//Home Page
const greeting = {
  title: "Sivapriya Gopi",
  logo_name: "SivapriyaGopi",
  nickname:
    "When focus plus effort knocks, and opportunity answers, success walks in!",
  subTitle:
    "Driven by curiosity, guided by data, and fueled by purpose - I want to build solutions that help amplify human potential. I enjoy navigating complexity with clarity, turning ideas into intelligent systems that connect, adapt, and evolve with the world.",
  resumeLink:
    "https://drive.google.com/file/d/16bb7O8mC4Ta70wjg1zxFOrqoadSP0xn3/view?usp=sharing",
  portfolio_repository: "/SivapriyaGopi_Resume_2025.pdf",
  githubProfile: "https://github.com/Sivapriya27",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Sivapriya27",
  // linkedin: "https://www.linkedin.com/in/sivapriya-gopi-gradstudent/",
  // gmail: "gopi0011@umn.edu",

  {
    name: "Github",
    link: "https://github.com/Sivapriya27",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sivapriya-gopi-gradstudent/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:gopi0011@umn.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#b51c05ff", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligence | Gen AI | NLP",
      fileName: "ChatWithAIImg",
      skills: [
        "🌐 Worked with models like BERT and GPT using Hugging Face and applied them to NLP tasks such as text classification, summarization, and Q&A.",
        "🌐 Practiced prompt engineering and fine-tuning with TensorFlow and DeepLearning.ai resources to improve LLM outputs for domain-specific tasks.",
        "🌐 Developed small-scale GenAI apps like chatbots using Python for rapid prototyping and deployment.",
        "🌐 Integrated LangChain and Retrieval-Augmented Generation (RAG) to build context-aware conversational agents.",
        "🌐 Worked on projects involving sentiment analysis, headline classification, and contextual response generation.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "white",
            color: "#063925ff",
          },
        },

        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "logos:hugging-face-icon",
          style: {
            backgroundColor: "transparent",
            color: "#090909ff",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "MlModalImg",
      skills: [
        "🌐 Built classification and prediction models using Scikit-learn on datasets across domains (news, crime, finance).",
        "🌐 Trained models with ensemble methods like Random Forest and XGBoost to improve accuracy on real-world datasets.",
        "🌐 Created complete ML pipelines for preprocessing, feature engineering, model training, and evaluation using Scikit-learn and related tools.",
        "🌐 Designed and tested deep learning models in PyTorch and TensorFlow, applying techniques such as hyperparameter tuning and regularization to achieve better accuracy.",
        "🌐 Familiar with deploying ML models in controlled environments and interpreting results using visual tools.",
      ],
      softwareSkills: [
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Random Forest",
          fontAwesomeClassname: "lsicon:tree-outline",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "XGBoost",
          imageSrc: "XGB.png",
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Analytics",
      fileName: "DataAnalyticsImg",
      skills: [
        "🌐 Cleaned, and processed large datasets using Pandas, NumPy, and MySQL, working with structured and unstructured data (e.g., 50K+ tweets, 8K+ crime records).",
        "🌐 Conducted statistical analysis in Python and MATLAB, applying sampling, hypothesis testing, regression, and Bayesian inference techniques for deeper insights.",
        "🌐 Created interactive dashboards and visualizations using Power BI and Excel, and built custom visualization modules with Svelte.",
        "🌐 Managed and maintained sensitive datasets for 30+ patients, ensuring data quality, compliance, and enabling evidence-based decision-making.",
        "🌐 Created structured work products including documentation, dashboards, and written reports tailored for varying stakeholders across medical and research teams.",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon-plain:pandas-wordmark",
          style: {
            color: "#030303ff",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "devicon-plain:numpy-wordmark",
          style: {
            color: "#242321ff",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#040404ff",
          },
        },

        {
          skillName: "MYSQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "SoftwareDevImg",
      skills: [
        "🌐 Helped to build secure and scalable backend systems using Java, Spring Boot, and SQL, reducing system response time by 30% through performance tuning and query optimization.",
        "🌐 Designed and implemented RESTful APIs with OAuth 2.0 authentication and integrated with GitHub for version control and collaboration.",
        "🌐 Followed Agile workflows, contributing across all SDLC phases - from proposal to deployment.",
        "🌐 Worked on research and production projects, handling data services and backend logic to support clinical and analytical applications",
        "🌐 Created responsive web apps and dashboards using Svelte, including interactive data storytelling tools for projects like Stock Sentiment Analysis.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Svelte",
          fontAwesomeClassname: "devicon:svelte",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GitHub-Version Control",
          fontAwesomeClassname: "mdi:github",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "UMN-TC",
      iconifyClassname: "fa7-solid:university",
      style: {
        color: "rgba(185, 10, 10, 1)", // fill color (red)
        WebkitTextStroke: "0.7px #FFD54F", // stroke color (yellow)
      },
      profileLink: "https://twin-cities.umn.edu/",
    },
    {
      siteName: "SRMIST",
      iconifyClassname: "mdi:university",
      style: {
        color: "#0d59dcff",
      },
      profileLink: "https://www.srmist.edu.in/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Minnesota, Twin Cities",
      subtitle: "Master of Science in Computer Science",
      logo_path: "umn_logo.png",
      alt_name: "UMN-TC",
      duration: "Sep 2024- May 2026",
      descriptions: [
        "🎓  Maintaining a 3.9/4.0 GPA while diving deep into coursework in AI, Machine Learning, NLP, Visualization, Database Systems, and Software Engineering.",
        "🎓  Expanding my knowledge beyond the classroom by actively attending conferences, seminars, and workshops at UMN, engaging with topics like Generative AI, cross-functional tech collaboration, cutting-edge research, and industry trends.",
        "🎓  Immersing myself in UMN’s vibrant academic community through collaborative projects, research assistantships, and networking with faculty and peers, constantly applying theory to impactful real-world initiatives.",
      ],
      website_link: "https://twin-cities.umn.edu/",
    },
    {
      title: "SRM Institute of Science and Technology",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "srm_logo.png",
      alt_name: "SRMIST ",
      duration: "Aug 2020 - May 2024",
      descriptions: [
        "🎓  Graduated with a 9.57/10 GPA, with a focus on core subjects including Advanced Programming Practice, Data Structures and Algorithms (DSA), Design and Analysis of Algorithms (DAA), Computer Architecture, Operating Systems, Database Management Systems (DBMS), and Computer Networks.",
        "🎓  Gained industry exposure through major projects, internships, and published technical papers, working under guidance from experienced faculty and collaborating with industry experts.",
        "🎓  Demonstrated leadership and initiative through student organizations, technical clubs, and volunteering activities, driving events, mentoring peers, and fostering collaborative growth within the university community.",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Natural Language Processing Specialization",
      subtitle: "In progress",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/specializations/natural-language-processing",
      alt_name: "DeepLearning.ai",
      color_code: "#8C151599",
    },
    {
      title: "Microsoft AI & ML Engineering",
      subtitle: "In progress",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/microsoft-ai-and-ml-engineering",
      alt_name: "Microsoft",
      color_code: "#00000099",
    },
    {
      title: "Google Advanced Data Analytics",
      subtitle: "In progress",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/google-advanced-data-analytics",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "IBM Generative AI Engineering",
      subtitle: "In progress",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/ibm-generative-ai-engineering",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "McKinsey Forward Program",
      subtitle: "Completed",
      logo_path: "mckinsey_org_logo.jpeg",
      certificate_link:
        "https://www.credly.com/badges/4b94e68e-531b-461b-96e6-2ccc444b9f1a/public_url",
      alt_name: "McKinsey.org",
      color_code: "#D83B0199",
    },
    {
      title: "Java Fundamentals",
      subtitle: "Completed",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.etrain.skillsnetwork.site/certificates/a869812b189043d1b12172ea6d975fb4",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Python Programming",
      subtitle: "Completed",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.etrain.skillsnetwork.site/certificates/05e92a7d7ec642c89284f79fc39252d4",
      alt_name: "IBM",
      color_code: "#0C9D5899",
    },
    {
      title: "Java Programming",
      subtitle: "Completed",
      logo_path: "sla_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1uzpLoyvzEygEibl0p8Esv_6emVPRHEcj/view?usp=sharing",
      alt_name: "SLA Software Training Institute",
      color_code: "#00000099",
    },
    {
      title: "Python Programming",
      subtitle: "Completed",
      logo_path: "sla_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1S0uifdA3y89or8U1EhU477D2qe4GzLJF/view?usp=sharing",
      alt_name: "SLA Software Training Institute",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, Leadership & Volunteership",
  description:
    "At the University of Minnesota, I contributed as a Graduate Research Assistant, building intelligent systems that advance healthcare and clinical decision-making. As a software developer intern, I engineered scalable solutions across healthcare systems. Beyond research and development, during my undergrad, I represented my college at national innovation and leadership forums and served as a lead member in tech clubs, organizing Intercollegiate events and driving community-led initiatives. Below are the challenges I focused on during my work, internships, and leadership roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title:
            "Graduate Research Assistant - Clinical Data Systems | Data Analysis | Software Development ",
          company: "University of Minnesota, Twin Cities",
          company_url: "https://twin-cities.umn.edu/",
          logo_path: "umn_logo.png",
          duration: "Aug 2025 - Present",
          location: "Minneapolis, MN, USA",
          description:
            "<b>Problem</b><br>The CE-STAND study, a grant-funded clinical trial, faced challenges in managing large-scale datasets (30+ patients). Data from assessments (volitional movements, autonomic responses, and quality-of-life metrics) were fragmented across formats. Manual processing slowed analysis and increased the risk of errors, making it difficult for neurosurgeons and biomedical engineers to make timely, data-driven decisions. The research team also required a custom <b>Dual N-Back cognitive testing platform</b>, built in-house, to assess and track patient cognitive function.<br><br>" +
            "<b>Solution</b><br>- Developing a <b>Python- and MATLAB-based applications</b> to automate patient data ingestion, processing, and analysis.<br>- Designing <b>interactive PowerBI dashboards and Excel-based reports</b> tailored for clinicians, researchers, and administrators.<br>- Collaborating with neurosurgeons to translate <b>clinical protocols into technical workflows</b>, ensuring standardized, reproducible data capture.<br>- Applied <b>Bayesian optimization and statistical modeling</b> to evaluate treatment effectiveness. <br>- Building a <b>custom Dual N-Back web application</b> with research-specific features, enabling participants to complete cognitive testing seamlessly within the clinical study.<br><br>" +
            "<b>Impact</b><br>- Reduced manual data preparation time from <b>hours to under 20 minutes</b> per patient dataset.<br>- Delivered <b>real-time, clinician-ready dashboards</b> that accelerated neurosurgeon decision-making and improved study accuracy.<br>- Laid the foundation for <b>scalable, secure data infrastructure</b>, ensuring future trials can build on structured workflows.<br>- Successfully deployed the <b>cognitive testing platform</b>, which will be actively used by participants to evaluate and track cognitive improvements during the study.",
          color: "#000000",
        },
        {
          title:
            "Graduate Research Assistant — Research Technology Operations | Tasks Automation | Workflow Optimization",
          company: "University of Minnesota, Twin Cities",
          company_url: "https://twin-cities.umn.edu/",
          logo_path: "umn_logo.png",
          duration: "Dec 2024 - May 2025",
          location: "Minneapolis, MN, USA",
          description:
            "<b>Problem</b><br>" +
            "Research teams spent excessive time on repetitive technical tasks during assessment tests such as <b>Brain Motor Control Assessment (BMCA)</b>, <b>Transcranial Doppler (TcD)</b>, <b>Ambulatory Blood Pressure Monitor (ABPM)</b> report generation, and manual trial documentation. These inefficiencies <b>slowed study timelines</b>, created <b>inconsistencies that threatened reproducibility</b>, and prolonged volunteer participation sessions.<br><br>" +
            "<b>Solution</b><br>" +
            "- <b>Automated repetitive workflows</b> by leveraging advanced software features (e.g., <b>LabChart macros for BMCA</b>)<br>" +
            "- Collaborated with <b>external software providers</b> to learn advanced capabilities and integrated them into trial workflows through custom implementations.<br>" +
            "- Designed <b>intuitive execution interfaces</b>, enabling <b>non-technical staff</b> to run standardized workflows without coding knowledge.<br>" +
            "- Standardized <b>documentation and SoPs</b>, improving <b>reproducibility</b> and knowledge transfer across lab members.<br><br>" +
            "<b>Impact</b><br>" +
            "- Reduced workflow turnaround time by <b>~40%</b>, accelerating clinical study progress.<br>" +
            "- Minimized <b>human error</b> through <b>automated, repeatable pipelines</b>.<br>" +
            "- Improved <b>lab efficiency</b> and <b>cross-team collaboration</b> between technical and clinical staff.<br>" +
            "- Freed researchers from <b>manual data wrangling</b>, allowing them to focus on <b>higher-level insights and clinical decision-making</b>.<br>",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title:
            "Summer Research Assistant - Research Operations | Software Setup and Support",
          company: "University of Minnesota, Twin Cities",
          company_url: "https://twin-cities.umn.edu/",
          logo_path: "umn_logo.png",
          duration: "May 2025 - Aug 2025",
          location: "Minneapolis, MN, USA",
          description:
            "<b>Problem</b><br>" +
            "Clinical trials often suffered from <b>setup errors and downtime</b> due to complex, multi-device systems (<b>BMCA</b>, <b>N-Back testing</b>, <b>ABPM</b>, <b>TCD ultrasound</b>). The lack of <b>standardized setup procedures</b> and limited technical troubleshooting capacity reduced efficiency and <b>data reliability</b>.<br><br>" +
            "<b>Solution</b><br>" +
            "- Configured and troubleshooted specialized clinical research systems (<b>BMCA</b>, <b>N-Back</b>, <b>ABPM</b>, <b>TCD</b>) to ensure smooth daily operation.<br>" +
            "- Authored <b>Standard Operating Procedures (SoPs)</b> for experimental setups, calibration, and data verification.<br>" +
            "- Coordinated with <b>engineers and clinicians</b> to ensure <b>hardware–software compatibility</b> and minimal disruptions during studies.<br>" +
            "- Provided <b>technical support and training</b> to lab staff for smooth adoption of new tools.<br><br>" +
            "<b>Impact</b><br>" +
            "- Reduced <b>setup errors and equipment downtime</b>, ensuring <b>higher reliability of patient data</b>.<br>" +
            "- Improved <b>reproducibility</b> across studies through standardized SoPs and calibration protocols.<br>" +
            "- Strengthened lab capacity to run <b>multiple trials in parallel</b>, boosting overall study throughput and efficiency.<br>",
        },
        {
          title: "Software Developer Intern - Software Design & Development",
          company: "Softlogic Systems",
          company_url: "",
          logo_path: "softlogic systems.png",
          duration: "Jun 2023 - Sep 2023",
          location: "Chennai, India",
          description:
            "<b>Problem</b><br>" +
            "During the internship, I worked with several <b> hospitals and healthcare systems</b> (each 250+ employees) where outdated backend infrastructures led to inefficiencies in <b>data management, reporting accuracy, and system scalability</b>. These challenges affected not only financial workflows but also <b>patient record handling, regulatory compliance, and care coordination</b>.<br><br>" +
            "<b>Solution</b><br>" +
            "- Helped in building <b>scalable payroll systems</b> for 5 clients, supporting 250+ employees at each organization.<br>" +
            "- Developed <b>backend services using Java, Spring Boot, and SQL</b>; designed <b>RESTful APIs</b> and integrated <b>OAuth 2.0</b> for secure access control.<br>" +
            "- Focused on <b>performance tuning</b> by optimizing database queries and applying caching strategies.<br>" +
            "- Contributed to the full <b>project lifecycle</b>, from proposal to deployment, working autonomously to meet tight deadlines.<br>" +
            "- Blended <b>software design principles with real-world client needs</b> to ensure maintainable and extensible solutions.<br><br>" +
            "<b>Impact</b><br>" +
            "- Reduced <b>system response time by 30%</b> through query optimization and caching, improving user experience.<br>" +
            "- Improved <b>reporting accuracy and system scalability by over 20%</b>, supporting data-driven business operations.<br>" +
            "- Delivered <b>reliable, secure, and scalable payroll solutions</b> across multiple industries, enabling clients to manage workforce operations efficiently.<br>",
        },
      ],
    },
    {
      title: "Leadership & Volunteerships",
      experiences: [
        {
          title: "Organisation and Public Relations",
          company: "SRM Institute of Science and Technology",
          company_url: "https://www.srmist.edu.in/",
          logo_path: "srm_logo.png",
          duration: "Feb 2022 - Aug 2023",
          location: "Chennai, India",
          description:
            "As an active member of the Sketch Club, the largest technical club on campus, I played a key role in organizing and facilitating workshops, hackathons, seminars, and national-level tech fests. My focus was always on building an inclusive space where collaboration and creativity could thrive, encouraging peers to share ideas and innovate together. One of my most impactful contributions was during TEXUS’23, SRM’s flagship national tech festival, where I helped coordinate large-scale events, engage with industry professionals, and ensure smooth communication between teams. This experience sharpened my leadership, communication, and organizational skills, while strengthening my ability to foster teamwork and community spirit within the technical field.",
        },
        {
          title: "Student Leader",
          company: "Indian Institute of Technology, Madras",
          company_url: "https://www.iitm.ac.in/",
          logo_path: "IIT_Madras_Logo.png",
          duration: "Sep 2021 - Nov 2022",
          location: "Chennai, India",
          description:
            "Selected to represent my college at IIT-PALS, an educational initiative driven by IIT-Madras, where I collaborated with peers from over 50 engineering colleges nationwide. As a student leader, I facilitated knowledge exchange, strengthened networks, and promoted collaborative learning across institutions. One highlight was contributing to Industry Speaks Innovature, a series connecting students with industry leaders, where I helped organize sessions that bridged the gap between academia and real-world engineering challenges. This role not only enhanced my leadership and public engagement skills, but also deepened my perspective on education, innovation, and community-driven growth.",
          color: "#D83B01",
        },
        {
          title: "Campus Ambassador",
          company: "MyCaptain - EdTech",
          company_url: "https://mycaptain.in/",
          logo_path: "mycaptain.jpeg",
          duration: "Dec 2020 - May 2021",
          location: "Bangalore, India",
          description:
            "Served as the official representative of MyCaptain, an education platform empowering students through workshops and skill-based programs. At my college, I actively engaged peers, boosted participation, and created awareness about technical learning opportunities. Beyond outreach, I collaborated with the marketing and content teams, designing promotional materials and campaigns that successfully drew students into workshops and community programs. This role sharpened my communication, marketing, and community-building skills, while strengthening my ability to connect students with impactful learning initiatives.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "From analyzing massive datasets to designing intuitive applications, my projects explore the intersection of technology, creativity, and problem-solving. Each project is an experiment in turning data, code, and design into actionable insights, interactive tools, and real-world solutions that make an impact.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Please click on it to view my projects/publications👆",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "news-classification-system",
      name:
        "An Evaluation Methodology for News Headline Classification using Comprehensive Pattern learning",
      createdAt: "21st September 2024",
      description:
        "Paper published in International Journal For Multidisciplinary Research - Volume 6, Issue 5, September-October 2024",
      url: "https://www.ijfmr.com/research-paper.php?id=20243",
    },
    {
      id: "crime-prediction-and-analysis",
      name:
        "Crime Prediction and Analysis using Data Mining and Machine Learning: A simple approach that helps Predictive Policing",
      createdAt: "5th April 2023",
      description:
        "Paper published in FMDB Publications - Vol. 1 No. 2, Pages: 64-75",
      url: "https://www.fmdbpub.com/user/journals/article_details/FTSCL/64",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "spgopi.jpg",
    description: [
      " Let's Connect!",
      " Got a question, an opportunity, a project idea, or just want to say hi?",
      " I’m always happy to hear from curious minds and passionate collaborators.",
      " Reach me anywhere - I’m active on pretty much every social platform, so send me a message where you’re most comfortable. I do my best to respond within 24 hours (usually much sooner!).",
      " Want a quick overview? Check out my Resume - it’s all there : skills, experience, and a sprinkle of my personality.",
      " ✨ Let’s build something amazing together! ✨",
    ],
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I love documenting my professional journey and sharing technical insights along the way. My blog will be a space where I break down real-world experiences, lessons learned, and interesting projects in tech. Stay tuned - it’s on the way!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Minneapolis, Minnesota, USA",
    locality: "Minneapolis",
    country: "USA",
    region: "Minnesota",
    postalCode: "55414",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/search?q=minneapolis+minnesota&sca_esv=4391b5723477ff50&sxsrf=AE3TifPluPuxyUZXv75r5jYJ3HNN2QMvFw%3A1753852522121&source=hp&ei=aqqJaLnTBYTMkPIPmZyMuQQ&iflsig=AOw8s4IAAAAAaIm4elVWLjU1UOzutN-ksJIglcTJ2x4-&gs_ssp=eJzj4tTP1TdIK6gqTzNg9BLNzczLS00syM_JLFYAs4vzSxIByvwMWQ&oq=minneapolis+minnes&gs_lp=Egdnd3Mtd2l6IhJtaW5uZWFwb2xpcyBtaW5uZXMqAggAMggQLhiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjZKlAAWJ8dcAB4AJABAJgBe6ABjw6qAQQxMC44uAEByAEA-AEBmAISoALbDsICChAjGIAEGCcYigXCAhAQIxjwBRiABBgnGMkCGIoFwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAg0QIxjwBRiABBgnGIoFwgIEECMYJ8ICFBAuGIAEGJECGNEDGNQCGMcBGIoFwgIFEC4YgATCAgsQLhiABBjRAxjHAcICCBAuGIAEGNQCwgIEEAAYA8ICBxAjGPAFGCfCAg4QLhiABBixAxjHARivAcICDhAAGIAEGLEDGIMBGIoFwgIUEC4YgAQYxwEYmAUYmQUYngUYrwGYAwCSBwQ3LjExoAeD_gGyBwQ3LjExuAfbDsIHBjAuNS4xM8gHPw&sclient=gws-wiz",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
