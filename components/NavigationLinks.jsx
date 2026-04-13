import Link from "next/link";

const NavigationLinks = ({ paths, className, mobileVertical }) => {
  return (
    <nav className={className}>
      <ul className={`flex gap-1 ${mobileVertical ? "flex-col" : "flex-wrap justify-center "}`}>
        {paths.map((path) => (
          <li key={path?.id}>
            <Link className={`text-base xl:text-[21px] py-[10px] hover:text-primary ${mobileVertical ? "px-0" : " px-2 xl:px-3 "}`} href={path?.url}>{path?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
