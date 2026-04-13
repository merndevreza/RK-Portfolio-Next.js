import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <Card className="bg-offwhite border-t-0 border-l-0 border-r-0 border-b-4 border-transparent hover:border-primary text-black transition-all hover:scale-105 duration-300 py-5 md:py-8  xl:py-[55px]">
      <CardHeader className="p-0 px-[18px] justify-end text-center sm:text-left">
        <Image className="mx-auto sm:mx-0 mt-auto" src={service?.icon} alt={service?.title} />
        <CardTitle className="py-3 xl:py-[25px] text-lg md:text-2xl  lg:text-3xl font-semibold">{service?.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 px-[18px]">
        <p className="text-center sm:text-left lg:text-[19px]">{service?.description}</p>
      </CardContent> 
    </Card>
  );
};

export default ServiceCard;
