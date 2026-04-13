
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

const DownloadCV = ({ className }) => {
  return (
    <Link className={className && className} href="#" download>
      <ButtonPrimary className="w-full sm:w-auto">Download CV</ButtonPrimary>
    </Link>
  );
};

export default DownloadCV;
