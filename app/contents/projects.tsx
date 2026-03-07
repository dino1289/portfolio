type Project = {
  title: string;
  overview: string;
  problem: string;
  solution: string;
  demoLink?: string;
  demoLinkLabel?: string;
  githubRepoLink?: string;
  tech: string;
  images: string[];
};

export const projects: Project[] = [
  {
    title: "Wasabi Farming Management App (Bachelor Thesis)",
    overview:
      "Developed a mobile application for wasabi farmers in Shizuoka, Japan to help monitor cultivation and harvest.",

    problem:
      "Japan’s agricultural workforce is rapidly aging, with nearly 60% of farmers over the age of 65. As eyesight, reaction speed, and physical stamina decline, it becomes increasingly difficult to monitor crops closely and detect disease in time.",

    solution:
      "Developed a mobile application that allows farmers to monitor their crops and identify sick wasabi leaves earlier, helping prevent waste and reduce the risk of crop failure.",

    demoLink:
      "https://docs.google.com/document/d/1-AWNX-UgqNro4LMG2SynaI-PMgRPmYm4/edit",
    demoLinkLabel: "View Thesis (EN)",

    githubRepoLink: "",

    tech: "Google Colab · Python · Java · LLM · Android ",
    images: [
      "/wasabiprocess.png",
      "/wasabi1.png",
      "/wasabi2.png",
      "/wasabi3.png",
      "/wasabi4.png",
      "/wasabi5.png",
      "/wasabi6.png",
      "/wasabi7.png",
      "/wasabi8.png",
      "/wasabi9.png",
      "/wasabi10.jpg",
      "/wasabi11.jpg",
      "/wasabi12.jpg",
      "/wasabi13.jpg",
      "/wasabi14.jpg",
      "/wasabi15.jpg",
      "/wasabi16.jpg",
    ],
  },

  {
    title: "Peoples — Study Community App",

    overview:
      "Teamed up with six members to develop a mobile application for a startup in Seoul that connects students who want to study together.",

    problem:
      "Students often struggle to find consistent study partners or communities for job interview preparation, tech meetups, language learning, and 'mogakko' (independent group coding sessions).",

    solution:
      "Developed a mobile platform where students can organize study sessions, check in to meetings in real time, track attendance, and stay motivated through group learning.",

    demoLink:
      "https://mountain-bovid-6db.notion.site/Do-you-still-manage-study-sessions-with-Excel-Peoples-is-here-to-help-8617df571a654fd0b213ad7a05ce19f3",
    demoLinkLabel: "Project Description",
    githubRepoLink: "https://github.com/dino1289/PeoplesNew",

    tech: "Kotlin · Java · Springboot · Compose",
    images: ["/peoples1.png", "/peoples2.png", "/peoples3.png"],
  },

  {
    title: "Korean Language Learning Platform",

    overview:
      "Developed an online learning platform where Korean language learners can ask questions and share knowledge about Korean language and culture.",

    problem:
      "Large communities such as Reddit allow discussions but are not optimized for structured learning or reviewing previously discussed topics.",

    solution:
      "Created a platform where discussions become organized learning resources. An integrated AI quiz generator helps learners reinforce knowledge based on community discussions.",

    demoLink: "https://rollooverflow.com",
    demoLinkLabel: "Visit Platform",
    githubRepoLink: "https://github.com/dino1289/rolloblog",

    tech: "Next.js · Tailwind · Shadcn UI · Firebase · Claude API · Vercel · Google Analytics",
    images: ["/rollo1.png", "/rollo2.jpg", "/rollo3.jpg"],
  },

  {
    title: "Germany–Korea Cross-Border Shopping App",

    overview:
      "Developed mobile apps enabling Korean customers to browse and purchase popular products from Germany.",

    problem:
      "Major marketplaces such as Coupang or Naver Shopping charge high seller fees and often provide limited transparency for international shipping.",

    solution:
      "Built a mobile platform allowing customers to shop curated German products with simplified customs information and transparent real-time shipping tracking.",

    demoLink: "https://rollooverflow.com",
    demoLinkLabel: "Project Description",
    githubRepoLink: "https://github.com/dino1289/desalary",

    tech: "Kotlin (Compose Multiplatform) · Firebase · SwiftUI",
    images: ["/peoples1.png", "/peoples2.png", "/peoples3.png"],
  },
];
