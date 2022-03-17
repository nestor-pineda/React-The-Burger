import useFetch from "../CustomHooks/useFetch";
import MenuCard from "../Components/MenuCard";
import Spinner from "./Spinner";
import "../scss/components/_menu-section.scss";

const Carousel = ({ itemType }) => {
  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta");
  const spinnerGrid = "spinnerGrid4";
  const foodType = itemType[0].type; // food type saved

  let bgColor = "";

  if (foodType === "burguer") {
    bgColor = "menu-card__price menu-card__price--green";
  } else if (foodType === "bebida") {
    bgColor = "menu-card__price menu-card__price--blue";
  } else if (foodType === "aperitivo") {
    bgColor = "menu-card__price menu-card__price--purple";
  } else {
    bgColor = "menu-card__price menu-card__price--brown";
  }

  return (
    <>
      <div className="menu-section">
        <div className="menu-section__left"></div>
        <div className="menu-section__center">
          {loading && <Spinner spinnerGrid={spinnerGrid} />}
          {apiData && <MenuCard apiData={apiData.filter((item) => item.type === foodType).slice(0, 4)} bgColor={bgColor} />}
          {error && <div>{error}</div>}
        </div>
        <div className="menu-section__right"></div>
      </div>
    </>
  );
};

export default Carousel;
