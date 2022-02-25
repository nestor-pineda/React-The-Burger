import MenuCard from "./MenuCard";
import "../scss/components/_menu-section.scss";

const MenuSection = () => {
  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default MenuSection;
