const GlobalBanner = () => {
  return (
    <>
      <div className="relative ct-container-secondary bg-ct-dark mx-auto mb-24 md:mb-10 sm:mb-2">
        <div
          className="ct-global-banner ct-container bg-globalBanner bg-cover h-[530px] text-white flex flex-col justify-center items-center gap-8
        "
        >
          <div
            className="flex flex-col justify-center items-center gap-8 bg-ct-dark h-full w-full bg-opacity-30
          md:p-4 md:text-center sm:p-4 sm:text-center
          "
          >
            <div className="flex flex-col gap-3 items-center justify-center">
              <span className="text-xs opacity-80 leading-normal font-bold tracking-[2px] uppercase">
                BEST PLACE TO BUY DESIGN
              </span>
              <h2 className="ct-heading-h2">Coffee Mugs</h2>
              <span className="text-lg leading-normal">
                The most versatile furniture system ever created. Designed to
                fit your life, made to move and grow.
              </span>
            </div>
            <a
              className="block bg-white cursor-pointer p-5 text-ct-dark text-xs font-medium tracking-widest relative z-10"
              href="/#"
            >
              EXPLORE OUR PRODUCTS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalBanner;
