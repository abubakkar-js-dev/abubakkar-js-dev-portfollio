export const projectsData = [
  {
    _id: "do-and-earn",
    name: "Do & Earn – Micro Task Platform",
    description: "Do & Earn is a comprehensive micro-task earning platform designed to connect Buyers and Workers efficiently. The platform empowers Admins with robust tools to manage users and tasks, ensuring a safe and productive environment. It features role-based access control, secure payment processing via Stripe, and dynamic dashboards for all user types.",
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Ant Design", "Stripe", "Firebase", "Recharts"
    ],
    imageUrl: "/images/do-earn.png",
    liveLink: "https://do-and-earn-9b707.web.app/",
    githubLink: "#",
    category: "Full Stack",
    credentials: {
      username: "johndoe@gmail.com",
      password: "Ab1234@"
    },
    features: [
      {
        title: "Role-Based Access Control",
        description: "Distinct dashboards and permissions for Workers, Buyers, and Admins with secured frontend and backend access."
      },
      {
        title: "Dynamic Dashboards",
        description: "Personalized analytics and statistics for each user role using React Recharts."
      },
      {
        title: "Stripe Payment Gateway",
        description: "Secure coin purchase system for Buyers to post tasks and manage requirements."
      },
      {
        title: "Task Management System",
        description: "Buyers can create and manage tasks, while Workers can view, submit, and track their work."
      },
      {
        title: "Earnings & Withdrawals",
        description: "Transparent earning tracking for workers with streamlined withdrawal options."
      },
      {
        title: "Admin Controls",
        description: "Comprehensive tools for admins to manage users, tasks, and view platform analytics."
      }
    ],
    challenges: "Implementing a secure multi-role authentication system alongside real-time financial transactions was complex. Ensuring data consistency across different user dashboards while handling concurrent task submissions required careful optimization of the backend logic.",
    futurePlans: "We plan to introduce a mobile application for on-the-go task management and earning. Additionally, more granular task filtering and AI-based task recommendations are on the roadmap.",
    videoUrl: "" 
  },
  {
    _id: "task-bros",
    name: "TaskBros – Service Sharing",
    description: "TaskBros is a modern service-sharing web application that enables users to seamlessly create, manage, and discover services. Built with a focus on usability and performance, it allows users to share their expertise or find the help they need within a secure environment.",
    technologies: [
      "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "JWT"
    ],
    imageUrl: "/images/task-bros.png",
    liveLink: "#",
    githubLink: "#",
    category: "Web App",
    features: [
      {
        title: "User Authentication",
        description: "Robust security using Firebase Authentication combined with JWT for session management."
      },
      {
        title: "Service Management",
        description: "Full CRUD capabilities for users to create, update, and delete their service listings."
      },
      {
        title: "Advanced Search",
        description: "Efficient keyword-based search functionality to help users find specific services quickly."
      },
      {
        title: "Private Routes",
        description: "Protected routes ensuring that sensitive actions are restricted to authorized users only."
      },
      {
        title: "Responsive Design",
        description: "A fully responsive user interface built with Tailwind CSS, compatible with all device sizes."
      }
    ],
    challenges: "Designing a schema that balances flexibility for different service types with structured data for searchability was a key challenge. Implementing efficient search queries on MongoDB to ensure fast response times as the dataset grows was also a priority.",
    futurePlans: "Integration with third-party booking systems to allow direct scheduling. We also aim to implement a real-time chat feature for potential clients to communicate with service providers.",
    videoUrl: ""
  },
  {
    _id: "cinenest",
    name: "CineNest – Movie Portal",
    description: "CineNest is a dynamic movie portal that offers users an immersive way to explore, manage, and curate their favorite films. With a focus on personalization, it allows users to build their own movie libraries and interact with movie data seamlessly.",
    technologies: [
      "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase Auth", "Firebase Hosting"
    ],
    imageUrl: "/images/cinenest.png",
    liveLink: "#",
    githubLink: "#",
    category: "Frontend",
    features: [
      {
        title: "User Authentication",
        description: "Secure sign-up and log-in functionality for personalized user experiences."
      },
      {
        title: "Dynamic Movie Management",
        description: "Intuitive tools for users to creating and managing their personal movie lists."
      },
      {
        title: "Favorites Collection",
        description: "Dedicated section for users to save and quickly access their favorite movies."
      },
      {
        title: "Robust Backend",
        description: "Secure and efficient data handling via a Node.js and Express backend."
      },
      {
        title: "Responsive Interface",
        description: "Seamless browsing experience across desktop, tablet, and mobile devices."
      }
    ],
    challenges: "Optimizing the integration with external movie APIs to fetch data without latency. Managing the state of user favorites across sessions required a robust synchronization strategy between the frontend and the database.",
    futurePlans: "Introducing social features where users can share their lists and write reviews. We are also exploring dark/light mode themes and personalized movie recommendations.",
    videoUrl: ""
  }
];
