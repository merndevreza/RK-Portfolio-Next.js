import heroImgWithShape from "@/public/assets/hero-with-shape.png";
import aboutImgWithShape from "@/public/assets/about-with-shape.png";
import serviceIcon1 from "@/public/assets/service1.png";
import serviceIcon2 from "@/public/assets/service2.png";
import serviceIcon3 from "@/public/assets/service3.png";
import serviceIcon4 from "@/public/assets/service4.png";
import projectImg1 from "@/public/assets/projects/project1.png";
import projectImg2 from "@/public/assets/projects/project2.png";
import projectImg3 from "@/public/assets/projects/project3.png";
import projectImg4 from "@/public/assets/projects/project4.png";
import projectImg5 from "@/public/assets/projects/project5.png";
import projectImg6 from "@/public/assets/projects/project6.png";
import projectImg7 from "@/public/assets/projects/project7.png";
import projectImg8 from "@/public/assets/projects/project8.png";
import projectImg9 from "@/public/assets/projects/project9.png";
import userImg1 from "@/public/assets/user1.png";
import userImg2 from "@/public/assets/user2.png";
export const getHeroData = {
  welcome: "Hi, I am",
  name: "Rezaul Karim",
  designationLine1: "Next.js",
  designationLine2: "Developer",
  description:
    "Frontend-heavy Full-Stack Developer with 5+ years of experience building scalable SaaS dashboards, secure authentication systems, and high-performance web applications using the Next.js ecosystem.",
  btnLink: "#contact",
  img: heroImgWithShape, // Replace with your professional headshot
};

export const getAboutData = {
  sectionTitle: "About Me",
  subtitle:
    "I specialize in building modern, production-ready applications with React, TypeScript, and Node.js. With a proven track record of delivering 95+ projects and working with US-based remote teams, I focus on clean architecture and performance optimization.",
  img: aboutImgWithShape,
  alt: "Rezaul Karim - Next.js Developer",
  skills: [
    {
      name: "React & Next.js",
      percentage: 98,
    },
    {
      name: "TypeScript",
      percentage: 90,
    },
    {
      name: "MERN-Stack",
      percentage: 85,
    },
    {
      name: "Authentication & Security",
      percentage: 96,
    },
    {
      name: "Performance & SEO",
      percentage: 98,
    },
  ],
};

export const getServicesData = {
  sectionTitle: "Expertise",
  subtitle:
    "Delivering high-quality software solutions tailored for performance, security, and scalability.",
  services: [
    {
      icon: serviceIcon1,
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and SEO-optimized interfaces using Tailwind CSS, Shadcn/ui, and Framer Motion.",
    },
    {
      icon: serviceIcon2,
      title: "SaaS & Dashboards",
      description:
        "Developing complex internal tools and SaaS platforms with real-time data visualization and automated workflows.",
    },
    {
      icon: serviceIcon3,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development using the MERN stack and Next.js Server Actions with secure database integration.",
    },
    {
      icon: serviceIcon4,
      title: "Auth & Security",
      description:
        "Implementing robust security with NextAuth, JWT, HttpOnly cookies, and Role-Based Access Control (RBAC).",
    },
  ],
};

export const getProjectData = {
  sectionTitle: "Featured Projects",
  subtitle:
    "A selection of my recent work, ranging from AI-powered platforms to complex SaaS dashboards.",
  projects: [
    {
      id: crypto.randomUUID(),
      title: "Team Pulse - Recognition Platform",
      img: projectImg1,
      liveUrl: "#", // Add your link
      category: "Full-Stack",
    },
    {
      id: crypto.randomUUID(),
      title: "Meter Watch - SaaS Dashboard",
      img: projectImg2,
      liveUrl: "#", // Add your link
      category: "Next.js",
    },
    {
      id: crypto.randomUUID(),
      title: "Book Nest - E-Commerce",
      img: projectImg3,
      liveUrl: "#", // Add your link
      category: "MERN Stack",
    },
    {
      id: crypto.randomUUID(),
      title: "AI-Powered Feedback Tool",
      img: projectImg4,
      liveUrl: "#",
      category: "AI Integration",
    },
    {
      id: crypto.randomUUID(),
      title: "Location Finder App",
      img: projectImg5,
      liveUrl: "#",
      category: "React / Redux",
    },
    {
      id: crypto.randomUUID(),
      title: "Internal Business Management",
      img: projectImg6,
      liveUrl: "#",
      category: "Full-Stack",
    },
  ],
};

export const getTestimonialData = {
  sectionTitle: "Recommendations",
  subtitle:
    "Trusted by industry leaders and clients for delivering exceptional code quality and reliability.",
  testimonials: [
    {
      name: "Patricia Montecchiarini",
      designation: "Head of Development, Lexaeon",
      review:
        "Rezaul is an exceptional developer who led our frontend architecture and delivered over 30 production applications with consistent quality.",
      img: userImg1,
    },
    {
      name: "Sumit Saha",
      designation: "Founder, Learn With Sumit",
      review:
        "A highly skilled and dedicated developer with a deep understanding of the React and Next.js ecosystem.",
      img: userImg2,
    },
    {
      name: "Fiverr Client",
      designation: "Verified Client",
      review:
        "Exceptional work on my e-commerce project. The performance and attention to detail surpassed my expectations.",
      img: userImg1,
    },
  ],
};

export const getCTAData = {
  sectionTitle: "Let’s Build Something Great Together",
  subtitle:
    "Currently open to remote opportunities and international relocation. Let's discuss how I can contribute to your team.",
};