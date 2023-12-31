import PropTypes from "prop-types";
import WhiteButton from "../../pages/Home/WhiteButton";
// group-hover:opacity-100 group-hover:-translate-y-2

const Product = ({ heightImage = "525px" }) => {
  return (
    <div>
      <div
        className="relative mb-6 cursor-pointer group 
      ct-responsive-mb
      "
      >
        <a
          style={{ height: `${heightImage}` }}
          className={`block bg-[url('/images/Pink_Premium_Ceramic.jpg')] bg-cover bg-center`}
        >
          <WhiteButton>EXPOLER MUG</WhiteButton>
        </a>
      </div>
      <div className="flex flex-col items-center gap-3">
        <a
          className="text-xl text-primary tracking-widest
        md:text-base sm:text-base
        "
          href="#"
        >
          Pink Premium Ceramic
        </a>
        <p className="flex gap-3 items-center">
          <span
            className="text-lg text-ct-brown
          md:base-sm sm:text-base
          "
          >
            $50.00$
          </span>{" "}
          <del className="text-sm text-ct-gary-40"> 69.00 USD</del>{" "}
        </p>
      </div>
    </div>
  );
};
Product.propTypes = {
  heightImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default Product;
