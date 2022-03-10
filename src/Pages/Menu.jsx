import HeroOtherPages from "../Components/HeroOtherPages";
import BurgerSection from "../Components/BurgersSection";
import AperitivosSection from "../Components/AperitivosSection";
import PostresSection from "../Components/PostresSection";
import Title from "../Components/Title";
import BebidasSection from "../Components/BebidasSection";
import "../scss/pages/menu.scss";

const Menu = () => {
  const imageHero = { image1: "images/home-3.jpg", image2: "images/home-2.jpg" };
  const titleText = { title1: "The Burgers", title2: "The Drinks" };
  const titleBg = { greenBg: "greenBg", blueBg: "blueBg" };

  return (
    <>
      <HeroOtherPages imageHero={imageHero.image1} />
      {/* <Title titleText={titleText.title1} /> */}
      <Title titleText={titleText.title1} titleBg={titleBg.greenBg} />
      <BurgerSection />
      <div className="menu-double-section">
        <div className="menu-double-section__left"></div>
        <div className="menu-double-section__center">
          <div className="menu-double-section__col menu-double-section__col--border-right">
            <h1 className="menu-double-section__title menu-double-section__title--purple">Starters</h1>
            <AperitivosSection />
          </div>
          <div className="menu-double-section__col menu-double-section__col--border-top">
            <h1 className="menu-double-section__title menu-double-section__title--brown">Deserts</h1>
            <PostresSection />
          </div>
        </div>
        <div className="menu-double-section__right"></div>
      </div>
      <HeroOtherPages imageHero={imageHero.image2} />
      <Title titleText={titleText.title2} titleBg={titleBg.blueBg} />
      <BebidasSection />
    </>
  );
};

export default Menu;
