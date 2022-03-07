import HeroOtherPages from "../Components/HeroOtherPages";
import BurgerSection from "../Components/BurgersSection";
import StartersSection from "../Components/SartersSection";
import DesertsSection from "../Components/DesertsSection";
import "../scss/pages/menu.scss";

const Menu = () => {
  return (
    <>
      <HeroOtherPages />
      <BurgerSection />

      <div className="menu-double-section">
        <div className="menu-double-section__left"></div>
        <div className="menu-double-section__center">
          <div className="menu-double-section__col menu-double-section__col--border">
            <StartersSection />
          </div>
          <div className="menu-double-section__col">
            <DesertsSection />
          </div>
        </div>
        <div className="menu-double-section__right"></div>
      </div>
    </>
  );
};

export default Menu;
