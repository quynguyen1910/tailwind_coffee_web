import Heading from "../../shared/components/Heading";
import { getImage } from "../../shared/ultils";

// eslint-disable-next-line react/prop-types
const PromotionMugs = ({ fadeIn = false }) => {
  return (
    <>
      <div className="ct-container text-center mb-32 ct-responsive-pd">
        <Heading fadeIn={fadeIn}>
          BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
        </Heading>
        <div
          className={`flex gap-5 ${fadeIn ? "ct-fade" : ""}
        md:flex-col-reverse md:gap-10
        sm:flex-col-reverse sm:gap-10
        `}
        >
          <div
            className="flex flex-col gap-y-5 items-start flex-1 
          md:items-center md:gap-3
          sm:items-center sm:gap-3
          "
          >
            <label className="text-xs text-primary text-start">
              PREMIUM OFFER
            </label>
            <h2 className="text-4xl leading-normal">Get our Coffee Magazine</h2>
            <p
              className="text-black-70 text-start
            md:text-center
            sm:text-center
            "
            >
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <a
              className="block px-6 py-5 text-white uppercase text-xs font-bold tracking-widest bg-black hover:bg-ct-black-70"
              href="#"
            >
              START SHOPPING
            </a>
          </div>
          <div
            className="flex-1 flex items-center justify-stretch gap-5
          md:flex-col md:items-stretch
          sm:flex-col sm:items-stretch
          "
          >
            <div
              className="
            md:h-[280px]
            sm:h-[280px]
            "
            >
              <img
                className="ct-image"
                src={getImage("promotionMugs1.jpg")}
                alt="mug"
              />
            </div>
            <div
              className="flex flex-col gap-5
            md:flex-row md:h-[200px]
            sm:flex-row sm:h-[200px]
            "
            >
              <div className="flex-1">
                <img
                  className="ct-image"
                  src={getImage("promotionMugs2.jpg")}
                  alt="mug"
                />
              </div>
              <div className="flex-1">
                <img
                  className="ct-image"
                  src={getImage("promotionMugs3.jpg")}
                  alt="mug"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionMugs;
