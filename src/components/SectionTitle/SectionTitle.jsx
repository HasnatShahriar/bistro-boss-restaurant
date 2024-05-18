

const SectionTitle = ({heading ,subHeading}) => {
  return (
    <div className="text-center md:w-1/4 mx-auto mt-8 mb-12">
      <p className="text-orange-500 mb-4 text-lg">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-2 py-2 font-semibold uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;