import useFetch from "../CustomHooks/useFetch";
import MenuCard from "./MenuCard";

const PostresSection = () => {
  const { apiData, loading, error } = useFetch("http://localhost:8000/carta");

  const bgColor = { class: "menu-card__price menu-card__price--brown" };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {apiData && <MenuCard apiData={apiData.filter((item) => item.type === "postre")} bgColor={bgColor.class} />}
    </>
  );
};

export default PostresSection;
