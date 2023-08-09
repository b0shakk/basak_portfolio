import {
    mobile,
    backend,
    creator,
    web,
    www,
    javascript,
    dart,
    html,
    css,
    reactjs,
    flutter,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    cpp,
    python,
    mysql,
    cryptocrowd,
    photo,
    aenigma,
    threejs,
    android,
    vng,
    hacktu,
    faps,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Photographer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "java",
      icon: java,
    },
    // {
    //   name: "cpp",
    //   icon: cpp,
    // },
    // {
    //   name: "python",
    //   icon: python,
    // },
    {
      name: "dart",
      icon: dart,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "android",
      icon: android,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Application Developer",
      company_name: "VNG Medical [Arkeo]",
      icon: vng,
      iconBg: "#383E56",
      date: "October 2022 - April 2023",
      points: [
        "Worked on the application development and database management of RFID based inventory management which can be used in the current hospital system.",
        "Worked on role based authentication of the medical staff and doctors.",
        "Tech Stack: Flutter, MongoDB",
        "Participated with the designing team to come up with the most suitable frontend design.",
      ],
    },
    {
      title: "Media Director",
      company_name: "Fine Arts and Photography Society",
      icon: faps,
      iconBg: "#383E56",
      date: "August 2021 - September 2022",
      points: [
        "Executive Board Member of the oldest and most pretigious Arts and Photography Society of Thapar Institute.",
        "Organized the Annual Exhibition of Thapar Institute and numerous photography workshops, photowalks and contests both online and offline.",
        "Heads the Social Media and Photography Department.",
      ],
    },
    {
      title: "1st Runners Up",
      company_name: "HackTU2.0",
      icon: hacktu,
      iconBg: "#383E56",
      date: "February 2021",
      points: [
        "Worked on the development of an encrypted keyboard for secure communication through any text based chat/messaging platform.",
        "Implemented Advanced Encryption Standard [AES] with custom key-based encryption of the text message.",
        "Tech Stack: Java, Android Studio",
        "Participated in discussions with team members to come up with the most suitable cryptographic logic.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "BE",
      name: "Thapar Institute of Engineering and Technology",
      designation: "2020 - 2024",
      company: "Electronics and Computer Engineering",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "Higher Secondary",
      name: "Don Bosco School",
      designation: "2020",
      company: "ISC Science",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "Secondary",
      name: "Don Bosco School",
      designation: "2018",
      company: "ICSE",
      image: "data:image/jpeg;base64,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",
    },
  ];
  
  const projects = [
    {
      name: "AEnigma",
      description:
        "An Android Keyboard that enables encrypted communication through any text-based chat/messaging application. Encryption is done using AES according to custom keys.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android-studio",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: aenigma,
      source_code_link: "https://github.com/b0shakk/AEnigma",
      website_link: "https://devfolio.co/projects/aenigma-8ea0",
    },
    {
      name: "CryptoCrowd",
      description:
        "Web application that enables users to create public campaigns for the purpose of raising funds for a good cause. Donations can be made using Ethereum.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: cryptocrowd,
      source_code_link: "https://github.com/b0shakk/CryptoCrowd",
      website_link: "https://cryptocrowdfunding.netlify.app/",
    },
    {
      name: "Photography Portfolio",
      description:
        "Web application to showcase my photography and editing skills to find gigs and passion-projects in the market of content creation.",
      tags: [
        {
          name: "flutter-web",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: photo,
      source_code_link: "https://github.com/b0shakk/treffy",
      website_link: "https://treffy.netlify.app/#/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };