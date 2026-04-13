import Logo from "../Logo";
import NavigationLinks from "../NavigationLinks";
import SocialProfiles from "../SocialProfiles";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
   const navLinks = [
      {
        id: crypto.randomUUID(),
        name: "Home",
        url: "/",
      },
      {
        id: crypto.randomUUID(),
        name: "About me",
        url: "#about",
      },
      {
        id: crypto.randomUUID(),
        name: "Services",
        url: "#services",
      },
      {
        id: crypto.randomUUID(),
        name: "Projects",
        url: "#projects",
      },
      {
        id: crypto.randomUUID(),
        name: "Testimonials",
        url: "#testimonials",
      },
      {
        id: crypto.randomUUID(),
        name: "Contact",
        url: "#contact",
      },
    ]; 
   return (
      <footer className="">
         <div className="bg-offwhite dark:bg-transparent text-center flex flex-col justify-center items-center gap-12 py-16">

         <Logo/>
         <NavigationLinks paths={navLinks}/>
         <SocialProfiles/>
         </div>
         <FooterCopyright year={2023} admin="Mumair" info="All Rights Reserved , Inc."/>
      </footer>
   );
};

export default Footer;