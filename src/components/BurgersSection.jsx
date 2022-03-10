import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";
import "../scss/components/_menu-section.scss";
import "../scss/abstracts/_variables.scss";

const BurgerSection = () => {
  const { apiData, loading, error } = useFetch("http://localhost:8000/burgers");

  const bgColor = { class: "menu-card__price menu-card__price--green" };

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {apiData && <MenuCard apiData={apiData} bgColor={bgColor.class} />}
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default BurgerSection;
