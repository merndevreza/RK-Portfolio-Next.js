import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";
// import SocialProfiles from "../SocialProfiles";
import ExtraMargin from "./ExtraMargin";
const HeroSection = ({ heroData }) => {
  return (
    <ExtraMargin>
      <div className="container grid lg:grid-cols-10 items-center gap-4 pb-[40px] lg:pb-[70px] pt-[60px] lg:pt-[120px]">
        <div className="lg:col-span-6 order-2 lg:order-1 text-center lg:text-left">
          <h1 className="space-y-2">
            <span className="block font-semibold md:text-2xl">
              {heroData?.welcome}
            </span>
            <span className="block font-semibold text-2xl md:text-[32px] text-primary  leading-none">
              {heroData?.name}
            </span>
            <span className="block font-bold text-[48px] md:text-[60px] lg:text-[80px] 2xl:text-[100px] leading-none">
              {heroData?.designationLine1}
            </span>
            <span className="block font-bold text-[48px] md:text-[60px] lg:text-[80px] 2xl:text-[100px] lg:pl-[185px] 2xl:pl-[230px] -mt-2 lg:-mt-6 leading-none">
              {heroData?.designationLine2}
            </span>
          </h1>
          <p className=" md:text-[21px] mx-auto lg:mx-0 text-center max-w-[700px] lg:text-justify my-8">
            {heroData?.description}
          </p>
          <Link href={heroData?.btnLink}>
            <ButtonPrimary className="px-12">Hire me</ButtonPrimary>
          </Link>
        </div>
        <div className="lg:col-span-4 order-1 lg:order-2 ">
          <Image className="mx-auto" src={heroData?.img} alt={heroData?.name} />
          {/* <SocialProfiles className="mt-6" /> */}
          {/* <div className="text-center relative">
          <Image className="inline-block" src={heroData?.img} alt={heroData?.name} />
          <span className="inline-block h-[40px] sm:h-[65px] lg:h-[70px] xl:h-[83px] w-[60%] sm:w-[350px]  lg:w-[70%] z-20 bg-primary opacity-60 absolute top-[15%] lg:top-[12%] left-1/2 -translate-x-1/2"></span>
        </div> */}
        </div>
      </div>
    </ExtraMargin>
  );
};

export default HeroSection;
