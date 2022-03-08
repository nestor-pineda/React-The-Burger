import useFetch from "../CustomHooks/useFetch";
import BurgerCard from "./DrinkCard";
import "../scss/components/_menu-section.scss";

const BurgerSection = () => {
  const { apiData: drinks, loading, error } = useFetch("http://localhost:8000/drinks");

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {drinks && <BurgerCard drinks={drinks} />}
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default BurgerSection;
