import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";
import Spinner from "./Spinner";
import "../scss/components/_menu-section.scss";
import "../scss/abstracts/_variables.scss";

const BurgerSection = () => {
  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta");

  const bgColor = { class: "menu-card__price menu-card__price--green" };
  const spinnerGrid = "spinnerGrid4";

  console.log(apiData);

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {loading && <Spinner spinnerGrid={spinnerGrid} />}
        {apiData && <MenuCard apiData={apiData.filter((item) => item.type === "burguer")} bgColor={bgColor.class} />}
        {error && <div>{error}</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default BurgerSection;

// https://the-burger-server.herokuapp.com/api/carta/type/:type
