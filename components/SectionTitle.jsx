
const SectionTitle = ({title,subtitle,leftAlignment}) => {
   return (
      <div className={`space-y-4 `}>
         <h2 className={`text-[38px] md:text-[50px] xl:text-[65px] font-bold ${leftAlignment ? "text-center lg:text-left": "text-center"}`}>{title}</h2>
         <p className={`md:text-[21px] mx-auto max-w-[730px]  ${leftAlignment ? "text-center lg:text-justify lg:mx-0 ": "text-center"}`}>{subtitle}</p>
      </div>
   );
};

export default SectionTitle;