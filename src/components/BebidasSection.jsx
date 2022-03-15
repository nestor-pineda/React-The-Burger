import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";
import Spinner from "./Spinner";
import "../scss/components/_menu-section.scss";

const BebidasSection = () => {
  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta");

  const bgColor = { class: "menu-card__price menu-card__price--blue" };
  const spinnerGrid = "spinnerGrid4";

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {loading && <Spinner spinnerGrid={spinnerGrid} />}
        {apiData && <MenuCard apiData={apiData.filter((item) => item.type === "bebida")} bgColor={bgColor.class} />}
        {loading && <Spinner />}
        {error && <div>{error}</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default BebidasSection;
