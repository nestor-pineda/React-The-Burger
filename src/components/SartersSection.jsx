import useFetch from "../CustomHooks/useFetch";
import StarterCard from "./StarterCard";
import "../scss/components/_starters-section.scss";

const StartersSection = () => {
  const { apiData: starters, loading, error } = useFetch("http://localhost:8000/starters");

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {starters && <StarterCard starters={starters} />}
    </>
  );
};

export default StartersSection;
