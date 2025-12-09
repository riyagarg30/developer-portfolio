/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Riya Garg", // Name from resume [cite: 1]
  title: "Hi all, I'm Riya",
  subTitle: emoji(
    // Customised subtitle based on resume summary and skills
    "A passionate Software Engineer with experience in full-stack development, specializing in building innovative solutions that enhance efficiency and user experience. Proficient in React, Python, and Docker."
  ),
  resumeLink:
    "riyagarg30.github.io/developer-portfolio/", // Set to your GitHub Pages portfolio link from the resume [cite: 2]
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/riyagarg30", // GitHub link from resume [cite: 2]
  linkedin: "https://www.linkedin.com/in/riya-garg-413628190/", // LinkedIn link from resume [cite: 2]
  gmail: "rg5073@nyu.edu", // NYU email from resume [cite: 2]
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DRIVEN SOFTWARE ENGINEER WITH A FOCUS ON FULL-STACK & DEVOPS", // Customised subtitle based on resume [cite: 3, 5]
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications using ReactJS and Material UI."
    ),
    emoji("⚡ Implement robust data pipelines and architecture using Docker, Kubernetes, and Apache Airflow."),
    emoji(
      "⚡ Optimize back-end systems and implement secure integrations, improving data throughput and reducing latency."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-braille" // Using a generic icon for Kubernetes
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML/CSS",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "PostgreSQL/MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS/Azure", // Representing Cloud Technologies
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux/Unix",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "C#", // C# from resume [cite: 17]
      fontAwesomeClassname: "fas fa-code" // Using a generic code icon
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New York University", // From resume [cite: 7]
      logo: require("./assets/images/nyuLogo.png"), // Assuming a custom logo file is needed
      subHeader: "Master's, Computer Engineering", // From resume [cite: 8]
      duration: "September 2024 - May 2026", // From resume [cite: 9]
      desc: "GPA: 3.8", // From resume [cite: 9]
      descBullets: [
        "Relevant coursework includes: Machine Learning; Big Data Analytics; Deep Learning: ML. Systems Engineering & Ops."
      ]
    },
    {
      schoolName: "Jaypee Institute of Information Technology", // From resume [cite: 12]
      logo: require("./assets/images/jiitLogo.png"), // Assuming a custom logo file is needed
      subHeader: "Bachelor's, Computer Science", // From resume [cite: 13]
      duration: "August 2017 - May 2022", // From resume [cite: 14]
      desc: "GPA: 8.3", // From resume [cite: 14]
      descBullets: ["Relevant coursework includes: Database Systems & Web Development; Algorithms & Data Structures; Operating Systems."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development (React/Node)", // Emphasizing the full stack skills [cite: 3, 21]
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering & Pipeline (Python/Airflow)", // Emphasizing data and Python skills [cite: 3, 18]
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & Containerization (Docker/K8s)", // Emphasizing DevOps/Containerization [cite: 4, 17, 31]
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer", // From resume [cite: 24]
      company: "Nference Labs Private Limited (Mayo Clinic Partner)", // From resume [cite: 23]
      companylogo: require("./assets/images/nferenceLogo.jpg"), // Assuming a custom logo file is needed
      date: "February 2022 - July 2024", // From resume [cite: 25]
      desc: "Enhanced efficiency of ECG interpretation SaaS by 40% with a responsive React web application[cite: 26]. Achieved a 90% reduction in AI prediction latency by optimizing data streaming[cite: 28].",
      descBullets: [
        "Achieved a 10x increase in throughput throughout Epic EHR OAuth system integration[cite: 30].",
        "Cut onboarding duration from 1 day to 1 hour for five hospital sites by implementing a Docker-Kubernetes containerization solution[cite: 31]."
      ]
    },
    {
      role: "Research Contributor/Developer/Project Manager", // From resume [cite: 35]
      company: "Vertically Integrated Program, NYU", // From resume [cite: 34]
      companylogo: require("./assets/images/nyuLogo.png"), // Assuming a custom logo file is needed
      date: "January 2025 - May 2025", // From resume [cite: 36]
      desc: "Reduced clinical triage time by 90% by designing and implementing a React-based survey application for a decision-support tool[cite: 37]. Accelerated user interface iteration cycles by 50% by translating stakeholder insights into Figma prototypes[cite: 38]."
    },
    {
      role: "Software Developer Intern (Front End)", // From resume [cite: 41]
      company: "Mood Me", // From resume [cite: 40]
      companylogo: require("./assets/images/moodmeLogo.png"), // Assuming a custom logo file is needed
      date: "September 2025 - Present", // From resume [cite: 42]
      desc: "Developed Unity demos featuring Face Tracking, Emotion Detection, and AR Filters, enhancing user engagement by 30%[cite: 43]. Wrote scripts in C# and Objective-C to integrate neural network outputs into interactive applications[cite: 44]."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on (Mapped to Projects on Resume)

const bigProjects = {
  title: "Projects", // Changed to match resume section
  subtitle: "BIG DATA ANALYTICS AND SEMANTIC SEARCH PROJECTS", // Customised subtitle
  projects: [
    {
      // image: null,//require("./assets/images/neurahackLogo.webp"), // Assuming a custom logo file is needed
      projectName: "Neura-Scholar: Semantic Search & Recommendation", // From resume [cite: 48, 49]
      projectDesc: "Processed over 400,000 PDFs into 10 million chunks using a six-stage Docker-Airflow ETL pipeline. Implemented automated CI/CD for model retraining in a distributed system[cite: 52, 57].",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/riyagarg30/neurahack" // Placeholder link
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/roadriskLogo.webp"), // Assuming a custom logo file is needed
      projectName: "Road Risk & Fatality Analysis (Big-Data Analytics)", // From resume [cite: 58, 59]
      projectDesc: "Enhanced analytical accuracy by parsing and cleaning 7 GB of FARS crash data, engineering 25 features, and identifying a 0.72 correlation between speeding-related fatalities and rural roads[cite: 62].",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/riyagarg30/roadrisk-analysis" // Placeholder link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Publications 🏆 "), // Changed to match resume [cite: 67, 70]
  subtitle:
    "Recognized for team excellence and peer-reviewed publication in a conference proceeding.",

  achievementsCards: [
    // {
    //   title: "Best Team Award 2024", // From resume [cite: 71]
    //   subtitle:
    //     "Received the Best Team Award in 2024 at nference Labs Pvt. Ltd. [cite: 71]",
    //   image: require("./assets/images/bestTeamAward.webp"), // Assuming a custom logo file is needed
    //   imageAlt: "Best Team Award",
    //   footerLink: [
    //     {
    //       name: "View Award (Placeholder)",
    //       url: "#"
    //     }
    //   ]
    // },
    // {
    //   title: "Publications: Augmented Reality in Medical Training", // From resume [cite: 68]
    //   subtitle:
    //     "Paper published in Proc. 3rd Intl. Conf. MMCITRE 2022 (Springer Nature, Singapore)[cite: 68, 69].",
    //   image: require("./assets/images/publicationLogo.webp"), // Assuming a custom logo file is needed
    //   imageAlt: "Publication Logo",
    //   footerLink: [
    //     {
    //       name: "View Paper (Placeholder)",
    //       url: "#"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // display: false // Set to false to hide the section
};

// Talks Sections

const talkSection = {
  // display: false // Set to false to hide the section
};

// Podcast Section

const podcastSection = {
  // display: false // Set to false to hide the section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all[cite: 5].",
  number: "+1 (943) 265-4498", // From resume [cite: 2]
  email_address: "rg5073@nyu.edu" // Using primary email from resume [cite: 2]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set to true as you are a student/recent grad working on an internship and research [cite: 9, 36, 42]

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};