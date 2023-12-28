import useFadeIn from "../../shared/hooks/useFadeIn";
import FeaturedMugs from "./FeaturedMugs";
import GlobalBanner from "./GlobalBanner";
import MoreProducts from "./MoreProducts";
import PromotionMugs from "./PromotionMugs";
import Story from "./Story";

const Home = () => {
  useFadeIn();
  return (
    <>
      <GlobalBanner></GlobalBanner>
      <Story></Story>
      <FeaturedMugs fadeIn={true}></FeaturedMugs>
      <MoreProducts fadeIn={true}></MoreProducts>
      <PromotionMugs fadeIn={true}></PromotionMugs>
    </>
  );
};

export default Home;
