import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";

const AperitivosSection = () => {
  const { apiData, loading, error } = useFetch("http://localhost:8000/carta");

  const bgColor = { class: "menu-card__price menu-card__price--purple" };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {apiData && <MenuCard apiData={apiData.filter((item) => item.type === "aperitivo")} bgColor={bgColor.class} />}
    </>
  );
};

export default AperitivosSection;
