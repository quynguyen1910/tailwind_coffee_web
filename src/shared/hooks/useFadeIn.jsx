import { useEffect } from "react";

const useFadeIn = () => {
  useEffect(() => {
    const nodesFadeIn = document.querySelectorAll(".ct-fade");
    console.log(nodesFadeIn);
    function fadeInOnScroll() {
      nodesFadeIn.forEach((nodeFadeIn) => {
        const fadeInTop = nodeFadeIn.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (fadeInTop < windowHeight * 0.75) {
          nodeFadeIn.classList.add("ct-fade-in");
        }
      });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    window.addEventListener("resize", fadeInOnScroll);
    return () => {
      window.removeEventListener("scroll", fadeInOnScroll);
      window.removeEventListener("resize", fadeInOnScroll);
    };
  }, []);
  return;
};

export default useFadeIn;
