import useFetch from "../CustomHooks/useFetch";
import MenuCard from "../Components/MenuCard";
import Spinner from "./Spinner";

const Carousel = ({ itemType }) => {
  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta");

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
      <h1>food type : {foodType} </h1>

      {loading && <p>Loading...</p>}
      {apiData && <MenuCard apiData={apiData.filter((item) => item.type === foodType).slice(0, 4)} bgColor={bgColor} />}
      {error && <div>{error}</div>}
    </>
  );
};

export default Carousel;
