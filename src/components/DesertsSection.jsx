import useFetch from "../CustomHooks/useFetch";
import DesertCard from "./DesertCard";

const DesertsSection = () => {
  const { apiData: deserts, loading, error } = useFetch("http://localhost:8000/deserts");

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {deserts && <DesertCard deserts={deserts} />}
    </>
  );
};

export default DesertsSection;
