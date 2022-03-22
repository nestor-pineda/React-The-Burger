import SingleProductInfo from "../components/SingleProductInfo";
import useFetch from "../CustomHooks/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import Spinner from "../components/Spinner";

const SingleProduct = () => {
  const { id } = useParams();

  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta/" + id);

  const itemType = apiData;
  const titleText = "Related Products";
  const titleBg = "greenBg";
  const spinnerGrid = "spinnerGrid2";

  return (
    <>
      {apiData && <SingleProductInfo apiData={apiData[0]} />}
      {loading && <Spinner spinnerGrid={spinnerGrid} />}
      {error && <div>{error}</div>}
      <Title titleText={titleText} titleBg={titleBg} />
      {apiData && <Carousel itemType={itemType} />}
    </>
  );
};

export default SingleProduct;
