import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";

const DesertsSection = () => {
  const { apiData, loading, error } = useFetch("http://localhost:8000/deserts");

  const bgColor = { class: "menu-card__price menu-card__price--brown" };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {apiData && <MenuCard apiData={apiData} bgColor={bgColor.class} />}
    </>
  );
};

export default DesertsSection;
