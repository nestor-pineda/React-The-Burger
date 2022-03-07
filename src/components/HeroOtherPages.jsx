import "../scss/components/_hero-other-pages.scss";

const HeroOtherPages = ({ imageHero }) => {
  return (
    <div className="hero-other-page">
      <div className="hero-other-page__left"></div>
      <div className="hero-other-page__center">
        <img className="hero-other-page__img" src={imageHero} alt="hero other page" />
      </div>
      <div className="hero-other-page__right"></div>
    </div>
  );
};

export default HeroOtherPages;
