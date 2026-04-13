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
  welcome: "Hi I am",
  name: "Muhammad Umair",
  designationLine1: "UI & UX",
  designationLine2: "Designer",
  description:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
  btnLink: "#contact",
  img: heroImgWithShape,
};
export const getAboutData = {
  sectionTitle: "About Me",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
  img: aboutImgWithShape,
  alt: "Muhammad Umair",
  skills: [
    {
      name: "UX",
      percentage: 90,
    },
    {
      name: "Website Design",
      percentage: 70,
    },
    {
      name: "Design",
      percentage: 95,
    },
    {
      name: "Graphic Design",
      percentage: 88,
    },
  ],
};
export const getServicesData = {
  sectionTitle: "Services",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
  services: [
    {
      icon: serviceIcon1,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: serviceIcon2,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: serviceIcon3,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: serviceIcon4,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ],
};
export const getProjectData = {
  sectionTitle: "My Projects",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus",
  projects: [
    
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg1,
      liveUrl: "#",
      category: "App Design",
    },
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg2,
      liveUrl: "#",
      category: "App Design",
    },
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg3,
      liveUrl: "#",
      category: "UI/UX",
    },
    
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg4,
      liveUrl: "#",
      category: "UI/UX",
    },
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg5,
      liveUrl: "#",
      category: "Web Design",
    },
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg6,
      liveUrl: "#",
      category: "Web Design",
    },
   
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg7,
      liveUrl: "#",
      category: "Graphic Design",
    },
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg8,
      liveUrl: "#",
      category: "Graphic Design",
    },
    {
      id: crypto.randomUUID(),
      title: "AirCalling Landing Page UI",
      img: projectImg9,
      liveUrl: "#",
      category: "Graphic Design",
    },
  ],
};
export const getTestimonialData = {
  sectionTitle: "Testimonials",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
  testimonials: [
    {
      name: "Tanjila",
      designation: "Manager",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg2,
    },
    {
      name: "Naim",
      designation: "CEO",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg1,
    },
    {
      name: "Rasel",
      designation: "Developer",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg1,
    },
    {
      name: "Sagor",
      designation: "HR",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg2,
    },
    
    {
      name: "Tanjila",
      designation: "Manager",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg2,
    },{
      name: "Naim",
      designation: "CEO",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg1,
    },
    {
      name: "Rasel",
      designation: "Developer",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg1,
    },
    {
      name: "Sagor",
      designation: "HR",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      img: userImg2,
    },
  ],
};
export const getCTAData = {
  sectionTitle: "Lets Design Together",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
};
