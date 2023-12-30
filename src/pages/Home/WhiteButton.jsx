const WhiteButton = ({ children }) => {
  return (
    <>
      <a className="block h-full w-full relative cursor-pointer hover:bg-ct-black-15 group transition-all duration-300">
        <div className="absolute w-full left-0 bottom-0 p-4 ">
          <span className="block text-xs text-pretty uppercase font-[600] bg-white px-6 py-5 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {children}
          </span>
        </div>
      </a>
    </>
  );
};

export default WhiteButton;
