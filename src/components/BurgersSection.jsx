import useFetch from "../CustomHooks/useFetch";
import BurgerCard from "./BurgerCard";
import "../scss/components/_menu-section.scss";

const BurgerSection = () => {
  const { apiData: burgers, loading, error } = useFetch("http://localhost:8000/burgers");

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {burgers && <BurgerCard burgers={burgers} />}
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default BurgerSection;
