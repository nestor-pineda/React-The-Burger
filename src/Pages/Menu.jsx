import HeroOtherPages from "../Components/HeroOtherPages";
import BurgerSection from "../Components/BurgersSection";
import StartersSection from "../Components/SartersSection";
import DesertsSection from "../Components/DesertsSection";
import Title from "../Components/Title";
import "../scss/pages/menu.scss";

const Menu = () => {
  const titleText = "The Burgers";

  return (
    <>
      <HeroOtherPages />
      <Title titleText={titleText} />
      <BurgerSection />
      <div className="menu-double-section">
        <div className="menu-double-section__left"></div>
        <div className="menu-double-section__center">
          <div className="menu-double-section__col menu-double-section__col--border-right">
            <h1 className="menu-double-section__title menu-double-section__title--purple">Starters</h1>
            <StartersSection />
          </div>
          <div className="menu-double-section__col menu-double-section__col--border-top">
            <h1 className="menu-double-section__title menu-double-section__title--brown">Deserts</h1>
            <DesertsSection />
          </div>
        </div>
        <div className="menu-double-section__right"></div>
      </div>
    </>
  );
};

export default Menu;
