import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/assets/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={logoImg}
        alt="Mumair Logo"
        className="h-[40px] 2xl:h-[66px] w-auto"
      />
      <span className="font-logo text-3xl 2xl:text-5xl text-[#1E1E1E] dark:text-white">
        <span className="font-bold">M</span>umair
      </span>
    </Link>
  );
};

export default Logo;
