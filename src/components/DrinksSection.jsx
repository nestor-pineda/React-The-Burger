import useFetch from "../CustomHooks/useFetch";
import BurgerCard from "./BurgerCard";
import "../scss/components/_burgers-section.scss";

const BurgerSection = () => {
  const { apiData: burgers, loading, error } = useFetch("http://localhost:8000/burgers");

  return (
    <div className="burgers-section">
      <div className="burgers-section__left"></div>
      <div className="burgers-section__center">
        {burgers && <BurgerCard burgers={burgers} />}
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div className="burgers-section__right"></div>
    </div>
  );
};

export default BurgerSection;
