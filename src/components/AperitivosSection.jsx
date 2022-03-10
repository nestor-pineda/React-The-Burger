import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";
import Spinner from "./Spinner";

const AperitivosSection = () => {
  const { apiData, loading, error } = useFetch("http://localhost:8000/carta");

  const bgColor = { class: "menu-card__price menu-card__price--purple" };

  const spinnerGrid = "spinnerGrid2";

  return (
    <>
      {loading && <Spinner spinnerGrid={spinnerGrid} />}
      {error && <div>{error}</div>}
      {apiData && <MenuCard apiData={apiData.filter((item) => item.type === "aperitivo")} bgColor={bgColor.class} />}
    </>
  );
};

export default AperitivosSection;
