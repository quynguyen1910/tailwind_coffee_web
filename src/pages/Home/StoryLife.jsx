import Heading from "../../shared/components/Heading";
import useStyleImage from "../../shared/hooks/useStyleImage";
import WhiteButton from "./WhiteButton";

const StoryLife = ({ fadeIn = false }) => {
  const style = useStyleImage("storyLife.jpg");
  return (
    <>
      <div className="ct-container text-center">
        <Heading fadeIn={fadeIn}>BEHIND THE MUGS, LIFESTYLE STORIES</Heading>
        <div
          className={`grid grid-cols-3 gap-5 ${fadeIn ? "ct-fade" : ""}
        ct-responsive-pd
        md:grid-cols-2 md:gap-y-12
        sm:grid-cols-1 sm:gap-y-12`}
        >
          <div className="flex flex-col gap-6">
            <a href="#" style={style} className="h-[300px] bg-cover bg-center">
              <WhiteButton>read the full story</WhiteButton>
            </a>
            <div className="flex-1 flex flex-col gap-3 text-start items-start">
              <h3 className="text-xl text-ct-black-80 hover:text-ct-brown cursor-pointer ct-heading">
                <a href="#">
                  Health Check: why do I get a headache when I haven’t had my
                  coffee?
                </a>
              </h3>
              <p className="mt-auto text-ct-black-70">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
              <span className="text-xs uppercase font-semibold text-ct-black-40 mt-auto">
                OCTOBER 9, 2018
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div style={style} className="h-[300px] bg-cover bg-center">
              <WhiteButton>read the full story</WhiteButton>
            </div>
            <div className="flex-1 flex flex-col gap-3 text-start items-start">
              <h3 className="text-xl text-ct-black-80 hover:text-ct-brown cursor-pointer ct-heading">
                How long does a cup of coffee keep you awake?
              </h3>
              <p className="mt-auto text-ct-black-70">
                It is a paradisematic country, in which roasted parts. Vel qui
                et ad voluptatem.
              </p>
              <span className="text-xs uppercase font-semibold text-ct-black-40 mt-auto">
                OCTOBER 9, 2018
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div style={style} className="h-[300px] bg-cover bg-center">
              <WhiteButton>read the full story</WhiteButton>
            </div>
            <div className="flex-1 flex flex-col gap-3 text-start items-start">
              <h3 className="text-xl text-ct-black-80 hover:text-ct-brown cursor-pointer ct-heading">
                Recent research suggests that heavy coffee drinkers may reap
                health benefits.
              </h3>
              <p className="mt-auto text-ct-black-70">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
              <span className="text-xs uppercase font-semibold text-ct-black-40 mt-auto">
                OCTOBER 9, 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryLife;
