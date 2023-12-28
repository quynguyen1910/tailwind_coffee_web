import Heading from "../../shared/components/Heading";
import Product from "../../shared/components/Product";

// eslint-disable-next-line react/prop-types
const FeaturedMugs = ({ fadeIn = false }) => {
  return (
    <div
      className="ct-container text-center mb-24
    ct-responsive-pd md:mb-12 sm:mb-12
    "
    >
      <Heading fadeIn={fadeIn}>FEATURED MUGS</Heading>
      <div
        className={`grid grid-cols-2 gap-5 ${fadeIn ? "ct-fade" : ""}
      md:grid-cols-1 md:gap-12 sm:grid-cols-1 sm:gap-12
      `}
      >
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};

export default FeaturedMugs;
