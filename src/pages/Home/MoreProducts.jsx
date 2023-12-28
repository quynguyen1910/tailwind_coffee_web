import Heading from "../../shared/components/Heading";
import Product from "../../shared/components/Product";

// eslint-disable-next-line react/prop-types
const MoreProducts = ({ fadeIn = false }) => {
  return (
    <div className="ct-container text-center mb-24">
      <Heading fadeIn={fadeIn}>MORE PRODUCTS</Heading>
      <div
        className={`grid lg:grid-cols-3 gap-5 mb-12 ${fadeIn ? "ct-fade" : ""}
        ct-responsive-pd md:grid-cols-2 sm:grid-cols-1 md:gap-12 sm:gap-12
        `}
      >
        <Product heightImage="365px"></Product>
        <Product heightImage="365px"></Product>
        <Product heightImage="365px"></Product>
        <Product heightImage="365px"></Product>
        <Product heightImage="365px"></Product>
        <Product heightImage="365px"></Product>
      </div>
    </div>
  );
};

export default MoreProducts;
