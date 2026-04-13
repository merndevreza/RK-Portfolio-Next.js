import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="border-none bg-offwhite min-h-[250px] xl:min-h-[344px] flex items-center shadow-none">
      <CardContent className="flex items-center justify-between px-7 pt-5 md:pt-0 pb-2 lg:px-[50px] gap-[30px]">
        <div className="hidden md:block">
          <Image
            className="rounded-full aspect-square object-cover object-center"
            src={testimonial?.img}
            alt={testimonial?.name}
          />
        </div>
        <div className="relative">
          <span className="text-primary text-2xl xl:text-4xl absolute -left-3 -top-3">
            &ldquo;
          </span>
          <p className="max-w-[700px] sm:text-lg 2xl:text-[21px] text-justify mb-2 lg:mb-4 relative text-[#424242]" >
            <span>{testimonial?.review}</span>
            <span className="text-primary text-2xl xl:text-4xl inline-block absolute -bottom-5 lg:-bottom-7">
              &ldquo;
            </span>
          </p>
          <div className="text-center md:text-left w-[80px]">
          <Image
            className="md:hidden mx-auto rounded-full aspect-square w-[80px] mb-1 object-cover object-center"
            src={testimonial?.img}
            alt={testimonial?.name}
          />
          <strong className="text-lg xl:text-2xl font-medium text-black">
            {testimonial?.name}
          </strong>
          <span className="text-base xl:text-[19px] text-black block">
            {testimonial?.designation}
          </span>

          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
