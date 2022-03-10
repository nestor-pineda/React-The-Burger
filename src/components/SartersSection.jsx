import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";

const StartersSection = () => {
  const { apiData, loading, error } = useFetch("http://localhost:8000/starters");

  const bgColor = { class: "menu-card__price menu-card__price--purple" };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {apiData && <MenuCard apiData={apiData} bgColor={bgColor.class} />}
    </>
  );
};

export default StartersSection;
