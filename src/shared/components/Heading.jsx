// eslint-disable-next-line react/prop-types
const Heading = ({ fadeIn = false, children }) => {
  return (
    <div
      className={`mb-24 ${fadeIn ? "ct-fade" : ""} overflow-hidden
    ct-responsive-pd
    md:mb-12 
    sm:mb-6
    `}
    >
      <label
        className="block mx-auto relative text-xs text-secondary text-center bg-white px-5
        lg:max-w-fit
        md:max-w-44 md:px-3
        sm:max-w-44 sm:px-3
          "
      >
        {children}
        <div className="absolute w-8 top-1/2 left-full h-px bg-ct-black-15"></div>
        <div className="absolute w-8 top-1/2 right-full h-px bg-ct-black-15"></div>
      </label>
    </div>
  );
};

export default Heading;
