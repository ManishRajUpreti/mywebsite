// This array will hold information about your projects.
// As you complete projects, add objects here with details like:
// {
//   id: 1,
//   title: "Your Project Title",
//   description: "A brief overview of your project.",
//   subDescription: [
//     "Key feature 1",
//     "Key feature 2",
//     "Key feature 3",
//   ],
//   href: "Link to your live project or GitHub repo",
//   logo: "Path to a logo for the project (optional)",
//   image: "/assets/projects/your-project-image.jpg", // Path to a screenshot or image
//   tags: [
//     { id: 1, name: "Technology 1", path: "/assets/logos/tech1.svg" },
//     { id: 2, name: "Technology 2", path: "/assets/logos/tech2.svg" },
//   ],
// },
// constants/index.js

export const myProjects = [
  // ... your existing projects
  {
    id: 1,
    title: "MindSpace",
    description: "A collaborative web application where users can save memories and create an AI chatbot based on them. Other users can then interact with the chatbot to learn about the owner's story, character, and personality.",
    subDescription: [
      "We worked on the core functionality, including the user authentication system, memory management, and integrating the Gemini API for the chatbot responses.",
      "This project was a major team effort, and I'm proud of the collaboration and problem-solving we did together.",
      "The front-end was built with React and Tailwind CSS for a modern, responsive design, while the back-end used Node.js and Express.",
    ],
    href: "#", // Placeholder for now, you can add the URL later
    image: "assets/projects/mindspace.png", // You'll need to add a preview image in this location
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "assets/logos/nodejs.svg" },
      { id: 3, name: "Express", path: "assets/logos/express.png" },
      { id: 4, name: "Gemini API", path: "assets/logos/gemini.png" },
      { id: 5, name: "Tailwind CSS", path: "assets/logos/tailwindcss.svg" },
    ],
    team: [
      { name: "Manish Raj Upreti" },  
      { name: "Bishal Bista" },
      { name: "Kshitiz Upadhayaya" },
      { name: "Avinash Pandeya" },
    ],
    borderColor: "border-blue-500",
  },
];

// This array will hold links to your social media profiles.
// Add objects here with details like:
// {
//   name: "Platform Name (e.g., LinkedIn, GitHub)",
//   href: "Your profile URL",
//   icon: "/assets/socials/platform-icon.svg", // Path to the icon for the platform
// },
export const mySocials = [];

// This array will hold your work experiences.
// Add objects here with details like:
// {
//   title: "Your Role (e.g., Intern, Junior Developer)",
//   job: "Company/Organization Name",
//   date: "Start Date - End Date (e.g., 2023 - 2024)",
//   contents: [
//     "Responsibility or achievement 1",
//     "Responsibility or achievement 2",
//     "Responsibility or achievement 3",
//   ],
// },
export const experiences = [];

// This array will hold testimonials or reviews.
// As you get feedback, add objects here with details like:
// {
//   name: "Client's Name",
//   username: "@clientusername (optional)",
//   body: "Their review or testimonial.",
//   img: "URL to their profile picture or a placeholder image",
// },
export const reviews = [];
