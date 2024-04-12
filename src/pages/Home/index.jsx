import useFadeIn from "../../shared/hooks/useFadeIn";
import FeaturedMugs from "./FeaturedMugs";
import GlobalBanner from "./GlobalBanner";
import MoreProducts from "./MoreProducts";
import Parallax from "./Parallax";
import PromotionMugs from "./PromotionMugs";
import Story from "./Story";
import StoryLife from "./StoryLife";

const Home = () => {
  useFadeIn();
  return (
    <>
      <GlobalBanner></GlobalBanner>
      <Story></Story>
      <FeaturedMugs fadeIn={true}></FeaturedMugs>
      <MoreProducts fadeIn={true}></MoreProducts>
      <PromotionMugs fadeIn={true}></PromotionMugs>
      <Parallax></Parallax>
      <StoryLife fadeIn={true}></StoryLife>
    </>
  );
};

export default Home;
