import useFadeIn from "../../shared/hooks/useFadeIn";
import FeaturedMugs from "./FeaturedMugs";
import GlobalBanner from "./GlobalBanner";
import MoreProducts from "./MoreProducts";
import Story from "./Story";

const Home = () => {
  useFadeIn();
  return (
    <>
      <GlobalBanner></GlobalBanner>
      <Story></Story>
      <FeaturedMugs fadeIn={true}></FeaturedMugs>
      <MoreProducts fadeIn={true}></MoreProducts>
    </>
  );
};

export default Home;
