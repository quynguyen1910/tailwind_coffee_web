import { getImage } from "../ultils";

const useStyleImage = (nameImage) => {
  const urlImage = getImage(nameImage);
  return { backgroundImage: `url(${urlImage})` };
};

export default useStyleImage;
