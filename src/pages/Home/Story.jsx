const Story = () => {
  return (
    <>
      <div
        className="ct-container flex flex-col gap-5 items-center justify-center text-center px-36 pb-24
         md:px-4 md:pb-12 sm:px-4 sm:pb-12
      "
      >
        <h3 className="text-3xl leading-normal text-primary">
          Even the all-powerful Pointing has no control about the blind texts.
        </h3>
        <p className="leading-normal text-secondary">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        <a
          className="text-ct-brown border-b-2 border-underlineMenu hover:border-underlineMenuB transition-all duration-300"
          href="/#"
        >
          Read the full Story
        </a>
      </div>
    </>
  );
};

export default Story;
