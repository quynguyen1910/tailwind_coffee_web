// eslint-disable-next-line react/prop-types
const Heading = ({ fadeIn = false, children }) => {
  return (
    <div
      className={`mb-24 ${fadeIn ? "ct-fade" : ""}
    md:mb-12 sm:mb-12
    `}
    >
      <label
        className="relative text-xs text-secondary text-center px-5 bg-white
          ct-through-heading
          sm:text-[11px] sm:font-bold
          "
      >
        {children}
      </label>
    </div>
  );
};

export default Heading;
