import Logo from "../Logo";
import NavigationLinks from "../NavigationLinks";
import DarkLight from "./DarkLight";
import DownloadCV from "./DownloadCV";
import HeaderFixedTop from "./HeaderFixedTop";
import MobileHamburger from "./MobileHamburger";

const Header = () => {
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
    <HeaderFixedTop>
      <div className="container">
        <div className="flex justify-between items-center ">
          <MobileHamburger paths={navLinks} className="block lg:hidden" />
          <Logo />
          <div className="flex justify-end items-center gap-2 lg:gap-4">
            <NavigationLinks className="hidden lg:block" paths={navLinks} />
            <DarkLight />
            <DownloadCV className="hidden sm:inline-block" />
          </div>
        </div>
      </div>
    </HeaderFixedTop>
  );
};

export default Header;
