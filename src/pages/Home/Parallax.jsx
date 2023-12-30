import useStyleImage from "../../shared/hooks/useStyleImage";

const Parallax = () => {
  const style = useStyleImage("home_parallax.jpg");
  return (
    <>
      <div
        style={style}
        className="w-full min-h-[340px] bg-cover bg-top bg-no-repeat bg-fixed mb-24
        md:bg-top sm:bg-top ct-reponsive-mb"
      ></div>
    </>
  );
};

export default Parallax;
