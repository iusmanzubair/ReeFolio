import type { Config } from '../Components/NeoSpark/types/portfolio';

export const portfolioConfig: Config = {
  sections: [
    {
      type: "hero",
      data: {
        name: "Jake Ryan",
        badge: {
          texts: ["Open to work", "Available for freelance", "Let's Collaborate!"],
          isVisible: true
        },
        actions: [
          { url: "#projects", type: "button", label: "View Projects", style: "primary" },
          { url: "#contact", type: "button", label: "Contact Me", style: "outline" }
        ],
        summary: "Highly motivated and skilled Full-Stack Developer with experience in Python, Java, and JavaScript frameworks like React and Flask, seeking a challenging role to leverage my expertise in building scalable and robust applications.",
        titlePrefix: "Full Stack",
        titleSuffixOptions: ["Engineer", "Developer", "Software Engineer"]
      }
    },
    {
      type: "projects",
      sectionTitle: "My Projects",
      sectionDescription: "Some cool things that i have worked on.",
      data: [
        {
          liveLink: "https://project-demo.vercel.app",
          techStack: [
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", name: "Flask" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" }
          ],
          githubLink: "https://github.com/user/project",
          projectName: "Gitlytics",
          projectImage: "https://gitlytics.com/assets/images/homepage2.png",
          projectTitle: "Gitlytics",
          projectDescription: "Developed a full-stack web application with Flask serving a REST API and React as the frontend. Implemented GitHub OAuth to get data and visualized GitHub data to show collaboration. Used Celery and Redis for asynchronous tasks."
        },
        {
          liveLink: "https://project-demo.vercel.app",
          techStack: [
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" }
          ],
          githubLink: "https://github.com/user/project",
          projectName: "Weather API Project",
          projectImage: "https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App.png",
          projectTitle: "Weather API Project",
          projectDescription: "Developed a React.js application that fetches and displays weather data using a public weather API. Implemented features for searching locations and displaying various weather parameters."
        }
      ]
    },
    {
      type: "experience",
      sectionTitle: "Professional Experience",
      sectionDescription: "My journey in the industry",
      data: [
        {
          role: "Undergraduate Research Assistant",
          endDate: "Present",
          location: "College Station, TX",
          startDate: "06/2020",
          techStack: [
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", name: "Flask" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js" },
            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" }
          ],
          companyName: "Texas A&M University",
          description: "Developed a REST API using FastAPI and PostgreSQL to store data. Developed a full-stack web application using Flask, React, PostgreSQL, and Docker to analyze GitHub data. Explored ways to visualize GitHub collaboration in a classroom setting."
        },
        {
          role: "IT Support Specialist",
          endDate: "Present",
          location: "Georgetown, TX",
          startDate: "09/2018",
          techStack: [],
          companyName: "Southwestern University",
          description: "Communicated with managers to set up campus computers. Assessed and troubleshooted computer problems. Maintained upkeep of computers, classroom equipment, and 200 printers."
        },
        {
          role: "AI Research Assistant",
          endDate: "07/2019",
          location: "Georgetown, TX",
          startDate: "05/2019",
          techStack: [
             { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
             { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" }
          ],
          companyName: "Southwestern University",
          description: "Explored methods to generate video game dungeons. Developed a game in Java to test the generated dungeons. Contributed to an established codebase and conducted a human subject study."
        }
      ]
    },
    {
      type: "technologies",
      sectionTitle: "Technical Skills",
      sectionDescription: "A comprehensive list of technologies and tools I work with.",
      data: [
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "R" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", name: "Flask" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
        { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" }
      ]
    },
    {
      type: "userInfo",
      sectionTitle: "Let's Work Together!",
      sectionDescription: "Interested in collaborating, hiring, or just having a chat? Reach out to me on your favorite platform!",
      data: {
        name: "Jake Ryan",
        email: "jake@su.edu",
        title: "Full Stack Engineer",
        github: "github.com/jake",
        linkedin: "linkedin.com/in/jake",
        location: "San Francisco, CA"
      }
    }
  ]
};