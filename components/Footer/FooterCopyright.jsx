const FooterCopyright = ({ year, admin, info }) => {
  return (
    <div className="bg-footerBg py-4">
      <p className="text-white text-center font-normal lg:text-[21px]">
        © {year} <span className="text-primary font-bold">{admin}</span> {info}
      </p>
    </div>
  );
};

export default FooterCopyright;
