import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";
import "../scss/components/_menu-section.scss";

const MenuSection = () => {
  const { apiData: burgers, loading, error } = useFetch("http://localhost:8000/burgers");

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {burgers && <MenuCard burgers={burgers} />}
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default MenuSection;
