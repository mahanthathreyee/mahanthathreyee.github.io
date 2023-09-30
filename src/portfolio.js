/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maganth",
  title: "Hi all, I'm Maganth Seetharaman",
  subTitle: emoji(
    "Passionate software engineer with a track record of optimizing software and enhancing user experiences, ready to showcase a portfolio of innovative projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12NNrkd7akUy5DXx6ZIWoVUSHXS8H_mCn", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mahanthathreyee",
  linkedin: "https://www.linkedin.com/in/mahanthathreyee/",
  gmail: "seetharm@uci.edu",
  codepen: "https://codepen.io/mahanthathreyee",
  leetcode: "https://leetcode.com/mahanthathreyee",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-line"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "devicon-spring-plain"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "devicon-apachekafka-original"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "devicon-kubernetes-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Irvine",
      logo: require("./assets/images/uciLogo.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "September 2022 - April 2024",
      desc: "",
      coursework: "Network Systems, Distributed Systems, and Operating Systems",
      descBullets: [
        "Conducting research project under Prof. Sangeetha Abdu Jyothi to understand the impact of IXPs in the internet",
        "Made significant contributions towards a research project supervised by Prof. Athina Markopolou on the privacy of smart IoT devices through performing data collection of network traffic and aiding in fingerprinting methods.",
        "Gained hands-on experience with projects such as P2P File Discovery Service, Hadoop Architecture Analysis, and Quality of Service (QoS) analysis of congestion mechanisms",
      ]
    },
    {
      schoolName: "SASTRA University, India",
      logo: require("./assets/images/sastraLogo.png"),
      subHeader: "Bachelor of Technology in Information and Communication Technology",
      duration: "July 2016 - July 2020",
      desc: "",
      coursework: "Analysis of Algorithms, Operating Systems, Computer Networks, Cloud Computing, Machine learning, and Optimization Techniques",
      descBullets: [
        "Volunteered in research related image segmentation using hypergraphs"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "50%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DTEI Scholar",
      company: "UCI",
      companylogo: require("./assets/images/uciLogo.png"),
      date: "Jun 2023 – Present",
      desc: "Collaborated with a team of four members to improve ICS 32 course autograder",
      descBullets: [
        "Enhanced the autograder by implementing multiprocessing, resulting in a 93% reduction in processing time.",
        "Implemented test abstraction for seamless test management, including addition, modification, and deletion.",
        "Implemented a scoring pipeline to enable flexible ordering of tests for submission evaluation."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "UCI",
      companylogo: require("./assets/images/uciLogo.png"),
      date: "Jan 2023 – Jun 2023",
      desc: "Assisted for course ICS 121: Information Retrieval",
      descBullets: [
        "Assisted students with their assignments and projects during designated discussion hours.",
        "Conducted interviews with students to assess their comprehension and thought processes throughout project development.",
        "Developed scripts to streamline assignment verification and simplify grade submission processes."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "MindStaq - Citta LLC",
      companylogo: require("./assets/images/mindstaqLogo.png"),
      date: "Mar 2022 – Sep 2022",
      desc: "Worked on messaging, desktop notifications, and job scheduling",
      descBullets: [
        "Optimized the notification throughput time by 20% by improving the overall code complexity and maintainability.",
        "Developed notification delivery system using Bull JS, incorporating MongoDB and Redis for configuration storage and caching.",
        "Migrated the desktop notification service to Pusher Beam and integrated the new service to the Angular-based webapp."
      ]
    },
    {
      role: "Software Engineer",
      company: "Freshworks Inc",
      companylogo: require("./assets/images/freshworksLogo.png"),
      date: "Oct 2020 - Mar 2022",
      desc: "Contributed to optimizing application, including performance, security, containerization, and monitoring",
      descBullets: [
        "Improved customer onboarding by integrating WhatsApp Signup, reducing manual work by over 80%.",
        "Implemented Prometheus for collecting application metrics and used Grafana for data visualization.",
        "Enhanced code quality and efficiency by integrating static analysis with SonarQube and automating testing for pull requests using GitHub actions."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Freshworks Inc",
      companylogo: require("./assets/images/freshworksLogo.png"),
      date: "Dec 2019 – Oct 2020",
      desc: "Enhanced efficiency and scalability through migration, tool development, and test coverage expansion",
      descBullets: [
        "Improved event service by migrating from Kafka to AWS SQS, boosting throughput by 20% and reducing costs.",
        "Developed WhatsApp dashboard, speeding up business number provisioning by 25%.",
        "Expanded test coverage by 60% with JUnit and Mockito, strengthening quality assurance."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "CFM Training Center",
      companylogo: require("./assets/images/cfmLogo.png"),
      date: "Mar 2019 – Jun 2020",
      desc: "Redesigned the web-based offline testing platform",
      descBullets: [
        "Created frontend web pages catering to different access levels for both instructors and students.",
        "Enforced compliance with testing standards to minimize cheating incidents.",
        "Implemented automated report generation and delivered analytics on various metrics for trend analysis.",
        "Secured sensitive data through AES and Argon2id encryption protocols"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "INTERESTING PROJECTS I WORKED ON",
  projects: [
    {
      image: require("./assets/images/uciLogo.png"),
      projectName: "Network Traffic Analysis",
      projectDesc: "Under the guidance Prof. Athina Markopolou, Dr. Janus Vanmarken and, Dr. Rahmadi Trimananda, developed an application for collecting network traffic samples from smart devices to identify network fingerprints, along with a script for preprocessing and validation",
      technology: "fab fa-aws",
      footerLink: [
        {
          name: "Website",
          url: "https://athinagroup.eng.uci.edu/nsf/nsf-18156662/"
        }
      ]
    },
    {
      image: require("./assets/images/ns3Logo.png"),
      projectName: "QoS Analysis of TCP Mechanisms",
      projectDesc: "Conducted research on congestion control mechanisms in computer networks, implementing custom simulations and performance analysis to better understand QoS.",
      technology: "fab fa-aws",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/mahanthathreyee/qos-congestion-control-simulation"
        },
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1s1ndb_8TrW8f_n-HG_-7hzpgEptZvZNT"
        }
      ]
    },
    {
      image: require("./assets/images/strava.png"),
      projectName: "Strava Privacy Analysis",
      projectDesc: "Explored privacy vulnerabilities in fitness app Strava by analyzing publicly available user activity data, spatial clustering, and temporal patterns, highlighting potential risks and proposing countermeasures for enhanced privacy.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/RahulJois/strava-privacy-analysis"
        },
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1J4FJU5CDWPazLRjb4iKWUjq5r-OfWGfP"
        }
      ]
    },
    {
      image: require("./assets/images/p2pDistributed.png"),
      projectName: "Distributed P2P File Discovery Service",
      projectDesc: "Created a secure decentralized file discovery and sharing system, utilizing P2P networks, Flask for the backend server, and implementing advanced security features like tree-based group Diffie-Hellman key generation.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/mahanthathreyee/p2p_discovery_network"
        },
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1C0HWQtDHL3uOkgYkWmffPmPauoJC1z1a"
        }
      ]
    },
    {
      image: require("./assets/images/hadoopLogo.png"),
      projectName: "Architecture Analysis of Hadoop",
      projectDesc: "This project sought to understand the architecture of Hadoop Distributed File System through source code analysis, initially utilizing tools like ARCADE and Javex.",
      footerLink: [
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1V3nZragLgFKbHM-0zYO_-lj_YOyrurJO"
        }
      ]
    },
    {
      image: require("./assets/images/openposeLogo.png"),
      projectName: "GamePose",
      projectDesc: "An open-source real-time multi-person 2D pose estimation system, to create an interactive game-play experience where players control in-game characters through limb movement and posture, enhancing immersion and interactivity",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/mahanthathreyee/GamePose"
        },
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1nMzbwQbTpnNNFiKODIiT3IhyqD457ryZ"
        }
      ]
    },
    {
      image: require("./assets/images/sastraLogo.png"),
      projectName: "SASTRA Student Magazine",
      projectDesc: "Revamped the student magazine to easily access student magazine issues, with smooth page transitions and captivating text animations for an interactive experience.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/mahanthathreyee/SASTRA-Student-Magazine"
        },
        {
          name: "Website",
          url: "https://sastra.edu/illuminati/"
        }
      ]
    },
    {
      image: require("./assets/images/sastraLogo.png"),
      projectName: "Image Segmentation using Hypergraphs",
      projectDesc: "Replicated and aimed to optimize an existing algorithm with O(N³) complexity while delving into hypergraph-related research and alternative algorithms.",
      technology: "fab fa-aws",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "",
  achievementsCards: [
    {
      title: "2nd in Freshworks Hackathon",
      subtitle: "Ranked 2nd in Freshworks Platforms Internal Hackathon, which led to a promotion to Software Engineer at Freshworks",
      image: require("./assets/images/freshworksLogo.png"),
      imageAlt: "Freshworks Inc",
      footerLink: []
    },
    {
      title: "Craftsmanship",
      subtitle: "Received the award from Freshworks for demonstrating great skillset and consistently delivering clean and efficient code",
      image: require("./assets/images/freshworksLogo.png"),
      imageAlt: "Freshworks Inc",
      footerLink: []
    },
    {
      title: "Quality of Work",
      subtitle: "Received the award for successfully launching the WhatsApp Business integration with Freshchat",
      image: require("./assets/images/freshworksLogo.png"),
      imageAlt: "Freshworks Inc",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (949) 573-6913",
  email_address: "seetharm@uci.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
