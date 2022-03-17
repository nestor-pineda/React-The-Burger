import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";
import Spinner from "./Spinner";

const PostresSection = () => {
  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta");

  const bgColor = { class: "menu-card__price menu-card__price--brown" };

  const spinnerGrid = "spinnerGrid2";

  return (
    <>
      {loading && <Spinner spinnerGrid={spinnerGrid} />}
      {error && <div>{error}</div>}
      {apiData && <MenuCard apiData={apiData.filter((item) => item.type === "postre")} bgColor={bgColor.class} />}
    </>
  );
};

export default PostresSection;
