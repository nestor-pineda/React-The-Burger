import Slider from "./Slider";
import "../scss/components/_hero-slider.scss";

const HeroHome = () => {
  return (
    <div className="hero-slider">
      <div className="hero-slider__left"></div>
      <div className="hero-slider__center">
        <Slider />
      </div>
      <div className="hero-slider__right"></div>
    </div>
  );
};

export default HeroHome;
